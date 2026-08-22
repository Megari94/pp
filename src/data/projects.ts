import type { Project } from '../types'

/**
 * Para agregar un proyecto nuevo, sumar un objeto a este arreglo.
 * No completar campos con datos que no puedan verificarse: usar TODO.
 */
export const projects: Project[] = [
  {
    slug: 'encantado-mates',
    name: 'Encantado Mates',
    tagline: 'Catalogo y carrito para una marca de mates artesanales',
    description:
      'Sitio de catalogo y venta para Encantado Mates, un emprendimiento de mates artesanales de Resistencia, Chaco. Presenta los productos por categoria, permite armar un pedido y cerrarlo por WhatsApp, e incluye un panel privado para administrar productos y testimonios.',
    problem:
      'La marca necesitaba una vitrina online prolija para mostrar su catalogo de mates, termos y bombillas, con una forma simple de recibir pedidos sin depender solo de mensajes sueltos por redes.',
    solution:
      'Desarrolle un sitio de una sola pagina con grilla de productos filtrable por categoria y busqueda por nombre, carrito de compra que arma el pedido y lo envia por WhatsApp, y un panel de administracion propio para cargar productos y testimonios sin tocar codigo.',
    role: 'Desarrollo full stack: interfaz, logica de carrito, panel de administracion e integracion con la base de datos.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Supabase (Postgres, Auth, Storage)',
      'React Router',
    ],
    status: 'publicado',
    statusLabel: 'Publicado',
    image: '/projects/encantado-mates.svg',
    imageAlt: 'Vista previa del sitio Encantado Mates',
    liveUrl: 'https://encantadomates.argtech.workers.dev/',
  },
  {
    slug: 'media-kit-diario-chaco',
    name: 'Media Kit de Diario Chaco',
    tagline: 'Catalogo comercial de espacios publicitarios',
    description:
      'Media kit web para el area de Publicidad y Acciones Comerciales de Diario Chaco. Organiza los formatos publicitarios disponibles en el portal (banners, zocalo, interstitial), los servicios de contenido y produccion audiovisual, y centraliza las vias de contacto comercial.',
    problem:
      'El equipo comercial necesitaba un material digital, siempre actualizado y facil de compartir por link, que reemplazara al PDF estatico para presentar los espacios publicitarios y servicios a potenciales anunciantes.',
    solution:
      'Construi un sitio de una sola pagina con navegacion por secciones (Diario Chaco, Objetivos, Portal, Redes, Contenido, Audiovisual, Publinotas, Contacto), fichas claras de cada formato publicitario con sus medidas, y accesos directos a WhatsApp y email para iniciar una consulta comercial.',
    role: 'Diseno y desarrollo completo del sitio, metadatos para compartir en redes/WhatsApp y despliegue en dominio propio.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'publicado',
    statusLabel: 'Publicado',
    image: '/projects/media-kit-diario-chaco.svg',
    imageAlt: 'Vista previa del Media Kit de Diario Chaco',
    liveUrl: 'https://mediakit.diariochaco.com/',
  },
]
