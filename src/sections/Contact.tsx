import { Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { siteConfig } from '../data/siteConfig'
import { Reveal } from '../components/Reveal'
import { WhatsAppMark } from '../components/icons/WhatsAppMark'
import { HolsbiCoreModel } from '../components/HolsbiCoreModel'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Contact.css'

export function Contact(){
 const reduced=useReducedMotion()
 const message=encodeURIComponent('Hola Marianela, vi tu portfolio y quiero conversar sobre un proyecto.')
 const wa=`https://wa.me/${siteConfig.whatsapp.number}?text=${message}`
 return <section id="contacto" className="section contact"><div className="container"><span className="section-index" aria-hidden="true">06</span>
  <div className="contact__layout">
   <Reveal className="contact__intro"><p className="eyebrow">Contacto</p><h2 className="section-title">Construyamos algo que funcione.</h2><p>Contame que necesitas resolver. Podemos conversar por el canal que te resulte mas comodo.</p><div className="contact__actions"><a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer"><WhatsAppMark size={19}/>Enviar WhatsApp</a><a className="btn btn-secondary" href={`mailto:${siteConfig.email}`}><Mail size={18}/>Enviar mail</a></div><p className="contact__status"><i/>Disponible para nuevos proyectos</p><small>Respuesta segun disponibilidad · Conversacion directa</small></Reveal>
   <Reveal delay={.08} className="contact__core"><HolsbiCoreModel reduced={reduced} variant="compact"/><div className="contact__terminal"><span>holsbi@dev:~$ </span><motion.b initial={{clipPath:'inset(0 100% 0 0)'}} whileInView={{clipPath:'inset(0 0 0 0)'}} viewport={{once:true}} transition={{duration:.45,delay:.15}}>ready</motion.b><i>_</i></div></Reveal>
  </div>
 </div></section>
}
