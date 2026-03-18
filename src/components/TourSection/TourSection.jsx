import { useState, useEffect, useRef } from "react";
import tourBg from "../../assets/images/room.png";
import "./TourSection.css";

export default function TourSection() {
    const [open, setOpen]       = useState(false); // controla montagem
    const [visible, setVisible] = useState(false); // controla animação CSS
    const closeTimer = useRef(null);

    // Abre: monta primeiro, depois anima entrada
    function openModal() {
        setOpen(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setVisible(true));
        });
    }

    // Fecha: anima saída, depois desmonta
    function closeModal() {
        setVisible(false);
        closeTimer.current = setTimeout(() => setOpen(false), 380);
    }

    useEffect(() => {
        return () => clearTimeout(closeTimer.current);
    }, []);

    // Bloqueia scroll sem deslocar a página
    useEffect(() => {
        const el  = document.documentElement;
        const bar = window.innerWidth - document.documentElement.clientWidth;

        if (open) {
            el.style.overflow      = "hidden";
            el.style.paddingRight  = `${bar}px`; // compensa a scrollbar
        } else {
            el.style.overflow      = "";
            el.style.paddingRight  = "";
        }
        return () => {
            el.style.overflow     = "";
            el.style.paddingRight = "";
        };
    }, [open]);

    // Fecha com Escape
    useEffect(() => {
        const handle = (e) => { if (e.key === "Escape") closeModal(); };
        window.addEventListener("keydown", handle);
        return () => window.removeEventListener("keydown", handle);
    }, []);

    return (
        <>
            <section className="tour" id="tour-3d">
                <div className="tour-bg">
                    <img src={tourBg} alt="" aria-hidden="true" />
                    <div className="tour-bg__overlay" />
                </div>

                <div className="tour-content">
                    <p className="tour-eyebrow">Tour 3D</p>
                    <h2>Explore antes<br />de decidir</h2>
                    <p className="tour-text">
                        Navegue pelo apartamento de forma interativa e entenda,
                        na prática, como cada espaço foi pensado.
                    </p>
                    <button className="tour-btn" onClick={openModal}>
                        <span className="tour-btn__icon">▶</span>
                        Iniciar tour 3D
                    </button>
                </div>
            </section>

            {open && (
                <div
                    className={`tour-modal ${visible ? "tour-modal--visible" : ""}`}
                    onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
                >
                    <div className="tour-modal__box">
                        <button
                            className="tour-modal__close"
                            onClick={closeModal}
                            aria-label="Fechar tour"
                        >
                            ✕ Fechar
                        </button>
                        <iframe
                            src="https://tour.meupasseiovirtual.com/view/DMhwgD6Wr5s"
                            title="Projeto Joviae - Domus Vitta | Tour 3D"
                            allowFullScreen
                            allow="xr-spatial-tracking"
                        />
                    </div>
                </div>
            )}
        </>
    );
}