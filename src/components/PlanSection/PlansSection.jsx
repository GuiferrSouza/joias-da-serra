import { FaRulerCombined, FaBed, FaCouch, FaUtensils } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import "./PlansSection.css";

export default function PlansSection() {
    const plans = [
        {
            area: "50,14m²",
            label: "Tipo A",
            image: null,
            rooms: [
                { icon: <FaBed />, name: "Dormitório" },
                { icon: <FaCouch />, name: "Sala de Estar" },
                { icon: <FaUtensils />, name: "Cozinha" },
            ],
        },
        {
            area: "52,65m²",
            label: "Tipo B",
            image: null,
            rooms: [
                { icon: <FaBed />, name: "Dormitório" },
                { icon: <FaCouch />, name: "Sala de Estar" },
                { icon: <FaUtensils />, name: "Cozinha Ampliada" },
            ],
        },
    ];

    return (
        <section className="plans" id="plantas">
            <div className="container">
                <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                    <div className="plans-header">
                        <span className="section-label">Plantas e Metragens</span>
                        <h2>Espaço que faz sentido</h2>
                        <p>Layout funcional com ambientes bem distribuídos e melhor aproveitamento do espaço interno.</p>
                    </div>
                </AnimateOnScroll>

                <div className="plans-grid">
                    {plans.map((plan, i) => (
                        <AnimateOnScroll key={i} animation="fade-in-up" delay={0.2 + i * 0.15}>
                            <div className="plan-card">
                                <div className="plan-image">
                                    <img src={plan.image} alt={`Planta ${plan.label} - ${plan.area}`} />
                                </div>
                                <div className="plan-info">
                                    <div className="plan-meta">
                                        <span className="plan-label">{plan.label}</span>
                                        <strong className="plan-area">
                                            <FaRulerCombined />
                                            {plan.area}
                                        </strong>
                                    </div>
                                    <ul className="plan-rooms">
                                        {plan.rooms.map((room, j) => (
                                            <li key={j}>
                                                {room.icon}
                                                <span>{room.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll animation="fade-in-up" delay={0.5}>
                    <div className="plans-cta">
                        <a href="https://wa.me/5511991106358?text=Olá, gostaria de ver as plantas completas."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="plans-cta-btn shiny">
                            Ver plantas completas
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}