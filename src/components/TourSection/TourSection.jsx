import { FaCube } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import "./TourSection.css";

export default function TourSection() {
    return (
        <section className="tour" id="tour-3d">
            <div className="tour-bg" aria-hidden="true" />

            <div className="container">
                <AnimateOnScroll animation="fade-in-up" delay={0.1}>
                    <div className="tour-header">
                        <span className="section-label section-label--light">Tour 3D</span>
                        <h2>Explore antes de decidir</h2>
                        <p>
                            Explore o apartamento de forma interativa e entenda, na prática,
                            como cada espaço foi pensado.
                        </p>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={0.3}>
                    <div className="tour-embed">
                        {/* Replace the src below with the actual Matterport or tour embed URL */}
                        <iframe
                            src="https://my.matterport.com/show/?m=TOUR_ID_HERE"
                            title="Tour 3D do apartamento"
                            allowFullScreen
                            allow="xr-spatial-tracking"
                        />
                        <div className="tour-placeholder">
                            <FaCube />
                            <span>Tour 3D em breve</span>
                        </div>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={0.5}>
                    <div className="tour-cta">
                        <a
                            href="https://wa.me/5511991106358?text=Olá, gostaria de agendar uma visita ao tour 3D."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tour-cta-btn shiny"
                        >
                            Iniciar tour 3D
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}