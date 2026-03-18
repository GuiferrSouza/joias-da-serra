import { useState, forwardRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./CTASection.css";

export default forwardRef(function CTASection(_, ref) {
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
        <section ref={ref} className="cta-section" id="contato">
            <div className="cta-layout">

                {/* Esquerda — texto */}
                <div className="cta-text">
                    <p className="cta-eyebrow">Contato</p>
                    <h2>Dê o próximo passo para o seu apartamento próprio.</h2>
                    <p className="cta-desc">
                        Nossa equipe está pronta para tirar suas dúvidas
                        e apresentar as melhores condições.
                    </p>

                    <a
                        href="https://wa.me/5511991106358"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-whatsapp"
                    >
                        <FaWhatsapp size={15} />
                        <span>Falar com um consultor</span>
                    </a>
                </div>

                {/* Direita — formulário */}
                <div className="cta-form-wrapper">
                    {sent ? (
                        <div className="cta-success">
                            <span className="cta-success__icon">✓</span>
                            <strong>Mensagem enviada.</strong>
                            <p>Em breve um consultor entrará em contato com você.</p>
                        </div>
                    ) : (
                        <form className="cta-form" onSubmit={handleSubmit}>
                            <p className="cta-form__title">Receber mais informações</p>

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

                            <button type="submit" className="form-submit">
                                Receber mais informações
                                <span className="form-submit__arrow">→</span>
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
});