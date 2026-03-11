import { FaTrain, FaLeaf, FaShoppingBag, FaShieldAlt } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import "./LocationSection.css";

export default function LocationSection() {
    const highlights = [
        { icon: <FaTrain />, title: "400m da Estação", desc: "Rio Grande da Serra" },
        { icon: <FaShoppingBag />, title: "Comércio e serviços", desc: "Região central" },
        { icon: <FaLeaf />, title: "Áreas verdes", desc: "Tranquilidade no dia a dia" },
        { icon: <FaShieldAlt />, title: "Mobilidade", desc: "Fácil acesso à região" },
    ];

    return (
        <section className="location" id="localizacao">
            <div className="container">
                <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                    <div className="location-header">
                        <span className="section-label">Localização</span>
                        <h2>No coração de Rio Grande da Serra</h2>
                        <p>Uma região estratégica, com tudo que você precisa a poucos passos.</p>
                    </div>
                </AnimateOnScroll>

                <div className="location-body">
                    <AnimateOnScroll animation="fade-in-left" delay={0.2}>
                        <div className="location-map">
                            <iframe
                                title="Localização Joias da Serra"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4!2d-46.397!3d-23.726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQzJzMzLjYiUyA0NsKwMjMnNDkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="map-pin-label">
                                <FaTrain />
                                <span>A 400m da Estação</span>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-in-right" delay={0.3}>
                        <div className="location-highlights">
                            {highlights.map((item, i) => (
                                <div key={i} className="highlight-card">
                                    <div className="highlight-icon">{item.icon}</div>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}