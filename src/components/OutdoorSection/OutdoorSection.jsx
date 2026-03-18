import { useState, useEffect, useRef, useCallback } from "react";
import "./OutdoorSection.css";

export default function OutdoorSection() {
    const images = [
        { src: null, caption: "Área de convivência" },
        { src: null, caption: "Integração com áreas verdes" },
        { src: null, caption: "Espaços para o dia a dia" },
        { src: null, caption: "Jardins privativos" },
        { src: null, caption: "Deck ao ar livre" },
        { src: null, caption: "Área de lazer coberta" },
    ];

    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoPlayRef = useRef(null);
    const touchStartX = useRef(null);

    const goTo = useCallback((index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((index + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [isTransitioning, images.length]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    useEffect(() => { autoPlayRef.current = next; }, [next]);
    useEffect(() => {
        const id = setInterval(() => autoPlayRef.current(), 5000);
        return () => clearInterval(id);
    }, []);

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
        touchStartX.current = null;
    };

    return (
        <section
            className="outdoor"
            id="areas-externas"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Slides */}
            {images.map((img, i) => (
                <div
                    key={i}
                    className={`outdoor-slide ${i === current ? "outdoor-slide--active" : ""}`}
                >
                    {img.src
                        ? <img src={img.src} alt={img.caption} />
                        : <div className="outdoor-slide__placeholder">
                            <span>{String(i + 1).padStart(2, "0")}</span>
                          </div>
                    }
                </div>
            ))}

            {/* Overlay gradiente */}
            <div className="outdoor-overlay" />

            {/* Cabeçalho — canto superior esquerdo */}
            <div className="outdoor-header">
                <p className="outdoor-eyebrow">Áreas Externas</p>
                <h2>Qualidade de vida<br />além do apartamento</h2>
            </div>

            {/* Rodapé — caption + navegação */}
            <div className="outdoor-footer">
                <div className="outdoor-footer__left">
                    <p className="outdoor-caption" key={current}>
                        {images[current].caption}
                    </p>
                    {/* Dots */}
                    <div className="outdoor-dots">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`outdoor-dot ${i === current ? "outdoor-dot--active" : ""}`}
                                onClick={() => goTo(i)}
                                aria-label={`Imagem ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Navegação — canto inferior direito */}
                <div className="outdoor-nav">
                    <span className="outdoor-nav__count">
                        <strong>{String(current + 1).padStart(2, "0")}</strong>
                        <em>{String(images.length).padStart(2, "0")}</em>
                    </span>
                    <button className="outdoor-nav__btn" onClick={prev} aria-label="Anterior">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button className="outdoor-nav__btn" onClick={next} aria-label="Próximo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Barra de progresso */}
            <div className="outdoor-progress" key={current}>
                <div className="outdoor-progress__bar" />
            </div>

        </section>
    );
}