import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { Reveal } from '../components/Reveal'
import './Contact.css'

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    'Hola Marianela, vi tu portfolio y quiero conversar sobre un proyecto.',
  )

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">Conversemos sobre tu proyecto</h2>
          <p className="section-lead">
            Contame que necesitas resolver. Respondo por WhatsApp o email.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__card">
            <MessageCircle size={20} />
            <div>
              <p className="contact__label">WhatsApp</p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__value"
              >
                {siteConfig.whatsapp.display}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="contact__card">
            <Mail size={20} />
            <div>
              <p className="contact__label">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="contact__value">
                {siteConfig.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="contact__card">
            <MapPin size={20} />
            <div>
              <p className="contact__label">Ciudad</p>
              <p className="contact__value">{siteConfig.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
