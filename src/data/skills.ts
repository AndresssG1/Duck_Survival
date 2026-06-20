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
  {
    slug: 'golpe-igneo',
    name: 'Golpe Ígneo',
    element: 'quemadura',
    type: 'Objetivo único',
    description: 'Lanza 1 Golpes Ígneos contra 1 objetivos aleatorios, causando daño de fuego.',
    image: '/images/habilidades/golpe-igneo.webp',
    imageAlt: 'Icono de la habilidad Golpe Ígneo',
    strategicUse: '',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Desbloquea Golpe Ígneo en partida.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Golpe Ígneo]: Número de Golpe Ígneo +2.',
        starEffects: [
          { stars: 1, effect: 'Daño de Golpe Ígneo +4,0 %.' },
          { stars: 2, effect: 'Daño de Golpe Ígneo +4,0 %.' },
          { stars: 3, effect: 'Daño crítico +8,0 %.' },
          { stars: 4, effect: 'Resistencia al daño crítico +8,0 %.' },
          { stars: 5, effect: 'Daño de fuego +5,0 %.' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Golpe Ígneo]: Genera 1 charcos de fuego durante 4 s, lanza 3 Golpes Ígneos contra hasta 3 objetivos dentro de los charcos de fuego.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Golpe Ígneo provoca una explosión de área pequeña de 30%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Golpe Ígneo]: Cuando Golpe Ígneo impacta a un enemigo, hay un 50% de probabilidad de volver a lanzar Golpe Ígneo 1 veces en un área pequeña.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'cadena-de-relampagos',
    name: 'Cadena de Relámpagos',
    element: 'rayo',
    type: 'En área',
    description: 'Lanza 1 Cadenas de Relámpagos que pueden rebotar 3 veces, causando daño de relámpago.',
    image: '/images/habilidades/cadena-de-relampagos.webp',
    imageAlt: 'Icono de la habilidad Cadena de Relámpagos',
    strategicUse: '',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Desbloquea Cadena de Relámpagos en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Cadena de Relámpagos]: Al rebotar, la Cadena de Relámpagos tiene un 50% de probabilidad de generar un rayo dorado que puede rebotar 3 veces.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Cadena de Relámpagos +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Cadena de Relámpagos +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de rayo +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Cadena de Relámpagos]: La Cadena de Relámpagos permanece en el lugar durante 2 s, causando daño continuo a los enemigos en su trayectoria.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Objetivos iniciales de Cadena de Relámpagos +1, cantidad de rebotes +1.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Cadena de Relámpagos]: Al rebotar, la Cadena de Relámpagos tiene un 10% de probabilidad de generar una Esfera Eléctrica que dura 3 s, que electrocuta continuamente a 3 unidades cercanas.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
  {
    slug: 'torre-de-rayo-pulsante',
    name: 'Torre de Rayo Pulsante',
    element: 'energia',
    type: 'En área',
    description: 'Construye 1 Torre de Rayo Pulsante que inflige daño de energía a enemigos en línea recta.',
    image: '/images/habilidades/torre-de-rayo-pulsante.webp',
    imageAlt: 'Icono de la habilidad Torre de Rayo Pulsante',
    strategicUse: '',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Desbloquea Torre de Rayo Pulsante en combate.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Torre de Rayo Pulsante +2.0%' },
          { stars: 2, effect: 'Daño crítico +5.0%' },
          { stars: 3, effect: 'Aumento de daño de Torre de Rayo Pulsante +2.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +5.0%' },
          { stars: 5, effect: 'Daño de energía +3.0%' },
        ],
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Torre de Rayo Pulsante]: Cada ataque de la Torre de Rayo Pulsante dispara dos rayos pulsantes.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Torre de Rayo Pulsante +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Torre de Rayo Pulsante +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de energía +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Torre de Rayo Pulsante]: La Torre de Rayo Pulsante se convierte en un rayo continuo.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Velocidad de ataque de la Torre de Rayo Pulsante por ataque +10%, se acumula hasta 100%, y reduce la reducción de daño del objetivo en 5%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Torre de Rayo Pulsante]: El Rayo Pulsante barre lentamente el campo de batalla.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
  {
    slug: 'escudo-de-hielo',
    name: 'Escudo de Hielo',
    element: 'escarcha',
    type: 'En área',
    description: 'Invoca 3 Escudo de Hielo giratorios que causan daño de hielo, bloquean proyectiles y aplican 30% [ralentización].',
    image: '/images/habilidades/escudo-de-hielo.webp',
    imageAlt: 'Icono de la habilidad Escudo de Hielo',
    strategicUse: '',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Se desbloquea Escudo de Hielo en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Escudo de Hielo]: El daño del Escudo de Hielo aumenta considerablemente y se expande y contrae periódicamente.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Escudo de Hielo +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Escudo de Hielo +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de hielo +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Escudo de Hielo]: El área central del Escudo de Hielo genera una tormenta de hielo que inflige daño continuo.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Duración del Escudo de Hielo +25%, el efecto adicional de [Ralentización] aumenta a 50%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Escudo de Hielo]: El Escudo de Hielo añade efecto de Retroceso.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
  {
    slug: 'disco-volador-rebotador',
    name: 'Disco Volador Rebotador',
    element: 'fisico',
    type: 'Objetivo único',
    description: 'Lanza 1 Discos Voladores Rebotadores que duran 3 s; rebotan al chocar contra paredes.',
    image: '/images/habilidades/disco-volador-rebotador.webp',
    imageAlt: 'Icono de la habilidad Disco Volador Rebotador',
    strategicUse: '',
    qualityEffects: [
      {
        quality: 'Excelente',
        effect: 'Se desbloquea Disco Volador Rebotador en combate.',
        starEffects: null,
      },
      {
        quality: 'Élite',
        effect: 'Desbloquea la opción de despertar de [Disco Volador Rebotador]: Evoluciona a Flecha Centinela, permanece de forma permanente y ataca continuamente a los enemigos.',
        starEffects: [
          { stars: 1, effect: 'Aumento de daño de Disco Volador Rebotador +4.0%' },
          { stars: 2, effect: 'Aumento de daño de Disco Volador Rebotador +4.0%' },
          { stars: 3, effect: 'Daño crítico +8.0%' },
          { stars: 4, effect: 'Resistencia a daño crítico +8.0%' },
          { stars: 5, effect: 'Daño de energía +5.0%' },
        ],
      },
      {
        quality: 'Épico',
        effect: 'Desbloquea la opción de despertar+ de [Disco Volador Rebotador]: Cantidad de Flechas Centinela +1.',
        starEffects: null,
      },
      {
        quality: 'Legendario',
        effect: 'Probabilidad de crítico de Disco Volador Rebotador +2.5%, daño crítico +25%.',
        starEffects: null,
      },
      {
        quality: 'Mítico',
        effect: 'Mejora de la opción de despertar+ de [Disco Volador Rebotador]: Las Flechas Centinela disparan adicionalmente 1 Discos Voladores Rebotadores cada 6 s.',
        starEffects: null,
      },
    ],
    verifiedAt: '2026-06-20',
    gameVersion: '1.4.1',
  },
];