export type EventStatus = 'upcoming' | 'active' | 'ended';
export type EventAudience = 'individual' | 'guild';

export type ChallengeGroup = 'difficulty' | 'enemy-cooperation';

export interface RecurringChallenge {
  slug: string;
  name: string;
  group: ChallengeGroup;
  description: string;
  unlockRequirement: string;
  cover?: string;
  href?: string;
  verifiedAt: string;
}

export interface GameEvent {
  slug: string;
  name: string;
  description: string;
  audience: EventAudience;
  status: EventStatus;
  startsAt: string | null;
  endsAt: string | null;
  rewards: string[];
  sourceUrl: string;
  verifiedAt: string;
}

// Events are published only after confirmation from an official channel.
export const gameEvents: GameEvent[] = [];

export const recurringChallenges: RecurringChallenge[] = [
  {
    slug: 'recoleccion-de-billetes', name: 'Recolección de billetes', group: 'difficulty',
    description: 'Modalidad incluida dentro de Desafío de dificultad.',
    unlockRequirement: 'Requisito exacto por confirmar.', verifiedAt: '2026-06-20',
  },
  {
    slug: 'desafio-extremo', name: 'Desafío Extremo', group: 'difficulty',
    description: 'Modalidad incluida dentro de Desafío de dificultad.',
    unlockRequirement: 'Requisito exacto por confirmar.', verifiedAt: '2026-06-20',
  },
  {
    slug: 'defensa-infinita', name: 'Defensa Infinita', group: 'difficulty',
    description: 'Modalidad incluida dentro de Desafío de dificultad.',
    unlockRequirement: 'Completa el capítulo 20 de la historia principal y alcanza 12 días de juego.', verifiedAt: '2026-06-20',
  },
  {
    slug: 'explosion-del-manicomio', name: 'Explosión del Manicomio', group: 'difficulty',
    description: 'Modalidad incluida dentro de Desafío de dificultad.',
    unlockRequirement: 'Completa el capítulo 30 de la historia principal y alcanza 18 días de juego.', verifiedAt: '2026-06-20',
  },
  {
    slug: 'arena', name: 'Arena', group: 'enemy-cooperation',
    description: 'Modalidad PvP diaria organizada por rangos y grupos semanales.',
    unlockRequirement: 'Requisito exacto por confirmar.', href: '/eventos/desafios/arena/', verifiedAt: '2026-06-20',
  },
  {
    slug: 'camino-de-supervivencia', name: 'Camino de Supervivencia', group: 'enemy-cooperation',
    description: 'Modalidad incluida dentro de Cooperación contra enemigos.',
    unlockRequirement: 'Requisito exacto por confirmar.', verifiedAt: '2026-06-20',
  },
  {
    slug: 'jefe-mundial', name: 'Jefe Mundial', group: 'enemy-cooperation',
    description: 'Modalidad incluida dentro de Cooperación contra enemigos.',
    unlockRequirement: 'Requisito exacto por confirmar.', verifiedAt: '2026-06-20',
  },
  {
    slug: 'zona-de-guerra', name: 'Zona de guerra', group: 'enemy-cooperation',
    description: 'Modalidad incluida dentro de Cooperación contra enemigos.',
    unlockRequirement: 'Requisito exacto por confirmar.', verifiedAt: '2026-06-20',
  },
];
