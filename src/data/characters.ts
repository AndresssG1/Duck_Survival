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
        description: 'Realiza un corte que inflige daño físico equivalente al 25 % del ataque a los enemigos cercanos.',
        image: '/images/personajes/fisico/hacha-de-hierro-gordon/torbellino.png',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Corte giratorio',
        type: 'Habilidad definitiva',
        description: 'Obtiene un escudo equivalente al 25 % de su vida máxima y gira continuamente, causando cada segundo daño equivalente al 25 % de su ataque.',
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
        description: 'Lux lanza misiles nanométricos con la palma y causa daño de energía equivalente al 100 % de su ataque.',
        image:
          '/images/personajes/energia/ojo-de-laser-lux/habilidad-normal.png',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Rayo Concentrado Holográfico',
        type: 'Habilidad definitiva',
        description: 'Lux usa el Ojo de Láser del Rayo Concentrado Holográfico e inflige daño de energía a un solo objetivo cada segundo durante 6 segundos.',
        image:
          '/images/personajes/energia/ojo-de-laser-lux/habilidad-definitiva.png',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Láser concentrado',
      passiveName: 'Misil de energía',
      description: 'El láser enfocado dispara 6 misiles de energía cada 5 segundos.',
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
        description: 'Causa daño de energía equivalente al 100 % de su ataque a un solo objetivo.',
        image:
          '/images/personajes/energia/ingeniero-del-yermo-max/habilidad-normal.png',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Llave Giratoria',
        type: 'Habilidad definitiva',
        description: 'Una llave inglesa gira alrededor del usuario y causa daño de energía equivalente al 10 % de su ataque a las unidades cercanas durante 6 segundos.',
        image:
          '/images/personajes/energia/ingeniero-del-yermo-max/habilidad-definitiva.png',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Torre de Rayo Pulsante',
      passiveName: 'Impacto de Energía',
      description: 'Cada vez que el rayo de pulso ataca 3 veces, libera una onda de choque de energía.',
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
        description: 'Cura al héroe o protagonista con menor vida y restaura 50 + 20 % de la fuerza de ataque como vida.',
        image:
          '/images/personajes/fisico/enfermera-rachel/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Deseo Natural',
        type: 'Habilidad definitiva',
        description: 'Reza por el héroe o protagonista con menor vida y restaura vida equivalente al 50 % del ataque.',
        image:
          '/images/personajes/fisico/enfermera-rachel/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cuchillas Giratorias',
      passiveName: 'Rueda Explosiva',
      description: 'El proyectil de la rueda tiene un 15 % de probabilidad de explotar al impactar en el objetivo.',
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
        description: 'Blande un martillo que inflige daño de hielo equivalente al 50 % del ataque en un área con forma de abanico frontal.',
        image:
          '/images/personajes/escarcha/vanguardia-del-hielo-luke/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Impacto de Escarcha',
        type: 'Habilidad definitiva',
        description: 'Golpea el suelo con un martillo, ralentiza a todos los enemigos en el área durante 2 segundos y causa daño de hielo equivalente al 100 % de su ataque.',
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
  {
    slug: 'cazadora-polar-lyra',

    name: 'Cazadora Polar - Lyra',
    element: 'escarcha',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/escarcha/cazadora-polar-lyra/personaje.webp',

    imageAlt:
      'Cazadora Polar - Lyra, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Flechas de Escarcha',
        type: 'Habilidad normal',
        description: 'Dispara una flecha que inflige daño de hielo equivalente al 60 % del ataque.',
        image:
          '/images/personajes/escarcha/cazadora-polar-lyra/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Lluvia de Flechas',
        type: 'Habilidad definitiva',
        description: 'Dispara 3 filas consecutivas de flechas perforantes, empuja al objetivo y causa daño de hielo equivalente al 120 % de su ataque.',
        image:
          '/images/personajes/escarcha/cazadora-polar-lyra/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cono de Hielo Extremo',
      passiveName: 'Hielo Fragmentado',
      description: 'El cono de hielo gélido termina de lanzar 3 fragmentos de hielo.',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'armadura-28-hank',

    name: 'Armadura 28 - Hank',
    element: 'quemadura',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/quemadura/armadura-28-hank/personaje.webp',

    imageAlt:
      'Armadura 28 - Hank, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Golpe de Puño',
        type: 'Habilidad normal',
        description: 'Inflige daño de fuego equivalente al 25 % del ataque a objetivos en un área pequeña.',
        image:
          '/images/personajes/quemadura/armadura-28-hank/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Imparable',
        type: 'Habilidad definitiva',
        description: 'Embiste hacia adelante, empuja a los enemigos y causa daño de fuego equivalente al 50 % de su ataque.',
        image:
          '/images/personajes/quemadura/armadura-28-hank/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Meteorito',
      passiveName: 'Lluvia de meteoritos',
      description: 'Al caer, los meteoritos añaden 2 meteoritos pequeños.',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'chica-chispa-phoebe',

    name: 'Chica Chispa - Phoebe',
    element: 'quemadura',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/quemadura/chica-chispa-phoebe/personaje.webp',

    imageAlt:
      'Chica Chispa - Phoebe, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Proyectil de fuego',
        type: 'Habilidad normal',
        description: 'Detona Fuegos Artificiales, causando daño de área de fuego equivalente a 50% de su ataque.',
        image:
          '/images/personajes/quemadura/chica-chispa-phoebe/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Festival de Fuegos Artificiales',
        type: 'Habilidad definitiva',
        description: 'Durante 3 segundos, lanza múltiples fuegos artificiales que causan daño de fuego en área equivalente a 100% del ataque.',
        image:
          '/images/personajes/quemadura/chica-chispa-phoebe/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Golpe Ígneo',
      passiveName: 'Chispa explosiva',
      description: 'El golpe de llamas genera 2 chispas al impactar al objetivo.',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'ranger-definitivo-raine',

    name: 'Ranger Definitivo - Raine',
    element: 'rayo',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/rayo/ranger-definitivo-raine/personaje.webp',

    imageAlt:
      'Ranger Definitivo - Raine, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Dispersión',
        type: 'Habilidad normal',
        description: 'Dispara múltiples escopetazos hacia adelante, cada uno causando daño de rayo equivalente a 50% de su ataque.',
        image:
          '/images/personajes/rayo/ranger-definitivo-raine/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Bomba Explosiva',
        type: 'Habilidad definitiva',
        description: 'Lanza Bombas Explosivas hacia adelante, causando daño de área en forma de cono equivalente a 200% de su ataque.',
        image:
          '/images/personajes/rayo/ranger-definitivo-raine/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Pollo Furioso',
      passiveName: 'Gatling Chick',
      description: 'Invoca 1 Gatling Chick armado adicional.',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'doctor-de-tormenta-rex',

    name: 'Doctor de Tormenta - Rex',
    element: 'rayo',
    rarity: 'Épico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/rayo/doctor-de-tormenta-rex/personaje.webp',

    imageAlt:
      'Doctor de Tormenta - Rex, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Golpe de Rayo',
        type: 'Habilidad normal',
        description: 'Libera una Cadena de Relámpagos que inflige daño de rayo equivalente a 40% del ataque a un máximo de 4 objetivos.',
        image:
          '/images/personajes/rayo/doctor-de-tormenta-rex/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Descarga de Alta Tensión',
        type: 'Habilidad definitiva',
        description: 'Lanza 6 ataques de relámpago, aturde a los enemigos durante 2 segundos y causa daño de rayo equivalente a 80% de ataque.',
        image:
          '/images/personajes/rayo/doctor-de-tormenta-rex/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cadena de Relámpagos',
      passiveName: 'Tormenta magnética',
      description: 'La cadena de relámpagos genera una pequeña tormenta magnética al golpear a un monstruo.',
    },

    verifiedAt: '2026-06-19',
    gameVersion: '1.4.1',
  },
  {
    slug: 'bruja-ignea-emily',

    name: 'Bruja Ignea - Emily',
    element: 'quemadura',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/quemadura/bruja-ignea-emily/personaje.webp',

    imageAlt:
      'Bruja Ignea - Emily, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Columna de Fuego',
        type: 'Habilidad normal',
        description: 'Libera una columna de fuego en el área objetivo que inflige daño de fuego equivalente a 100% del ataque.',
        image:
          '/images/personajes/quemadura/bruja-ignea-emily/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Bola de Fuego Ignea',
        type: 'Habilidad definitiva',
        description: 'Lanza una bola de fuego que crece continuamente y rueda hacia adeante, causando daño de fuego equivalente a 100$ de ataque a los enemigos en su trayectoria.',
        image:
          '/images/personajes/quemadura/bruja-ignea-emily/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Golpe Igneo',
      passiveName: 'Chispa Explosiva',
      description: 'El golpe de llamas genera 3 chispas al impactar al objetivo.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'sombra-de-nieve-karl',

    name: 'Sombra de Nieve - Karl',
    element: 'escarcha',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/escarcha/sombra-de-nieve-karl/personaje.webp',

    imageAlt:
      'Sombra de Nieve - Karl, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Orbe de Escarcha',
        type: 'Habilidad normal',
        description: 'Lanza un Orve de Escarcha que inflige daño de hielo en área equivalente al 50% del ataque.',
        image:
          '/images/personajes/escarcha/sombra-de-nieve-karl/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Lluvia de Hielo',
        type: 'Habilidad definitiva',
        description: 'Lanza una lluvia de hielo, causando cada segundo daño de hielo equivalente al 100% de su ataque a los enemigos en el área.',
        image:
          '/images/personajes/escarcha/sombra-de-nieve-karl/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Escudo de Hielo',
      passiveName: 'Disperción de Escarcha',
      description: 'Al tenerminar el escudo de hielo, se lanza hacia afuera y explota al llegar al punto final, infligiendo efecto (Congelación) durante 2 segundos.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'comandante-de-escarcha-mil',

    name: 'Comandante de Escarcha - Mil',
    element: 'escarcha',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/escarcha/comandante-de-escarcha-mil/personaje.webp',

    imageAlt:
      'Comandante de Escarcha - Mil, con un arco de hielo y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Escudo de Hielo',
        type: 'Habilidad normal',
        description: 'Cada 2s aplica a la unidad con menor vida un (Escudo de Hielo) durante 3s, si al recibir daño hay 15% de probabilidad de congelar al atacante durante 2s y además cura.',
        image:
          '/images/personajes/escarcha/comandante-de-escarcha-mil/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Torbellino de Hielo',
        type: 'Habilidad definitiva',
        description: 'Lanza un torbellino de Hielo, causando cada segundo daño de hielo equivalente a 125% de su ataque y con 25% de probabildiad de congelar a los enemigos durante 2 segundos.',
        image:
          '/images/personajes/escarcha/comandante-de-escarcha-mil/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cono de Hielo Extremo',
      passiveName: 'Frozen Shards',
      description: 'La gélida Púa de Hielo termina disparando 4 fragmentos de hielo, con un 10% de probabilidad de infligir el efecto de Congelación.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'cohete-cole',

    name: 'Cohete Cole',
    element: 'quemadura',
    rarity: 'mítico',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/quemadura/cohete-cole/personaje.webp',

    imageAlt:
      'Cohete Cole, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Lanzallamas',
        type: 'Habilidad normal',
        description: 'Lanza llamas continuamente que queman al enemigo, causando cada segundo daño de fuego equivalente a 75% de su ataque.',
        image:
          '/images/personajes/quemadura/cohete-cole/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Misil Infernal',
        type: 'Habilidad definitiva',
        description: 'Lanza un misil infernal que inglige daño de fuego masivo en área equivalente a 500% del ataque.',
        image:
          '/images/personajes/quemadura/cohete-cole/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Meteorito',
      passiveName: 'Sin nombre',
      description: 'Al lanzar cualquier habilidad 5 veces, se lanza un meteorito adicional con 50% de daño.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'martillo-de-lava-lava',

    name: 'Martillo de Lava - Lava',
    element: 'quemadura',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/quemadura/martillo-de-lava-lava/personaje.webp',

    imageAlt:
      'Martillo de Lava - Lava, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Martillo de Llamas',
        type: 'Habilidad normal',
        description: 'Blande el martillo infligiendo daño de fuego equivalente a 50% del ataque en un área en forma de abanico frontal.',
        image:
          '/images/personajes/quemadura/martillo-de-lava-lava/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Meteorito de Lava',
        type: 'Habilidad definitiva',
        description: 'Durante 8 segundos el ataque básico se convierte en una ola de lava que inlige daño de fuego equivalente a 75% del ataque y empuja al objetivo',
        image:
          '/images/personajes/quemadura/martillo-de-lava-lava/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Meteorito',
      passiveName: 'Lluvia de meteoritos',
      description: 'Al caer, los meteoritos añaden 3 meteoritos pequeños.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'rayo-furioso-bell',

    name: 'Rayo Furioso - Bell',
    element: 'rayo',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/rayo/rayo-furioso-bell/personaje.webp',

    imageAlt:
      'Rayo Furioso - Bell, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Golpe de Garras',
        type: 'Habilidad normal',
        description: 'Ataca con garras infligiendo daño de rayo equivalente a 50% del ataque.',
        image:
          '/images/personajes/rayo/rayo-furioso-bell/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Descenso del Rayo',
        type: 'Habilidad definitiva',
        description: 'Salta hacia el objetivo, provoca a todos los enemigos en el área y aumenta su propia vida; causando daño de rayo equivalente a 150% de su ataque.',
        image:
          '/images/personajes/rayo/rayo-furioso-bell/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Pollo Furioso',
      passiveName: 'Gatling Chick',
      description: 'Invova adicionalmente 1 Gatling Chick armado que dispara bolas penetrantes.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'trueno-de-tormenta-ora',

    name: 'Trueno de Tormenta - Ora',
    element: 'rayo',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/rayo/trueno-de-tormenta-ora/personaje.webp',

    imageAlt:
      'Trueno de Tormenta - Ora, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Electrocución Furiosa',
        type: 'Habilidad normal',
        description: 'Invoca 3 rayos consecutivos hacia la dirección objetivo, infligiendo daño de rayo equivalente a 100% del ataque.',
        image:
          '/images/personajes/rayo/trueno-de-tormenta-ora/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Orbe de Trueno',
        type: 'Habilidad definitiva',
        description: 'Inflige daño de rayo equivalente a 50% del ataque de los objetivos en área.',
        image:
          '/images/personajes/rayo/trueno-de-tormenta-ora/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cadena de Relámpagos',
      passiveName: 'Tormenta Magnética',
      description: 'La cadena de relámpagos genera una tormenta mágnetica de rango medio al golpear a un enemigo.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'baluarte-de-justicia-eric',

    name: 'Baluarte de Justicia - Eric',
    element: 'fisico',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/fisico/baluarte-de-justicia-eric/personaje.webp',

    imageAlt:
      'Baluarte de Justicia - Eric, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Golpe de Escudo de Luz',
        type: 'Habilidad normal',
        description: 'Lanza un escudo hacia adelante, causando daño físico a los enemigos en la trayectoria equivalente a 60% de su ataque.',
        image:
          '/images/personajes/fisico/baluarte-de-justicia-eric/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Protección Sagrada',
        type: 'Habilidad definitiva',
        description: 'Aplica un escudo equivalente a 25% de la vida máxima a los 5 soldados cercanos con menor vida durante 6 segundos.',
        image:
          '/images/personajes/fisico/baluarte-de-justicia-eric/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cuchillas Giratorias',
      passiveName: 'Rueda Explisiva',
      description: 'El proyectil de la rueda tiene un 30% de probabilidad de explotar una vez al impactar en el objetivo.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'voluntad-indomable-bru',

    name: 'Voluntad Indomable - Bru',
    element: 'fisico',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/fisico/voluntad-indomable-bru/personaje.webp',

    imageAlt:
      'Voluntad Indomable - Bru, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Golpe Rápido',
        type: 'Habilidad normal',
        description: 'Golpea continuamente con los puños infligiendo daño físico equivalente a 75% del ataque en un área rectangular.',
        image:
          '/images/personajes/fisico/voluntad-indomable-bru/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Puño Furioso',
        type: 'Habilidad definitiva',
        description: 'Obtienes un escudo equivalente al 30% de su vida máxima, empuja a todos los enemigos den el área en forma de abanico y causa daño físico equivalente al 150% de su ataque.',
        image:
          '/images/personajes/fisico/voluntad-indomable-bru/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Cuchillas Giratorias',
      passiveName: 'Cuchilla Dividida',
      description: 'Las cuchillas giratorias se dividen adicionalmente en 3 cuchillas giratorias medianas.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'sombra-apocaliptica-linda',

    name: 'Sombra Apocalíptica - Linda',
    element: 'energia',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/energia/sombra-apocaliptica-linda/personaje.webp',

    imageAlt:
      'Sombra Apocalíptica - Linda, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Disparo de Energía',
        type: 'Habilidad normal',
        description: 'Inflige daño de energía equivalente al 50% de su ataque a los objetivos dentro de un área rectangular.',
        image:
          '/images/personajes/energia/sombra-apocaliptica-linda/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Cañon de Energía',
        type: 'Habilidad definitiva',
        description: 'Durante 5 segundos, dispara un cañón de energía que inflige daño de energía equivalente al 100% de su ataque a los enemigos en el área.',
        image:
          '/images/personajes/energia/sombra-apocaliptica-linda/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Torre de Rayo Pulsante',
      passiveName: 'Impacto de Energía',
      description: 'Cada 2 ataques del Rayo Pulsante libera una onda de choque de energía, con efecto de empuje.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
  {
    slug: 'joven-prodigio-brian',

    name: 'Joven Prodigio - Brian',
    element: 'energia',
    rarity: 'legendario',

    description:
      'Descripción breve basada en sus habilidades confirmadas.',

    image:
      '/images/personajes/energia/joven-prodigio-brian/personaje.webp',

    imageAlt:
      'Joven Prodigio - Brian, con un traje de fuego y una armadura de placas',

    acquisition:
      'Puede obtenerse en el Suministro de Héroe o mediante packs disponibles por tiempo limitado.',

    progressionNote:
      'Los porcentajes mostrados corresponden al nivel 1.',

    abilities: [
      {
        name: 'Reparar',
        type: 'Habilidad normal',
        description: 'Repara el edificio con menor vida, cada reparación restaura 100 + 30% de la fuerza de ataque como vida.',
        image:
          '/images/personajes/energia/joven-prodigio-brian/habilidad-normal.webp',
        unlock: 'Se desbloquea con 1 estrella.',
      },
      {
        name: 'Reparación Rápida',
        type: 'Habilidad definitiva',
        description: 'Aplica un efecto de reparación rápida durante 6 segundos a todos los edificios aliados, restaurando 200 + 30% de la fuerza de ataque como vida',
        image:
          '/images/personajes/energia/joven-prodigio-brian/habilidad-definitiva.webp',
        unlock: null,
      },
    ],

    linkedAbility: {
      name: 'Láser Concentrado',
      passiveName: 'Misil de Energía',
      description: 'El láser enfocado dispara 8 misiles de energía cada 4 segundos.',
    },

    verifiedAt: '2026-06-22',
    gameVersion: '1.4.1',
  },
];
