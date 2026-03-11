import AnimateOnScroll from "../AnimateOnScroll";
import "./ConstructionSection.css";

export default function ConstructionSection() {
    const milestones = [
        { date: "Jan 2025", label: "Início das obras", done: true },
        { date: "Jun 2025", label: "Fundação concluída", done: true },
        { date: "Dez 2025", label: "Estrutura em andamento", done: false },
        { date: "Dez 2027", label: "Entrega das chaves", done: false },
    ];

    const photos = [
        { src: null, alt: "Obra — fundação" },
        { src: null, alt: "Obra — estrutura" },
        { src: null, alt: "Obra — andamento" },
    ];

    return (
        <section className="construction" id="andamento-da-obra">
            <div className="container">
                <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                    <div className="construction-header">
                        <span className="section-label">Andamento da Obra</span>
                        <h2>Transparência em cada etapa</h2>
                        <p>
                            A obra segue em andamento, com acompanhamento técnico e execução
                            planejada em todas as etapas.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="construction-body">
                    <AnimateOnScroll animation="fade-in-left" delay={0.2}>
                        <div className="construction-photos">
                            {photos.map((photo, i) => (
                                <div key={i} className="construction-photo">
                                    <img src={photo.src} alt={photo.alt} />
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-in-right" delay={0.3}>
                        <div className="construction-timeline">
                            {milestones.map((m, i) => (
                                <div key={i} className={`milestone ${m.done ? "milestone--done" : ""}`}>
                                    <div className="milestone-dot" />
                                    {i < milestones.length - 1 && <div className="milestone-line" />}
                                    <div className="milestone-info">
                                        <span className="milestone-date">{m.date}</span>
                                        <strong className="milestone-label">{m.label}</strong>
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