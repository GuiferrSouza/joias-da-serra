import { useState, useEffect, useRef, createContext, Children } from "react";
import "./FloatingButtons.css";

const ScrolledContext = createContext(false);

export function FloatingButtons({ scrollThreshold = 80, children }) {
    const [scrolled, setScrolled] = useState(false);
    const [exiting, setExiting] = useState(new Set());
    const prevVisibleKeys = useRef(new Set());
    const exitTimers = useRef({});

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > scrollThreshold);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollThreshold]);

    const allButtons = Children.toArray(children);

    const nowVisibleKeys = new Set(
        allButtons
            .filter(child => scrolled && (child.props.visible ?? true))
            .map(child => child.key)
    );

    useEffect(() => {
        // Keys que voltaram a ser visíveis — cancela os timers de saída
        const reappeared = [...nowVisibleKeys].filter(k => exitTimers.current[k]);
        reappeared.forEach(k => {
            clearTimeout(exitTimers.current[k]);
            delete exitTimers.current[k];
        });

        if (reappeared.length > 0) {
            setExiting(prev => {
                const next = new Set(prev);
                reappeared.forEach(k => next.delete(k));
                return next;
            });
        }

        const disappeared = [...prevVisibleKeys.current].filter(k => !nowVisibleKeys.has(k));

        if (disappeared.length > 0) {
            setExiting(prev => new Set([...prev, ...disappeared]));

            disappeared.forEach(k => {
                clearTimeout(exitTimers.current[k]);

                exitTimers.current[k] = setTimeout(() => {
                    setExiting(prev => {
                        const next = new Set(prev);
                        next.delete(k);
                        return next;
                    });
                    delete exitTimers.current[k];
                }, 350);
            });
        }

        prevVisibleKeys.current = nowVisibleKeys;
    }, [scrolled, ...allButtons.map(c => c.props.visible)]);

    useEffect(() => {
        return () => Object.values(exitTimers.current).forEach(clearTimeout);
    }, []);

    const rendered = allButtons.filter(child => {
        const key = child.key;
        return nowVisibleKeys.has(key) || exiting.has(key);
    });

    return (
        <ScrolledContext.Provider value={scrolled}>
            <div className="floating-buttons">
                {rendered.map(child =>
                    exiting.has(child.key)
                        ? { ...child, props: { ...child.props, _exiting: true } }
                        : child
                )}
            </div>
        </ScrolledContext.Provider>
    );
}

export function FloatingButton({
    icon,
    label,
    tooltip,
    href,
    external = false,
    scrollTo,
    onClick,
    className = "",
    _exiting = false,
    showTooltipOnEnter = false,
    tooltipDuration = 2500,
}) {
    const [tooltipForced, setTooltipForced] = useState(false);
    const tooltipTimer = useRef(null);

    useEffect(() => {
        if (!showTooltipOnEnter || _exiting || !tooltip) return;

        const raf = requestAnimationFrame(() => {
            setTooltipForced(true);
            clearTimeout(tooltipTimer.current);
            tooltipTimer.current = setTimeout(() => setTooltipForced(false), tooltipDuration);
        });

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(tooltipTimer.current);
        };
    }, [showTooltipOnEnter, _exiting, tooltip, tooltipDuration]);

    const ariaLabel = label ?? tooltip;
    const animClass = _exiting ? "fab--exit" : "fab--enter";
    const baseClass = `fab shiny ${animClass} ${className}`.trim();

    function handleScrollTo(e) {
        if (!scrollTo) return;
        e.preventDefault();
        const target =
            typeof scrollTo === "string"
                ? document.querySelector(scrollTo)
                : scrollTo?.current;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        onClick?.();
    }

    function renderButton() {
        if (href && external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={ariaLabel} className={baseClass} onClick={onClick}>
                    {icon}
                </a>
            );
        }
        if (href) {
            return (
                <a href={href} aria-label={ariaLabel} className={baseClass} onClick={onClick}>
                    {icon}
                </a>
            );
        }
        return (
            <button type="button" aria-label={ariaLabel} className={baseClass}
                onClick={scrollTo ? handleScrollTo : onClick}>
                {icon}
            </button>
        );
    }

    if (!tooltip) return renderButton();

    return (
        <div className="fab-wrapper">
            <span className={`fab-tooltip${tooltipForced ? " fab-tooltip--visible" : ""}`}>
                {tooltip}
            </span>
            {renderButton()}
        </div>
    );
}