import "./FeaturesSection.css";

export default function FeaturesSection() {
    const features = [
        {
            title: "Plantas inteligentes",
            desc: "Ambientes funcionais com aproveitamento máximo de cada metro quadrado.",
        },
        {
            title: "Localização estratégica",
            desc: "A 400m da Estação, no coração de Rio Grande da Serra.",
        },
        {
            title: "Projeto bem dimensionado",
            desc: "Cada detalhe foi planejado para oferecer conforto e praticidade.",
        },
        {
            title: "Acompanhamento técnico",
            desc: "Obra executada com rigor técnico em todas as etapas.",
        },
        {
            title: "Entrega Dezembro 2027",
            desc: "Prazo estabelecido com planejamento e compromisso.",
        },
    ];

    return (
        <section className="features" id="diferenciais">

            {/* Cabeçalho */}
            <div className="features-header">
                <p className="features-eyebrow">Diferenciais</p>
                <h2>Por que escolher o<br />Joias da Serra?</h2>
            </div>

            {/* Grade */}
            <div className="features-grid">
                {features.map((item, i) => (
                    <div key={i} className="feature-card">
                        <span className="feature-card__number">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="feature-card__body">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}