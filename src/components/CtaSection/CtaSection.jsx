import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import "./CTASection.css";

export default function CTASection() {
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. E-mail: ${form.email}. Tenho interesse nos apartamentos do Joias da Serra.`;
        window.open(`https://wa.me/5511991106358?text=${encodeURIComponent(msg)}`, "_blank");
        setSent(true);
    };

    return (
        <section className="cta-section" id="contato">
            <div className="cta-section-bg" aria-hidden="true" />
            <div className="container">
                <div className="cta-section-body">
                    <AnimateOnScroll animation="fade-in-left" delay={0.1}>
                        <div className="cta-section-text">
                            <span className="section-label section-label--light">Contato</span>
                            <h2>Dê o próximo passo para o seu apartamento próprio.</h2>
                            <p>Nossa equipe está pronta para tirar suas dúvidas e apresentar as melhores condições.</p>

                            <a
                                href="https://wa.me/5511991106358"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-whatsapp shiny"
                            >
                                <FaWhatsapp size={20} />
                                <span>Falar com um consultor</span>
                            </a>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-in-right" delay={0.2}>
                        <div className="cta-form-wrapper">
                            {sent ? (
                                <div className="cta-form-success">
                                    <FaWhatsapp size={32} />
                                    <strong>Mensagem enviada!</strong>
                                    <p>Em breve um consultor entrará em contato com você.</p>
                                </div>
                            ) : (
                                <form className="cta-form" onSubmit={handleSubmit}>
                                    <h3>Receber mais informações</h3>
                                    <div className="form-group">
                                        <label htmlFor="name">Nome</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Seu nome completo"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">WhatsApp</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="(11) 99999-9999"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="form-submit shiny">
                                        <FaEnvelope size={16} />
                                        <span>Receber mais informações</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}