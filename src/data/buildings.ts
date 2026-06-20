export type BuildingElement = 'quemadura' | 'rayo' | 'escarcha' | 'energia' | 'fisico';

export interface BuildingLevelEffect { level: number; effect: string; }
export interface BuildingOption {
  slug: string; name: string; description: string; element: BuildingElement; maxLevel: 10 | 30;
  image?: string; imageAlt?: string; upgradeEffect?: string; levels: BuildingLevelEffect[];
  verifiedAt: string; gameVersion: string;
}
export interface BuildingCategory {
  slug: string; number: string; name: string; description: string; optionCount?: number; options: BuildingOption[];
}

export const buildingCategories: BuildingCategory[] = [
  {
    slug: 'la-base', number: '01', name: 'La Base', optionCount: 4,
    description: 'Es la construcción central que debes proteger. Sus opciones pueden reforzar la propia Base y conceder bonificaciones a las unidades durante el combate.',
    options: [{
      slug: 'campamento-de-supervivientes', name: 'Campamento de supervivientes', description: 'Oros diarios +9', element: 'fisico', maxLevel: 30,
      image: '/images/construcciones/departamento-de-ingenieria/la-base/campamento-de-supervivientes.webp',
      imageAlt: 'Campamento de supervivientes de Duck Survival',
      levels: [
        { level: 1, effect: 'Reducción de daño de la Base +3 %.' },
        { level: 3, effect: 'Cuando la Base alcanza nivel 2/3, todas las unidades obtienen +2 %/+4 % de daño.' },
        { level: 6, effect: 'Daño de la Base +3 %.' },
        { level: 10, effect: 'Distancia de ataque de la Base +25 %.' },
        { level: 15, effect: 'Reducción de daño de la Base +6 %.' },
        { level: 20, effect: 'Cuando la Base alcanza nivel 2/3, todas las unidades obtienen +2 %/+4 % de reducción de daño.' },
        { level: 25, effect: 'Daño de la Base +6 %.' },
        { level: 30, effect: 'La Base obtiene un escudo equivalente al 25 % de su vida al entrar en combate.' },
      ],
      verifiedAt: '2026-06-20', gameVersion: '1.4.1',
    }],
  },
  { slug: 'cuartel-cuerpo-a-cuerpo', number: '02', name: 'Cuartel cuerpo a cuerpo', description: 'Reúne edificios orientados a unidades que combaten cerca de los enemigos.', optionCount: 5, options: [] },
  { slug: 'cuartel-a-distancia', number: '03', name: 'Cuartel a distancia', description: 'Reúne edificios orientados a unidades que atacan desde una posición alejada.', optionCount: 4, options: [] },
  { slug: 'torre-defensiva-de-area', number: '04', name: 'Torre defensiva de área', description: 'Agrupa torres destinadas a causar daño a varios enemigos dentro de una zona.', optionCount: 3, options: [] },
  { slug: 'torre-defensiva-de-apoyo', number: '05', name: 'Torre defensiva de apoyo', description: 'Agrupa torres cuyos efectos ayudan a sostener o reforzar la defensa.', optionCount: 2, options: [] },
  { slug: 'torre-defensiva-de-objetivo-unico', number: '06', name: 'Torre defensiva de objetivo único', description: 'Agrupa torres que concentran sus ataques sobre un enemigo cada vez.', optionCount: 4, options: [] },
  { slug: 'muralla', number: '07', name: 'Muralla', description: 'Reúne opciones destinadas a contener el avance enemigo y proteger la defensa.', optionCount: 4, options: [] },
  { slug: 'taller', number: '08', name: 'Taller', description: 'Reúne edificios técnicos con efectos que documentaremos al confirmar cada opción.', optionCount: 3, options: [] },
];
