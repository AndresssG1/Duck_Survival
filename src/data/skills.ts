import type { GameElement } from './elements';

export type SkillQuality = 'Excelente' | 'Élite' | 'Épico' | 'Legendario' | 'Mítico';

export interface Skill {
  slug: string;
  name: string;
  element: GameElement['id'];
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  strategicUse: string;
  qualityEffects: Array<{
    quality: SkillQuality;
    effect: string;
  }>;
  starEffects: Array<{
    stars: number;
    effect: string;
  }>;
  verifiedAt: string;
  gameVersion: string;
}

export const skills: Skill[] = [
  {
    slug: 'cuchillas-giratorias',
    name: 'Cuchillas giratorias',
    element: 'fisico',
    type: 'En área',
    description: 'Lanza una cuchilla giratoria que inflige daño físico a los enemigos en el área y aplica un 30 % de Reducción de curación.',
    image: '/images/habilidades/cuchillas-giratorias.webp',
    imageAlt: 'Icono de la habilidad Cuchillas giratorias',
    strategicUse: 'La Reducción de curación puede resultar especialmente útil contra enemigos que recuperan vida durante el combate.',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Desbloquea Cuchillas giratorias en combate.',
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de Cuchillas giratorias: evoluciona a Cuchillas giratorias dorada.',
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de Cuchillas giratorias: evoluciona a Torbellino dorado. Al finalizar, regresa al personaje; la probabilidad de crítico de ese daño aumenta un 50 %.',
      },
      {
        quality: 'Legendario',
        effect: 'Aumenta el área de daño de Cuchillas giratorias un 25 % y eleva el efecto adicional de Reducción de curación al 50 %.',
      },
      {
        quality: 'Mítico',
        effect: 'Mejora la opción de despertar+ de Cuchillas giratorias: cantidad de Torbellinos dorados +1.',
      },
    ],
    starEffects: [
      { stars: 1, effect: 'Daño de Cuchillas giratorias +4,0 %.' },
      { stars: 2, effect: 'Daño de Cuchillas giratorias +4,0 %.' },
      { stars: 3, effect: 'Daño crítico +8,0 %.' },
      { stars: 4, effect: 'Resistencia al daño crítico +8,0 %.' },
      { stars: 5, effect: 'Daño físico +5,0 %.' },
    ],
    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
];
