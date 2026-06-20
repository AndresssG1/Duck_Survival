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
    starEffects: Array<{
      stars: number;
      effect: string;
    }> | null;
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
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de Cuchillas giratorias: evoluciona a Cuchillas giratorias dorada.',
        starEffects: [
          { stars: 1, effect: 'Daño de Cuchillas giratorias +4,0 %.' },
          { stars: 2, effect: 'Daño de Cuchillas giratorias +4,0 %.' },
          { stars: 3, effect: 'Daño crítico +8,0 %.' },
          { stars: 4, effect: 'Resistencia al daño crítico +8,0 %.' },
          { stars: 5, effect: 'Daño físico +5,0 %.' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de Cuchillas giratorias: evoluciona a Torbellino dorado. Al finalizar, regresa al personaje; la probabilidad de crítico de ese daño aumenta un 50 %.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Aumenta el área de daño de Cuchillas giratorias un 25 % y eleva el efecto adicional de Reducción de curación al 50 %.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora la opción de despertar+ de Cuchillas giratorias: cantidad de Torbellinos dorados +1.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'pollo-furioso',
    name: 'Pollo Furioso',
    element: 'rayo',
    type: 'Objetivo único',
    description: 'Invoca 1 soldado Pollo para combatir, causando daño de rayo.',
    image: '/images/habilidades/pollo-furioso.webp',
    imageAlt: 'Icono de la habilidad Pollo Furioso',
    strategicUse: 'Combatiente extra, el soldado Pollo puede atacar a los enemigos de forma independiente, lo que permite al personaje principal concentrarse en otras tareas o atacar a diferentes objetivos.',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Desbloquea Pollo Furioso en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Pollo Furioso]: Evoluciona a soldado Gallo Furioso, el daño aumenta',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Pollo Furioso +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Pollo Furioso +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de rayo +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Pollo Furioso]: Cada 2 ataques, dispara 1 Minas Huevo.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Velocidad de ataque del Pollo +25%, penetración de balas +1.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Pollo Furioso]: Los disparos de Pollo Veloz tienen 25% de probabilidad de explotar al impactar.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
  {
    slug: 'cono-de-hielo-extremo',
    name: 'Cono de Hielo Extremo',
    element: 'escarcha',
    type: 'Objetivo único',
    description: 'Dispara 2 Conos de Hielo Extremo que infligen daño de hielo y [Congelan] al enemigo durante 2 segundos.',
    image: '/images/habilidades/cono-de-hielo-extremo.webp',
    imageAlt: 'Icono de la habilidad Cono de Hielo Extremo',
    strategicUse: 'Contról de masas, el efecto de congelación puede inmovilizar a los enemigos, lo que permite al personaje y a sus aliados atacar sin preocuparse por represalias inmediatas.',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Desbloquea Cono de Hielo Extremo en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Cono de Hielo Extremo]: Lanza 1 Cristales de Escarcha que duran 6 s; durante su duración, liberan 2 conos de hielo cada 1 s.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Cono de Hielo Extremo +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Cono de Hielo Extremo +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de hielo +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Cono de Hielo Extremo]: Cuando los conos de hielo desaparecen, generan 1 explosiones de hielo.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Cantidad de Cono de Hielo Extremo +1, área de daño +25%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Cono de Hielo Extremo]: Los Cristales de Escarcha evolucionan a Fénix de Hielo, que vuela lentamente durante su duración.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
  {
    slug: 'meteorito',
    name: 'Meteorito',
    element: 'quemadura',
    type: 'En área',
    description: 'Invoca 2 meteoritos que golpean objetivos aleatorios, causando daño de fuego.',
    image: '/images/habilidades/meteorito.webp',
    imageAlt: 'Icono de la habilidad Meteorito',
    strategicUse: 'Daño de área, el efecto de explosión puede causar daño a múltiples enemigos al mismo tiempo, lo que permite al personaje y a sus aliados controlar mejor el campo de batalla.',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Se desbloquea Meteorito en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Meteorito]: El daño de Meteoritos aumenta significativamente y, tras la explosión, genera Brasas.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Meteorito +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Meteorito +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de fuego +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Meteorito]: Invoca adicionalmente 1 meteoritos gigantes que aturden brevemente al objetivo.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Cantidad de Meteoritos +2, radio de explosión +25%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Meteorito]: Al impactar, los Meteoritos tienen un 50% de probabilidad de rodar hacia adelante una cierta distancia, causando daño a los enemigos en su trayectoria.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
  {
    slug: 'laser-concentrado',
    name: 'Láser Concentrado',
    element: 'energia',
    type: 'Objetivo único',
    description: 'Dispara continuamente un láser de objetivo único que causa daño de energía, prioriza objetivos Élite.',
    image: '/images/habilidades/laser-concentrado.webp',
    imageAlt: 'Icono de la habilidad Láser Concentrado',
    strategicUse: 'Daño sostenido, el láser de objetivo único puede ser especialmente efectivo contra enemigos con alta salud o jefes, ya que inflige daño continuo mientras se mantiene el ataque.',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Se desbloquea Láser Concentrado en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Láser Concentrado]: El Láser Concentrado rastrea continuamente objetivos.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Láser Concentrado +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Láser Concentrado +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de energía +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Láser Concentrado]: Cantidad de objetivos del Láser Concentrado +1.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Cantidad inicial de refracciones del Dron +1, el daño a un solo objetivo aumenta gradualmente durante 6 s, hasta un máximo de 50%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Láser Concentrado]: Cuando el Láser Concentrado impacta al objetivo, provoca una explosión en su posición.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
];
