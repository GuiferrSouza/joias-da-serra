import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>
                    <span className="title1">More bem.</span>
                    <span className="title2">Viva melhor.</span>
                </h1>

                <p className="hero-subtitle">
                    Apartamentos residenciais com plantas inteligentes
                    e conforto no dia a dia.
                </p>

                <div className="hero-actions">
                    <a href="#projeto" className="btn-primary">
                        Conheça o projeto
                    </a>
                    <a href="#contato" className="btn-ghost">
                        <span>Agende um atendimento</span>
                        <span className="btn-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}