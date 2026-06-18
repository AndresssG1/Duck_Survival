export type CodeStatus = 'active' | 'expired' | 'unverified';

export interface GameCode {
  code: string;
  status: CodeStatus;
  reward: string;
  verifiedAt: string | null;
  expiresAt: string | null;
  sourceUrl: string | null;
}

export const gameCodes: GameCode[] = [
  {
    code: 'DUCK777',
    status: 'unverified',
    reward: 'Recompensa pendiente de verificacion',
    verifiedAt: null,
    expiresAt: null,
    sourceUrl: null,
  },
];
