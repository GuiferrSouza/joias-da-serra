import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/logo-text.png";
import "./FooterSection.css";

export default function FooterSection() {
    const navItems = [
        { label: "Localização", href: "#localizacao" },
        { label: "O Projeto", href: "#o-projeto" },
        { label: "Plantas", href: "#plantas" },
        { label: "Tour 3D", href: "#tour-3d" },
        { label: "Áreas Externas", href: "#areas-externas" },
        { label: "Diferenciais", href: "#diferenciais" },
        { label: "Andamento da Obra", href: "#andamento-da-obra" },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-body">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="Joias da Serra" />
                        </div>
                        <p>Apartamentos residenciais pensados para o seu bem-estar em Rio Grande da Serra.</p>
                    </div>

                    <div className="footer-nav">
                        <strong>Explorar</strong>
                        <ul>
                            {navItems.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <strong>Contato</strong>
                        <ul>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Rua Vereador Francisco Moraes Ramos, 265<br />Centro – Rio Grande da Serra</span>
                            </li>
                            <li>
                                <FaPhone />
                                <a href="tel:+5511991106358">(11) 99110-6358</a>
                            </li>
                            <li>
                                <FaWhatsapp />
                                <a href="https://wa.me/5511991106358" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <FaGlobe />
                                <a href="https://joiasdaserra.com.br" target="_blank" rel="noopener noreferrer">
                                    joiasdaserra.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Joias da Serra. Todos os direitos reservados.</span>
                </div>
            </div>

            {/* Floating WhatsApp button */}
            <a
                href="https://wa.me/5511991106358"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float shiny"
                aria-label="Falar no WhatsApp"
            >
                <FaWhatsapp size={26} />
            </a>
        </footer>
    );
}