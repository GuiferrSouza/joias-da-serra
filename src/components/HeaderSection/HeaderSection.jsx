import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import NavDropdown from "../NavDropdown";
import logo from "../../assets/images/logo-text.png";
import "./HeaderSection.css";

export default function HeaderSection() {
    return (
        <header className="header">
            <div className="header-left">
                <a className="header-info">
                    <FaMapMarkerAlt size={14} />
                    <span>Rio Grande da Serra</span>
                </a>
                <a className="header-info">
                    <FaPhone size={14} />
                    <span>(11) 99110-6358</span>
                </a>
            </div>

            <div className="header-center">
                <div className="logo">
                    <img src={logo} alt="Joias da Serra" />
                </div>
            </div>

            <div className="header-right">
                <nav className="header-nav">
                    <NavDropdown />
                </nav>

                <a href="https://wa.me/5511991106358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta shiny"
                    aria-label="Falar com consultor no WhatsApp">
                    <FaWhatsapp size={18} />
                    <span>Falar com consultor</span>
                </a>
            </div>
        </header>
    );
}