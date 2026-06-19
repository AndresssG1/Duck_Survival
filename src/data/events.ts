export type EventStatus = 'upcoming' | 'active' | 'ended';
export type EventAudience = 'individual' | 'guild';

export interface DailyChallenge {
  slug: string;
  name: string;
  audience: EventAudience;
  description: string;
  unlockRequirement: string;
  resetSchedule: string;
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

export const dailyChallenges: DailyChallenge[] = [
  {
    slug: 'arena-pvp',
    name: 'Arena PvP',
    audience: 'individual',
    description: 'Desafío competitivo incluido dentro del apartado Desafío del juego.',
    unlockRequirement: 'Se desbloquea mediante el progreso de la cuenta. Requisito exacto por verificar.',
    resetSchedule: 'Actividad diaria. Horario exacto de reinicio por verificar.',
    verifiedAt: '2026-06-19',
  },
  {
    slug: 'exploracion-mazmorras',
    name: 'Exploración de mazmorras',
    audience: 'individual',
    description: 'Desafío de exploración incluido dentro del apartado Desafío del juego.',
    unlockRequirement: 'Se desbloquea mediante el progreso de la cuenta. Requisito exacto por verificar.',
    resetSchedule: 'Actividad diaria. Horario exacto de reinicio por verificar.',
    verifiedAt: '2026-06-19',
  },
  {
    slug: 'guild-boss',
    name: 'Guild Boss',
    audience: 'guild',
    description: 'Desafío cooperativo de gremio incluido dentro del apartado Desafío del juego.',
    unlockRequirement: 'Requiere acceso a las funciones de gremio. Condición exacta por verificar.',
    resetSchedule: 'Actividad diaria. Horario exacto de reinicio por verificar.',
    verifiedAt: '2026-06-19',
  },
];
