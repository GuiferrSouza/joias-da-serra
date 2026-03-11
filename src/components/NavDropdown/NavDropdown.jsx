import { useEffect, useState } from "react";
import {
    FaChevronDown,
    FaMapMarkerAlt,
    FaBuilding,
    FaRulerCombined,
    FaCube,
    FaTree,
    FaStar,
    FaHardHat
} from "react-icons/fa";
import "./NavDropdown.css";

export default function NavDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest('.nav-dropdown-wrapper')) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('click', closeDropdown);
            return () => document.removeEventListener('click', closeDropdown);
        }
    }, [dropdownOpen]);

    const menuItems = [
        { icon: FaMapMarkerAlt, label: "Localização" },
        { icon: FaBuilding, label: "O Projeto" },
        { icon: FaRulerCombined, label: "Plantas e Metragens" },
        { icon: FaCube, label: "Tour 3D" },
        { icon: FaTree, label: "Áreas Externas" },
        { icon: FaStar, label: "Diferenciais" },
        { icon: FaHardHat, label: "Andamento da Obra" }
    ];

    return (
        <div className="nav-dropdown-wrapper">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`nav-dropdown-trigger ${dropdownOpen ? 'active' : ''}`}
                aria-expanded={dropdownOpen}
                aria-label="Menu de navegação"
            >
                <span>Explorar</span>
                <FaChevronDown size={12} className="dropdown-icon" />
            </button>

            <div className={`nav-dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={index}
                            className="dropdown-item"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <Icon size={16} className="dropdown-item-icon" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}