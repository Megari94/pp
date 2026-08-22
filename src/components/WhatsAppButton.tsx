import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import './WhatsAppButton.css'

export function WhatsAppButton() {
  const message = encodeURIComponent(
    'Hola Marianela, vi tu portfolio y quiero conversar sobre un proyecto.',
  )
  const href = `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  )
}
