import type { ImageMetadata } from 'astro';
import chomePlatform from '../assets/projects/chome-platform.jpg';
import chomeWeb from '../assets/projects/chome-web.jpg';
import hidromontWeb from '../assets/projects/hidromont-web.jpg';
import neltumeQuote from '../assets/projects/neltume-cotizador.jpg';
import neltumeWeb from '../assets/projects/neltume-web.jpg';

export interface Project {
  slug: string;
  n: string;
  title: string;
  client: string;
  type: 'Web' | 'Sistema';
  year: string;
  status: 'En producción' | 'En desarrollo';
  url?: string;
  summary: string;
  highlights: string[];
  images: { src: ImageMetadata; alt: string; caption?: string }[];
}

export const projects: Project[] = [
  {
    slug: 'chome-plataforma',
    n: '01',
    title: 'Plataforma interna: solicitudes, bodega e inspecciones',
    client: 'Chome LTDA',
    type: 'Sistema',
    year: '2026',
    status: 'En producción',
    // TODO: añadir URL solo si existe una versión pública.
    summary: 'Panel operacional con seguimiento de adquisiciones, tareas pendientes, bodega e indicadores de gestión.',
    highlights: [
      'Indicadores de inversión, tareas vencidas, incidentes y recepciones pendientes.',
      'Accesos a adquisiciones, aprobaciones, operación y bodega.',
      'Actividad reciente y flujo mensual de solicitudes, órdenes y entregas.',
    ],
    images: [
      {
        src: chomePlatform,
        alt: 'Panel de Plataforma Chome con indicadores operacionales, tareas, adquisiciones y actividad reciente.',
        caption: 'Panel operacional de la plataforma interna de Chome.',
      },
    ],
  },
  {
    slug: 'neltume-cotizador',
    n: '02',
    title: 'Cotizador automático desde correo y WhatsApp',
    client: 'Puertas Neltume',
    type: 'Sistema',
    year: '2026',
    status: 'En desarrollo',
    // TODO: añadir URL solo si existe una versión pública.
    summary: 'Cotizador asistido para registrar pedidos de puertas, elegir productos del catálogo y preparar una vista previa antes de emitir la cotización.',
    highlights: [
      'Ingreso de pedidos de puertas en texto libre o con un ejemplo guiado.',
      'Selección de modelos y productos desde el catálogo.',
      'Vista previa de cliente, productos y valores antes de emitir el PDF.',
    ],
    images: [
      {
        src: neltumeQuote,
        alt: 'Cotizador Neltume con asistente para ingresar el pedido y una vista previa de la cotización.',
        caption: 'Cotizador interno de Puertas Neltume.',
      },
    ],
  },
  {
    slug: 'chome-web',
    n: '03',
    title: 'Sitio web corporativo',
    client: 'Chome LTDA',
    type: 'Web',
    year: '2026',
    status: 'En producción',
    url: 'https://servicioschome.cl/',
    summary: 'Retiro, transporte, manejo interno y reportabilidad para operaciones industriales del centro-sur de Chile.',
    highlights: [
      'Gestión y transporte de residuos industriales para operaciones del centro-sur.',
      'Servicios de manejo, traslado, acopio y apoyo dentro de planta.',
      'Cobertura publicada en cinco regiones de Chile.',
    ],
    images: [
      {
        src: chomeWeb,
        alt: 'Portada de Servicios Industriales Chome con una operación en terreno y su propuesta de gestión de residuos.',
        caption: 'Portada del sitio corporativo de Servicios Industriales Chome.',
      },
    ],
  },
  {
    slug: 'neltume-web',
    n: '04',
    title: 'Sitio web de puertas premium',
    client: 'Fábrica de Puertas Neltume',
    type: 'Web',
    year: '2026',
    status: 'En producción',
    url: 'https://fabricapuertasneltume.cl/',
    summary: 'Puertas, mamparas y muebles de madera hechos por artesanos en el sur de Chile.',
    highlights: [
      'Secciones de puertas, fábrica, muebles y contacto.',
      'Catálogo de productos y presentación del trabajo en madera.',
      'Portada con información de ubicación en Panguipulli, Región de Los Ríos.',
    ],
    images: [
      {
        src: neltumeWeb,
        alt: 'Portada de Fábrica de Puertas Neltume sobre una fotografía del paisaje del sur de Chile.',
        caption: 'Portada del sitio de Fábrica de Puertas Neltume.',
      },
    ],
  },
  {
    slug: 'hidromont-web',
    n: '05',
    title: 'Sitio web corporativo',
    client: 'Hidromont Chile',
    type: 'Web',
    year: '2026',
    status: 'En producción',
    url: 'https://hidromontchile.cl/',
    summary: 'Ingeniería, fabricación y montaje de equipos hidromecánicos para centrales y embalses.',
    highlights: [
      'Servicios de ingeniería, fabricación y montaje hidromecánico.',
      'Secciones de proyectos, galería, empresa y clientes.',
      'Especialidades para embalses y centrales hidroeléctricas.',
    ],
    images: [
      {
        src: hidromontWeb,
        alt: 'Portada de Hidromont Chile con su taller y la oferta de ingeniería, fabricación y montaje hidromecánico.',
        caption: 'Portada del sitio corporativo de Hidromont Chile.',
      },
    ],
  },
];
