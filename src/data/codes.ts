export type CodeStatus = 'active' | 'expired' | 'unverified';

export interface GameCode {
  code: string;
  status: CodeStatus;
  reward: string;
  verifiedAt: string | null;
  expiresAt: string | null;
  sourceUrl: string | null;
  isNew?: boolean;
}

export const gameCodes: GameCode[] = [
  {
    code: 'DuckPick',
    status: 'active',
    reward: 'Recompensas del código de regalo',
    verifiedAt: '2026-06-18',
    expiresAt: '2026-07-01',
    sourceUrl: null,
    isNew: true,
  },
  {
    code: 'D7kP2x',
    status: 'active',
    reward: 'Recompensas del código de regalo por el día del padre',
    verifiedAt: '2026-06-21',
    expiresAt: '2026-07-01',
    sourceUrl: null,
    isNew: true,
  },
  ...['BestDuck', 'FanGift', 'ThankYou', 'DUCK2M', 'HEARDUCK', 'DUCK777', 'DUCK2026', 'DUCKOP2026', 'DUCKIE', 'DUCKOP', 'DuckGo'].map((code) => ({
    code,
    status: 'active' as const,
    reward: 'Recompensas del código de regalo',
    verifiedAt: '2026-06-18',
    expiresAt: null,
    sourceUrl: null,
  })),
];
