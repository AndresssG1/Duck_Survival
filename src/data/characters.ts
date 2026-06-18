import type { GameElement } from './elements';

export interface Character {
  slug: string;
  name: string;
  element: GameElement['id'];
  rarity: string;
  role: string;
  description: string;
  image: string | null;
  imageAlt: string;
  abilities: string[];
  synergies: string[];
  verifiedAt: string | null;
}

// Character data will be added only after it has been verified in-game.
export const characters: Character[] = [];
