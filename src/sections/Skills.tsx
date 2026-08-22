import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BrainCircuit, Braces, Database, Megaphone, SearchCode, Users } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from '../components/Reveal'
import type { SkillGroupData } from '../types'
import './Skills.css'

const icons = [SearchCode, Braces, Database, BrainCircuit, Megaphone, Users]
interface RowProps { group: SkillGroupData; index: number; active: boolean; onActive:(index:number)=>void }

function SkillRow({group,index,active,onActive}:RowProps){
  const Icon=icons[index]
  return <motion.article layout className={`skills__row ${active?'skills__row--active':''}`}>
    <button type="button" className="skills__row-head" aria-expanded={active} onClick={()=>onActive(active?-1:index)}>
      <span className="skills__number">{String(index+1).padStart(2,'0')}</span><Icon className="skills__icon" aria-hidden="true"/><span className="skills__row-copy"><strong>{group.title}</strong><small>{group.short}</small></span><span className="skills__toggle" aria-hidden="true">{active?'−':'+'}</span>
    </button>
    <AnimatePresence initial={false}>{active&&<motion.div className="skills__details" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} transition={{duration:.32,ease:[.22,1,.36,1]}}><p>{group.description}</p><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></motion.div>}</AnimatePresence>
  </motion.article>
}

export function Skills(){
 const [activeIndex,setActiveIndex]=useState(-1)
 return <section id="capacidades" className="section skills"><div className="container"><span className="section-index" aria-hidden="true">05</span>
  <div className="skills__layout">
   <Reveal className="skills__intro"><p className="eyebrow">Capacidades</p><h2 className="section-title">En que puedo aportar</h2><p>Combino desarrollo, analisis, comunicacion y tecnologia para transformar necesidades reales en soluciones digitales claras, funcionales y sostenibles.</p><span className="skills__scroll-hint">Selecciona un area para explorar</span></Reveal>
   <div className="skills__panel">{skillGroups.map((g,i)=><SkillRow key={g.id} group={g} index={i} active={activeIndex===i} onActive={setActiveIndex}/>)}</div>
  </div>
 </div></section>
}
