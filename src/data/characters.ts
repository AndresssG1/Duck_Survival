import type { GameElement } from './elements';

export interface Character {
  slug: string;
  name: string;
  element: GameElement['id'];
  rarity: string;
  description: string;
  image: string | null;
  imageAlt: string;
  acquisition: string;
  progressionNote: string;
  abilities: Array<{
    name: string;
    type: string;
    description: string;
    image: string;
    unlock: string | null;
  }>;
  linkedAbility: {
    name: string;
    passiveName: string;
    description: string;
  } | null;
  verifiedAt: string | null;
  gameVersion: string;
}

export const characters: Character[] = [
  {
    slug: 'hacha-de-hierro-gordon',
    name: 'Hacha de Hierro - Gordon',
    element: 'fisico',
    rarity: 'Épico',
    description: 'Héroe épico del elemento Físico con ataques de área contra enemigos cercanos y una definitiva que le concede un escudo mientras gira.',
    image: '/images/personajes/fisico/hacha-de-hierro-gordon/gordon.png',
    imageAlt: 'Hacha de Hierro - Gordon con armadura roja y un hacha sobre el hombro',
    acquisition: 'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',
    progressionNote: 'Los porcentajes mostrados corresponden al nivel 1. La habilidad normal se desbloquea al alcanzar 1 estrella.',
    abilities: [
      {
        name: 'Torbellino',
        type: 'Habilidad normal',
        description: 'Realiza un corte que inflige daño físico equivalente al 25% del ataque a los enemigos cercanos.',
        image: '/images/personajes/fisico/hacha-de-hierro-gordon/torbellino.png',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Corte giratorio',
        type: 'Habilidad definitiva',
        description: 'Obtiene un escudo equivalente al 25% de su vida máxima y gira continuamente, causando cada segundo daño equivalente al 25% de su ataque.',
        image: '/images/personajes/fisico/hacha-de-hierro-gordon/corte-giratorio.png',
        unlock: null,
      },
    ],
    linkedAbility: {
      name: 'Cuchillas giratorias',
      passiveName: 'Filo de la división',
      description: 'Las cuchillas giratorias se dividen adicionalmente en 3 cuchillas giratorias pequeñas.',
    },
    verifiedAt: '2026-06-18',
    gameVersion: '1.4.1',
  },
  {
    slug: 'ojo-de-laser-lux',
    name: 'Ojo de Láser - Lux',
    element: 'energia',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/energia/ojo-de-laser-lux/personaje.png',

    imageAlt:
      'Ojo de Láser - Lux, con cabello blanco con una armadura azul y negra completa',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Misil Nanométrico',
        type: 'Habilidad normal',
        description: 'Lux lanza Misiles Nanómetricos con la palma, causando daño de energía equivalente a 100% de su ataque',
        image:
          '/images/personajes/energia/ojo-de-laser-lux/habilidad-normal.png',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Rayo Concentrado Holográfico',
        type: 'Habilidad definitiva',
        description: 'Lux usa el Ojo de Láser del Rayo Concentrado Holográfico, infligiendo daño de energía a un solo objetivo cada segundo durante 6 segundos',
        image:
          '/images/personajes/energia/ojo-de-laser-lux/habilidad-definitiva.png',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Lasér Concentrado',
      passiveName: 'Misil de energía',
      description: 'El láser enfocado dispara 6 misiles de energía cada 5 segundos',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'ingeniero-del-yermo-max',
    name: 'Ingeniero del Yermo - Max',
    element: 'energia',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/energia/ingeniero-del-yermo-max/personaje.png',

    imageAlt:
      'Ingeniero del Yermo - Max, con llantas en sus hombros y una llave de arma',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Golpe de Llave Inglesa',
        type: 'Habilidad normal',
        description: 'Causa daño de energía equivalente a 100% de su ataque a un solo objetivo',
        image:
          '/images/personajes/energia/ingeniero-del-yermo-max/habilidad-normal.png',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Llave Giratoria',
        type: 'Habilidad definitiva',
        description: 'Una llave inglesa gira alrededor del usuario, causando daño de energía equivalente al 10% de su ataque a las unidades cercanos durante 6 segundos',
        image:
          '/images/personajes/energia/ingeniero-del-yermo-max/habilidad-definitiva.png',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Torre de Rayo Pulsante',
      passiveName: 'Impacto de Energía',
      description: 'Cada vez que el rayo de pulso ataque 3 veces, liberará una onda de choque de energía',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'enfermera-rachel',
    name: 'Enfermera - Rachel',
    element: 'fisico',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/fisico/enfermera-rachel/personaje.webp',

    imageAlt:
      'Enfermera - Rachel, con un estetoscopio y una bolsa de medicamentos',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Sanación Natural',
        type: 'Habilidad normal',
        description: 'Cura al héroe o protagonista con menor vida por 50 + 20% de la fuerza de ataque como vida.',
        image:
          '/images/personajes/fisico/enfermera-rachel/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Deseo Natural',
        type: 'Habilidad definitiva',
        description: 'Reza por el héroe o protagonista con menor vida, restaura vida equivalente a 50% del Ataque.',
        image:
          '/images/personajes/fisico/enfermera-rachel/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cuchillas Giratorias',
      passiveName: 'Rueda Explosiva',
      description: 'El proyectil de la rueda tiene un 15% de probalidad de explotar una vez al impactar en el objetivo',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'vanguardia-del-hielo-luke',

    name: 'Vanguardia del Hielo - Luke',
    element: 'escarcha',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/escarcha/vanguardia-del-hielo-luke/personaje.webp',

    imageAlt:
      'Vanguardia del Hielo - Luke, con una espada de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Martillo Pesado',
        type: 'Habilidad normal',
        description: 'Blande un martillo que inflige daño de hielo equivalente a 50% del ataque en un área en forma de abanico frontal.',
        image:
          '/images/personajes/escarcha/vanguardia-del-hielo-luke/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Impacto de Escarcha',
        type: 'Habilidad definitiva',
        description: 'Golpea el suelo con un martillo, ralentizando a todos los enemigos en el área durante 2 segundos y causando daño de hielo equivalente a 100% de su ataque.',
        image:
          '/images/personajes/escarcha/vanguardia-del-hielo-luke/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Escudo de Hielo',
      passiveName: 'Escarcha Dispersa',
      description: 'Al finalizar el escudo de hielo, se emite hacia afuera',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
];
