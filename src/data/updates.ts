export type AnnouncementStatus = 'announced' | 'coming-soon' | 'active' | 'ended';
export type ImagePermissionStatus = 'pending' | 'granted' | 'not-used';
export type CoverFit = 'contain' | 'cover';

export interface UpcomingAnnouncement {
  slug: string;
  title: string;
  summary: string;
  status: AnnouncementStatus;
  announcedAt: string;
  timing: string;
  highlights: string[];
  sourceUrl: string;
  verifiedAt: string;
  cover?: string;
  coverAlt?: string;
  coverCredit?: string;
  coverFit?: CoverFit;
  imagePermission: ImagePermissionStatus;
}

export interface OfficialNewsItem {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  keyPoints: string[];
  sourceUrl: string | null;
  verifiedAt: string;
  cover?: string;
  coverAlt?: string;
  coverCredit?: string;
  coverFit?: CoverFit;
  imagePermission: ImagePermissionStatus;
}

export const upcomingAnnouncements: UpcomingAnnouncement[] = [
  {
    slug: 'dragon-assault-regorn',
    title: 'Dragon Assault: Regorn',
    summary: ' El rugido ardiente desgarra el cielo, ¡la furia del dragón es imparable!. El evento presenta tres Adornos de Espalda, un Titán y un nuevo aspecto.',
    status: 'announced',
    announcedAt: '2026-07-02',
    timing: '3 de julio - 9 de julio (servidores con 30 días abiertos)',
    highlights: ['「Alas de Dragón de Fuego」「Armadura de Nanotec」「Aura del Dios del Mar,」', 'Alas de la Extinción', 'Nuevo aspecto: Héroe Cazador de Dragones - Sigurd'],
    sourceUrl: 'https://discord.com/channels/1372452853934718976/1372452854727708704/1522180318327603220',
    verifiedAt: '2026-06-26',
    cover: '/images/oficial/eventos/dragon-assault-regorn.webp',
    coverAlt: 'Banner oficial del evento Dragon Assault: Regorn',
    coverCredit: 'Imagen oficial de Duck Survival. Uso informativo no comercial.',
    coverFit: 'contain',
    imagePermission: 'granted',
  },
  {
    slug: 'hall-of-heroes',
    title: 'Hall of Heroes',
    summary: 'La luz sagrada ilumina la esperanza y las garras de acero desgarran la oscuridad. El evento presenta dos nuevos héroes míticos y recompensas ocultas por descubrir.',
    status: 'announced',
    announcedAt: '2026-06-26',
    timing: 'Del día 29 al día 35 después de la apertura del servidor.',
    highlights: ['Héroe mítico: Ángel de Luz Sagrada - Cain', 'Héroe mítico: Luchador Garra de Acero - Jack', 'Más recompensas ocultas y modos de juego anunciados'],
    sourceUrl: 'https://discord.com/channels/1372452853934718976/1372452854727708704/1520007836623704064',
    verifiedAt: '2026-06-26',
    cover: '/images/oficial/eventos/hall-of-heroes.webp',
    coverAlt: 'Banner oficial del evento Hall of Heroes',
    coverCredit: 'Imagen oficial de Duck Survival. Uso informativo no comercial.',
    coverFit: 'contain',
    imagePermission: 'granted',
  },
  {
    slug: 'star-annihilator-forge-city',
    title: 'Star Annihilator llega a Forge City',
    summary: 'El equipo oficial adelantó una nueva aparición temática con montura, arma y artefactos exclusivos. Las reglas detalladas todavía se anunciarán dentro del juego.',
    status: 'announced',
    announcedAt: '2026-06-20',
    timing: 'Del día 24 al día 30 después del lanzamiento de cada servidor.',
    highlights: ['Montura: Star Annihilator', 'Arma: Hellscream', 'Artefactos: Galactic Bot y Starcrusher'],
    sourceUrl: 'https://discord.com/channels/1372452853934718976/1372452854727708704/1517831335773868054',
    verifiedAt: '2026-06-21',
    cover: '/images/oficial/eventos/star-annihilator-forge-city.webp',
    coverAlt: 'Banner oficial del evento Star Annihilator en Forge City',
    coverCredit: 'Imagen oficial de Duck Survival. Uso informativo no comercial.',
    coverFit: 'contain',
    imagePermission: 'granted',
  },
];

export const officialNews: OfficialNewsItem[] = [
  {
    slug: 'mantenimiento-actualizacion-30-junio-2026',
    title: 'Mantenimiento y actualización de versión',
    summary: 'El equipo oficial anunció mantenimiento del servidor entre el 30 de junio y el 1 de julio, junto con una actualización grande que incorpora eventos, optimizaciones de PvP, Arena de gremio, gemas, Desafío extremo y nuevos sistemas de recompensas.',
    category: 'Actualización de versión',
    publishedAt: '2026-06-30',
    keyPoints: [
      'Mantenimiento: 30 de junio, 22:00-00:00 (UTC-4) / 1 de julio, 04:00-06:00 (UTC+2).',
      'El evento Ataque del Gran Dragón comenzará el 3 de julio con el nuevo Titán mítico Alas de la Extinción.',
      'Ciudad Ígnea comenzará gradualmente después del 4 de julio para servidores con 38 días abiertos.',
      'Expedición Congelada comenzará el 6 de julio para servidores con 15 días abiertos y fase 20 superada.',
      'Tesoro de Apocalipsis hará permanentes las monedas de intercambio de Apocalipsis en eventos recibidos desde el día 28 del servidor.',
      'Arena de gremio cambia su emparejamiento a Grupo prioritario y Grupo regular según fuerza total.',
      'Los combates PvP automáticos retrasarán 5 segundos el lanzamiento de habilidades al inicio.',
      'El atributo de gemas Aumento de daño en la tercera noche pasa a Aumento de daño en la última noche.',
      'Desafío extremo ajusta armas dobles, habilidades despertadas y recompensas acumulativas después de 310 estrellas.',
      'Exploración del Manicomio aumenta monedas iniciales en ciertos niveles y añade artículos a la tienda misteriosa.',
      'Se añade un nuevo registro diario al Centro de beneficios.',
      'Se corrige el problema del Espíritu Heroico de Rugido Infernal que bloqueaba la barra de PV.',
    ],
    sourceUrl: null,
    verifiedAt: '2026-06-30',
    cover: '/images/oficial/noticias/mantenimiento-actualizacion-30-junio-2026.webp',
    coverAlt: 'Portada oficial del aviso de mantenimiento y actualización de versión del 30 de junio de 2026',
    coverCredit: 'Imagen oficial de Duck Survival. Uso informativo no comercial.',
    coverFit: 'contain',
    imagePermission: 'granted',
  },
  {
    slug: 'aviso-baneos-incorrectos-compensacion',
    title: 'Aviso sobre baneos incorrectos y compensación',
    summary: 'El equipo de operaciones informó que una actualización de seguridad provocó baneos incorrectos, anunció el proceso de restauración de cuentas y comunicó compensaciones para las personas afectadas.',
    category: 'Comunicado de servicio',
    publishedAt: '2026-06-18',
    keyPoints: ['Corrección urgente del problema', 'Restauración de las cuentas afectadas', 'Compensación mediante el correo del juego', 'Soporte y verificación desde los canales oficiales'],
    sourceUrl: 'https://discord.com/channels/1372452853934718976/1372452854727708704/1517116426773725326',
    verifiedAt: '2026-06-21',
    cover: '/images/oficial/noticias/aviso-baneos-incorrectos-compensacion.webp',
    coverAlt: 'Imagen oficial del comunicado sobre baneos incorrectos y compensacion',
    coverCredit: 'Imagen oficial de Duck Survival. Uso informativo no comercial.',
    coverFit: 'contain',
    imagePermission: 'granted',
  },
];
