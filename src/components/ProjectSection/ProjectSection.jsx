import projectRender from "../../assets/images/building.png";
import "./ProjectSection.css";

const specs = [
    { value: "2", label: "Tipologias" },
    { value: "50–52m²", label: "Metragem" },
    { value: "Dez/27", label: "Entrega" },
];

const features = [
    "Acabamentos de alto padrão",
    "Plantas funcionais e bem distribuídas",
    "Infraestrutura completa no condomínio",
];

export default function ProjectSection() {
    return (
        <section className="project" id="o-projeto">

            {/* Imagem ocupa tudo */}
            <div className="project-visual">
                <img src={projectRender} alt="Render do edifício Joias da Serra" />
                <div className="project-overlay" />
            </div>

            {/* Sidebar direita sobreposta */}
            <aside className="project-sidebar">
                <div className="project-sidebar__content">

                    <p className="project-eyebrow">O Projeto</p>
                    <h2>Pensado para<br />o seu dia a dia</h2>

                    <p className="project-text">
                        Um projeto residencial desenvolvido com foco em
                        funcionalidade, conforto e aproveitamento inteligente
                        dos espaços. Cada detalhe foi pensado para oferecer
                        uma experiência de morar prática, segura e bem planejada.
                    </p>

                    <ul className="project-features">
                        {features.map((f, i) => (
                            <li key={i}>
                                <span className="feature-line" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <div className="project-specs">
                        {specs.map((s, i) => (
                            <div key={i} className="spec-item">
                                <strong>{s.value}</strong>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </aside>

        </section>
    );
}