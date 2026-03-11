import { FaTrain, FaHome, FaCalendarAlt } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import "./HeroSection.css";

export default function HeroSection() {
    const features = [
        { icon: <FaTrain />, text: "A 400m da Estação" },
        { icon: <FaHome />, text: "50m² a 52m²" },
        { icon: <FaCalendarAlt />, text: "Entrega Dez/2027" },
    ];

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>
                    <AnimateOnScroll animation="fade-in-left" delay={0.3}>
                        <span>More bem.</span>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-in-left" delay={0.5}>
                        <span>Viva melhor.</span>
                    </AnimateOnScroll>
                </h1>
                <AnimateOnScroll animation="fade-in-left" delay={0.7}>
                    <p>
                        Apartamentos residenciais em Rio Grande da Serra,
                        com plantas inteligentes e conforto no dia a dia.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-left" delay={0.9}>
                    <div className="hero-actions">
                        <button className="project-button shiny">
                            Conheça o projeto
                        </button>
                        <button className="call-button shiny">
                            Agende um atendimento
                        </button>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-left" delay={1.1}>
                    <div className="hero-features">
                        {features.map((item, index) => (
                            <div key={index} className="feature">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}