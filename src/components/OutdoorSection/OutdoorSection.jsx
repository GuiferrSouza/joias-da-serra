import AnimateOnScroll from "../AnimateOnScroll";
import "./OutdoorSection.css";

export default function OutdoorSection() {
    const images = [
        { src: null, caption: "Área de convivência" },
        { src: null, caption: "Integração com áreas verdes" },
        { src: null, caption: "Espaços para o dia a dia" },
    ];

    return (
        <section className="outdoor" id="areas-externas">
            <div className="container">
                <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                    <div className="outdoor-header">
                        <span className="section-label">Áreas Externas e Lazer</span>
                        <h2>Qualidade de vida além do apartamento</h2>
                        <p>Áreas externas bem planejadas, integradas com o verde e pensadas para o seu cotidiano.</p>
                    </div>
                </AnimateOnScroll>

                <div className="outdoor-gallery">
                    {images.map((img, i) => (
                        <AnimateOnScroll key={i} animation="fade-in-up" delay={0.2 + i * 0.12}>
                            <figure className="outdoor-item">
                                <div className="outdoor-image">
                                    <img src={img.src} alt={img.caption} />
                                </div>
                                <figcaption>{img.caption}</figcaption>
                            </figure>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}