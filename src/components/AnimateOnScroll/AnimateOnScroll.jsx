import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AnimateOnScroll({
    children,
    animation = "fade-in-up",
    delay = 0,
    duration = 1,
    once = true,
}) {
    const [ref, isVisible] = useScrollAnimation({ once });

    return (
        <div
            ref={ref}
            style={{
                "--animation-delay": `${delay}s`,
                "--animation-duration": `${duration}s`,
            }}
            className={`
                animated
                ${isVisible ? animation : "opacity-0"}
            `}
        >
            {children}
        </div>
    );
}