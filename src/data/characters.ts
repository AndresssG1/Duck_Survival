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
    '/images/personajes/energia/Lux/personaje.png',

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
        '/images/personajes/energia/Lux/habilidad-normal.png',
      unlock: 'Se desbloquea con 1 estrella.',
    },
    {
      name: 'Rayo Concentrado Holográfico',
      type: 'Habilidad definitiva',
      description: 'Lux usa el Ojo de Láser del Rayo Concentrado Holográfico, infligiendo daño de energía a un solo objetivo cada segundo durante 6 segundos',
      image:
        '/images/personajes/energia/Lux/habilidad-definitiva.png',
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
];
