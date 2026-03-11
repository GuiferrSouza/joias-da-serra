import AnimateOnScroll from "../AnimateOnScroll";
// import projectRender from "../../assets/images/project-render.png";
import "./ProjectSection.css";

export default function ProjectSection() {
    return (
        <section className="project" id="o-projeto">
            <div className="container">
                <div className="project-body">
                    <AnimateOnScroll animation="fade-in-left" delay={0.2}>
                        <div className="project-image">
                            <img alt="Render do edifício Joias da Serra" />
                            <div className="project-badge">
                                <span>Entrega</span>
                                <strong>Dez / 2027</strong>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-in-right" delay={0.3}>
                        <div className="project-content">
                            <span className="section-label">O Projeto</span>
                            <h2>Pensado para o seu dia a dia</h2>
                            <p>
                                Um projeto residencial desenvolvido com foco em funcionalidade,
                                conforto e aproveitamento inteligente dos espaços. Cada detalhe foi
                                pensado para oferecer uma experiência de morar prática, segura e
                                bem planejada.
                            </p>
                            <p>
                                Com plantas inteligentes e acabamentos de qualidade, o Joias da Serra
                                entrega o que realmente importa: um lar que funciona para você.
                            </p>
                            <a href="#plantas" className="project-cta shiny">
                                Conheça as plantas
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}