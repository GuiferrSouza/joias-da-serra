import { forwardRef, useState, useRef } from "react";
import { FaBed, FaCouch, FaUtensils } from "react-icons/fa";
import "./PlansSection.css";

/* ─── SVG Planta Tipo A — 50,14m² ─────────────────────── */
const FloorPlanA = () => (
    <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" className="floor-plan-svg">
        {/* Contorno externo */}
        <rect x="20" y="20" width="380" height="300" fill="none" stroke="#004679" strokeWidth="2.5" strokeOpacity="0.35"/>

        {/* Dormitório — quadrante superior esquerdo */}
        <rect x="20" y="20" width="195" height="155" fill="rgba(0,70,121,0.03)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="117" y="88" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="9" fontFamily="DM Sans, sans-serif" letterSpacing="2" textTransform="uppercase">DORMITÓRIO</text>
        {/* Cama */}
        <rect x="50" y="50" width="55" height="75" rx="2" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="50" y="50" width="55" height="18" rx="2" fill="rgba(0,70,121,0.08)" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Mesinha */}
        <rect x="112" y="58" width="18" height="18" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>

        {/* Banheiro — quadrante superior direito */}
        <rect x="215" y="20" width="105" height="90" fill="rgba(0,70,121,0.04)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="267" y="62" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="8" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">BANHEIRO</text>
        {/* Vaso */}
        <ellipse cx="238" cy="95" rx="11" ry="14" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <rect x="229" y="81" width="18" height="8" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        {/* Box */}
        <rect x="262" y="35" width="48" height="40" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <path d="M262 75 Q286 35 310 35" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Circulação / Hall */}
        <rect x="215" y="110" width="105" height="65" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="4 3"/>
        <text x="267" y="146" textAnchor="middle" fill="#004679" fillOpacity="0.2" fontSize="7.5" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">HALL</text>
        {/* Porta dormitório */}
        <path d="M215 110 Q215 140 245 140" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <line x1="215" y1="110" x2="245" y2="140" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Sala de estar — inferior esquerdo */}
        <rect x="20" y="175" width="230" height="145" fill="rgba(0,70,121,0.03)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="135" y="240" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="9" fontFamily="DM Sans, sans-serif" letterSpacing="2">SALA</text>
        {/* Sofá */}
        <rect x="40" y="260" width="90" height="30" rx="3" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="40" y="260" width="90" height="10" rx="2" fill="rgba(0,70,121,0.06)" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <rect x="40" y="260" width="12" height="30" rx="2" fill="rgba(0,70,121,0.06)" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>
        <rect x="118" y="260" width="12" height="30" rx="2" fill="rgba(0,70,121,0.06)" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>
        {/* Mesa centro */}
        <rect x="65" y="230" width="45" height="25" rx="2" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Cozinha — inferior direito */}
        <rect x="250" y="175" width="150" height="145" fill="rgba(0,70,121,0.04)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="325" y="235" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="9" fontFamily="DM Sans, sans-serif" letterSpacing="2">COZINHA</text>
        {/* Bancada L */}
        <rect x="260" y="185" width="130" height="22" rx="1" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="370" y="185" width="22" height="110" rx="1" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Fogão */}
        <rect x="268" y="188" width="36" height="16" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <circle cx="277" cy="196" r="4" fill="none" stroke="#004679" strokeWidth="0.7" strokeOpacity="0.2"/>
        <circle cx="293" cy="196" r="4" fill="none" stroke="#004679" strokeWidth="0.7" strokeOpacity="0.2"/>
        {/* Pia */}
        <rect x="312" y="188" width="28" height="16" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <circle cx="326" cy="196" r="4" fill="none" stroke="#004679" strokeWidth="0.7" strokeOpacity="0.2"/>
        {/* Mesa */}
        <rect x="262" y="265" width="95" height="42" rx="2" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Porta entrada */}
        <line x1="20" y1="230" x2="20" y2="270" stroke="#f0ede8" strokeWidth="3"/>
        <path d="M20 230 Q60 230 60 270" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.25"/>

        {/* Dimensão label */}
        <text x="400" y="335" textAnchor="end" fill="#004679" fillOpacity="0.2" fontSize="8" fontFamily="DM Sans, sans-serif" letterSpacing="1">50,14 m²</text>
    </svg>
);

/* ─── SVG Planta Tipo B — 52,65m² ─────────────────────── */
const FloorPlanB = () => (
    <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" className="floor-plan-svg">
        {/* Contorno externo — levemente diferente */}
        <rect x="20" y="20" width="380" height="300" fill="none" stroke="#004679" strokeWidth="2.5" strokeOpacity="0.35"/>

        {/* Dormitório — superior esquerdo, mais largo */}
        <rect x="20" y="20" width="210" height="150" fill="rgba(0,70,121,0.03)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="125" y="85" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="9" fontFamily="DM Sans, sans-serif" letterSpacing="2">DORMITÓRIO</text>
        <rect x="48" y="46" width="62" height="78" rx="2" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="48" y="46" width="62" height="18" rx="2" fill="rgba(0,70,121,0.08)" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="118" y="54" width="18" height="18" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        {/* Guarda-roupa */}
        <rect x="155" y="26" width="65" height="22" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <line x1="187" y1="26" x2="187" y2="48" stroke="#004679" strokeWidth="0.6" strokeOpacity="0.15"/>

        {/* Banheiro — superior direito */}
        <rect x="230" y="20" width="100" height="95" fill="rgba(0,70,121,0.04)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="280" y="62" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="8" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">BANHEIRO</text>
        <ellipse cx="250" cy="98" rx="11" ry="14" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <rect x="241" y="84" width="18" height="8" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <rect x="273" y="30" width="48" height="42" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <path d="M273 72 Q297 30 321 30" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Hall */}
        <rect x="230" y="115" width="100" height="55" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="4 3"/>
        <text x="280" y="146" textAnchor="middle" fill="#004679" fillOpacity="0.2" fontSize="7.5" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">HALL</text>

        {/* Sala — inferior esquerdo */}
        <rect x="20" y="170" width="215" height="150" fill="rgba(0,70,121,0.03)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="127" y="238" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="9" fontFamily="DM Sans, sans-serif" letterSpacing="2">SALA</text>
        <rect x="38" y="255" width="95" height="32" rx="3" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="38" y="255" width="95" height="11" rx="2" fill="rgba(0,70,121,0.06)" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <rect x="38" y="255" width="13" height="32" rx="2" fill="rgba(0,70,121,0.06)" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>
        <rect x="120" y="255" width="13" height="32" rx="2" fill="rgba(0,70,121,0.06)" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>
        <rect x="62" y="225" width="50" height="26" rx="2" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Cozinha ampliada — inferior direito */}
        <rect x="235" y="170" width="165" height="150" fill="rgba(0,70,121,0.04)" stroke="#004679" strokeWidth="1.2" strokeOpacity="0.25"/>
        <text x="317" y="228" textAnchor="middle" fill="#004679" fillOpacity="0.3" fontSize="8.5" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">COZINHA</text>
        <text x="317" y="242" textAnchor="middle" fill="#004679" fillOpacity="0.25" fontSize="7.5" fontFamily="DM Sans, sans-serif" letterSpacing="1">AMPLIADA</text>
        <rect x="245" y="180" width="145" height="22" rx="1" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="368" y="180" width="22" height="115" rx="1" fill="none" stroke="#004679" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="252" y="183" width="38" height="16" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <circle cx="261" cy="191" r="4" fill="none" stroke="#004679" strokeWidth="0.7" strokeOpacity="0.2"/>
        <circle cx="279" cy="191" r="4" fill="none" stroke="#004679" strokeWidth="0.7" strokeOpacity="0.2"/>
        <rect x="298" y="183" width="30" height="16" rx="1" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.2"/>
        <circle cx="313" cy="191" r="4" fill="none" stroke="#004679" strokeWidth="0.7" strokeOpacity="0.2"/>
        <rect x="245" y="260" width="108" height="48" rx="2" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.15"/>

        {/* Porta entrada */}
        <line x1="20" y1="225" x2="20" y2="268" stroke="#f0ede8" strokeWidth="3"/>
        <path d="M20 225 Q63 225 63 268" fill="none" stroke="#004679" strokeWidth="0.8" strokeOpacity="0.25"/>

        <text x="400" y="335" textAnchor="end" fill="#004679" fillOpacity="0.2" fontSize="8" fontFamily="DM Sans, sans-serif" letterSpacing="1">52,65 m²</text>
    </svg>
);

export default forwardRef(function PlansSection(_, ref) {
    const [active, setActive] = useState(0);
    const [displayed, setDisplayed] = useState(0);
    const [fading, setFading] = useState(false);
    const transitioning = useRef(false);

    const plans = [
        {
            area: "50,14", unit: "m²", label: "Tipo A",
            floorPlan: <FloorPlanA />,
            rooms: [
                { icon: <FaBed />, name: "Dormitório" },
                { icon: <FaCouch />, name: "Sala de Estar" },
                { icon: <FaUtensils />, name: "Cozinha" },
            ],
        },
        {
            area: "52,65", unit: "m²", label: "Tipo B",
            floorPlan: <FloorPlanB />,
            rooms: [
                { icon: <FaBed />, name: "Dormitório" },
                { icon: <FaCouch />, name: "Sala de Estar" },
                { icon: <FaUtensils />, name: "Cozinha Ampliada" },
            ],
        },
    ];

    function handleSelect(i) {
        if (i === active || transitioning.current) return;
        transitioning.current = true;
        setActive(i);
        setFading(true);
        setTimeout(() => {
            setDisplayed(i);
            setFading(false);
            transitioning.current = false;
        }, 320);
    }

    const plan = plans[displayed];

    return (
        <section ref={ref} className="plans" id="plantas">
            <div className="plans-layout">

                <aside className="plans-sidebar">
                    <div className="plans-sidebar__top">
                        <p className="plans-eyebrow">Plantas e Metragens</p>
                        <h2>Espaço que<br />faz sentido</h2>
                        <p className="plans-subtitle">
                            Layout funcional com ambientes bem distribuídos
                            e melhor aproveitamento do espaço interno.
                        </p>
                    </div>

                    <ul className={`plans-rooms ${fading ? "plans-rooms--fading" : ""}`}>
                        {plan.rooms.map((room, j) => (
                            <li key={j} className="plans-room">
                                <span className="plans-room__icon">{room.icon}</span>
                                <span className="plans-room__name">{room.name}</span>
                            </li>
                        ))}
                    </ul>

                    <a href="#contato" className="plans-cta">
                        Ver plantas completas
                        <span className="plans-cta__arrow">→</span>
                    </a>
                </aside>

                <div className="plans-canvas-wrap">
                    <div className="plans-switcher">
                        {plans.map((p, i) => (
                            <button
                                key={i}
                                className={`plans-switcher__btn ${active === i ? "plans-switcher__btn--active" : ""}`}
                                onClick={() => handleSelect(i)}
                            >
                                <span className="plans-switcher__label">{p.label}</span>
                                <span className="plans-switcher__sep">—</span>
                                <span className="plans-switcher__area">{p.area}{p.unit}</span>
                            </button>
                        ))}
                    </div>

                    <div className={`plans-canvas ${fading ? "plans-canvas--fading" : ""}`}>
                        {plan.floorPlan}
                    </div>
                </div>

            </div>
        </section>
    );
});