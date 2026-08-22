/**
 * Datos personales y de contacto centralizados.
 * Los campos marcados con TODO todavia no estan confirmados.
 */
export const siteConfig = {
  name: 'Marianela Holsbach',
  role: 'Web Developer',
  brand: 'Holsbi',
  tagline: 'Donde la tecnologia encuentra la eficiencia.',
  intro:
    'Soy Marianela Holsbach, Web Developer y creadora de Holsbi. Diseno y desarrollo experiencias digitales que combinan tecnologia, claridad y objetivos reales.',
  heroValueProp:
    'Transformo ideas y necesidades reales en experiencias digitales claras, modernas y funcionales.',
  location: 'Resistencia, Chaco, Argentina',
  email: 'holsbachmarianela@gmail.com',
  whatsapp: {
    number: '5493624147072',
    display: '+54 362 414-7072',
  },
  social: {
    github: 'https://github.com/Megari94',
  },
  // TODO: confirmar URL final una vez desplegado el sitio (dominio propio o subdominio).
  siteUrl: 'https://pp-portfolio.pages.dev',
} as const
