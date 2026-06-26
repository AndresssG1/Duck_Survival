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
  sourceUrl: string;
  verifiedAt: string;
  cover?: string;
  coverAlt?: string;
  coverCredit?: string;
  coverFit?: CoverFit;
  imagePermission: ImagePermissionStatus;
}

export const upcomingAnnouncements: UpcomingAnnouncement[] = [
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
