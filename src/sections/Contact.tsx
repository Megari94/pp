import { Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { Reveal } from '../components/Reveal'
import { WhatsAppMark } from '../components/icons/WhatsAppMark'
import './Contact.css'

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    'Hola Marianela, vi tu portfolio y quiero conversar sobre un proyecto.',
  )

  return (
    <section id="contacto" className="section contact">
      <span className="contact__h-mark" aria-hidden="true">H</span>
      <div className="container">
        <span className="section-index" aria-hidden="true">06</span>
        <Reveal className="section-heading">
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">Construyamos algo que funcione.</h2>
          <p className="section-lead">
            Contame que necesitas resolver. Respondo por WhatsApp o email.
          </p>
        </Reveal>

        <div className="contact__grid">
          <div className="contact__terminal" aria-label="Terminal Holsbi conectada">holsbi@dev:~$ <span>ready_</span></div>
          <Reveal className="contact__card">
            <WhatsAppMark size={22} />
            <div>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact__action"
              >
                <WhatsAppMark size={19} />
                Enviar WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="contact__card">
            <Mail size={20} />
            <div>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-secondary contact__action">
                <Mail size={19} />
                Enviar mail
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
