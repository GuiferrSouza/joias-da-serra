import "./ConstructionSection.css";

export default function ConstructionSection() {
    const milestones = [
        { date: "Jan 2025", label: "Início das obras",        done: true  },
        { date: "Jun 2025", label: "Fundação concluída",      done: true  },
        { date: "Dez 2025", label: "Estrutura em andamento",  done: false },
        { date: "Dez 2027", label: "Entrega das chaves",      done: false },
    ];

    const photos = [
        { src: null, alt: "Obra — fundação" },
        { src: null, alt: "Obra — estrutura" },
        { src: null, alt: "Obra — andamento" },
    ];

    const done  = milestones.filter(m => m.done).length;
    const total = milestones.length;
    const pct   = Math.round((done / total) * 100);

    return (
        <section className="construction" id="andamento-da-obra">
            <div className="construction-layout">

                {/* Coluna esquerda — fotos */}
                <div className="construction-photos">
                    {photos.map((photo, i) => (
                        <div key={i} className="construction-photo">
                            {photo.src
                                ? <img src={photo.src} alt={photo.alt} />
                                : <div className="construction-photo__placeholder">
                                    <span>{String(i + 1).padStart(2, "0")}</span>
                                  </div>
                            }
                        </div>
                    ))}
                </div>

                {/* Coluna direita — info */}
                <div className="construction-info">
                    <p className="construction-eyebrow">Andamento da Obra</p>
                    <h2>Transparência<br />em cada etapa</h2>
                    <p className="construction-text">
                        A obra segue em andamento, com acompanhamento técnico
                        e execução planejada em todas as etapas.
                    </p>

                    {/* Barra de progresso geral */}
                    <div className="construction-progress">
                        <div className="construction-progress__header">
                            <span>Progresso geral</span>
                            <strong>{pct}%</strong>
                        </div>
                        <div className="construction-progress__track">
                            <div
                                className="construction-progress__fill"
                                style={{ width: `${pct}%` }}
                            />
                        </div>
                    </div>

                    {/* Timeline */}
                    <ul className="construction-timeline">
                        {milestones.map((m, i) => (
                            <li
                                key={i}
                                className={`milestone ${m.done ? "milestone--done" : ""}`}
                            >
                                <div className="milestone__indicator">
                                    <span className="milestone__dot" />
                                    {i < milestones.length - 1 && (
                                        <span className="milestone__line" />
                                    )}
                                </div>
                                <div className="milestone__info">
                                    <span className="milestone__date">{m.date}</span>
                                    <strong className="milestone__label">{m.label}</strong>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}