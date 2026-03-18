import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/logo-text.png";
import "./FooterSection.css";

export default function FooterSection() {
    return (
        <footer className="footer">

            <div className="footer-body">

                {/* Marca */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logo} alt="Joias da Serra" />
                    </div>
                    <p>Apartamentos residenciais pensados para o seu bem-estar em Rio Grande da Serra.</p>
                </div>

                {/* Contato */}
                <div className="footer-contact">
                    <p className="footer-contact__title">Contato</p>
                    <ul>
                        <li>
                            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4!2d-46.397!3d-23.726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQzJzMzLjYiUyA0NsKwMjMnNDkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1" target="_blank" rel="noopener noreferrer">
                                <FaMapMarkerAlt size={11} />
                                <span>Rua Vereador Francisco Moraes Ramos, 265<br />Centro – Rio Grande da Serra</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+5511991106358">
                                <FaPhone size={11} />
                                <span>(11) 99110-6358</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5511991106358" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={11} />
                                <span>WhatsApp</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://joiasdaserra.com.br" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={11} />
                                <span>joiasdaserra.com.br</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Base */}
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Joias da Serra. Todos os direitos reservados.</span>
                <span className="footer-bottom__sep" />
                <span>Rio Grande da Serra, SP</span>
            </div>

        </footer>
    );
}