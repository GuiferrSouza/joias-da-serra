import { FaRulerCombined, FaMapMarkerAlt, FaDraftingCompass, FaHardHat, FaCalendarCheck } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import "./FeaturesSection.css";

export default function FeaturesSection() {
    const features = [
        {
            icon: <FaRulerCombined />,
            title: "Plantas inteligentes",
            desc: "Ambientes funcionais com aproveitamento máximo de cada metro quadrado.",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Localização estratégica",
            desc: "A 400m da Estação, no coração de Rio Grande da Serra.",
        },
        {
            icon: <FaDraftingCompass />,
            title: "Projeto bem dimensionado",
            desc: "Cada detalhe foi planejado para oferecer conforto e praticidade.",
        },
        {
            icon: <FaHardHat />,
            title: "Acompanhamento técnico",
            desc: "Obra executada com rigor técnico em todas as etapas.",
        },
        {
            icon: <FaCalendarCheck />,
            title: "Entrega Dezembro 2027",
            desc: "Prazo estabelecido com planejamento e compromisso.",
        },
    ];

    return (
        <section className="features" id="diferenciais">
            <div className="features-bg" aria-hidden="true" />
            <div className="container">
                <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                    <div className="features-header">
                        <span className="section-label section-label--light">Diferenciais</span>
                        <h2>Por que escolher o Joias da Serra?</h2>
                    </div>
                </AnimateOnScroll>

                <div className="features-grid">
                    {features.map((item, i) => (
                        <AnimateOnScroll key={i} animation="fade-in-up" delay={0.15 + i * 0.1}>
                            <div className="feature-card">
                                <div className="feature-card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}