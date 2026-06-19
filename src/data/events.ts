export type EventStatus = 'upcoming' | 'active' | 'ended';

export interface GameEvent {
  slug: string;
  name: string;
  description: string;
  status: EventStatus;
  startsAt: string | null;
  endsAt: string | null;
  rewards: string[];
  sourceUrl: string;
  verifiedAt: string;
}

// Events are published only after confirmation from an official channel.
export const gameEvents: GameEvent[] = [];
