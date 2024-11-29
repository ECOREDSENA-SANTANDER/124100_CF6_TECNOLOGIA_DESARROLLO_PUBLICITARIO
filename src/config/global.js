export default {
  global: {
    componenteFormativo: 'Plan de <i>Endomarketing</i>',
    descripcionCurso:
      '“El <i>marketing</i>, llevado al interior de la empresa, <i>marketing</i> de adentro hacia más adentro de la organización”, de esta forma se podría definir el <i>endomarketing</i>; sin embargo, en el presente componente, se ahondará desde el punto de vista de la comunicación interna, tratando de enfocarse en las relaciones que pueden existir entre los diferentes actores de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Endomarketing</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La comunicación interna',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es la comunicación interna?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Los públicos internos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mensajes en la comunicación interna',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Rutas de la información interna',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Errores y obstáculos de la comunicación interna',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de comunicación interna',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: ' Medios para la comunicación interna',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF6_124100_DU',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial.',
      link: '',
    },
    {
      referencia:
        'Cuenca, J. y Verazzi, L. (2018). Guía Fundamental de la Comunicación Interna. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
      link: '',
    },
    {
      referencia:
        'Gan, F. y Triginé, J. (2012). Comunicación Interna. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Téllez, J. C. (2017). ¿Qué es eso llamado “Endomarketing”? Revista Semana.',
      link:
        'https://www.dinero.com/opinion/columnistas/articulo/que-es-eso-llamado-endomarketing-por-juan-sanclemente/243285',
    },
    {
      referencia:
        'Timoteo, A. J. (2013). Manejo de la Comunicación Organizacional. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Afiche (poster)',
      significado:
        'Es un tipo de aviso que comunica acerca de un evento futuro y que por lo general tiene un tamaño considerable y un concepto creativo para que sea apreciado por el público objetivo.',
    },
    {
      termino: '<i>Banner</i>',
      significado:
        'Elemento con una imagen o animaciones que se ubica en sitios web, en la mayoría de los casos es con publicidad.',
    },
    {
      termino: 'Comunicación integral',
      significado:
        'Abarca todo el proceso de comunicación externa (clientes, proveedores, instituciones, etc.) e interna (trabajadores y colaboradores).',
    },
    {
      termino: 'Comunicado de prensa',
      significado:
        'Informe que reúne los datos fundamentales sobre un hecho noticiable de actualidad y que se envía a los medios de comunicación con el fin de que estos difundan la información.',
    },
    {
      termino: 'Folleto (<i>brochure</i>)',
      significado:
        'Elemento impreso de una o pocas hojas que sirve como instrumento divulgativo o publicitario.',
    },
    {
      termino: 'Relaciones públicas',
      significado:
        'Técnica de comunicación que evalúa las actitudes de los diferentes públicos, identifica las políticas y los procedimientos de una organización y ejecuta programas de comunicación dirigidos a públicos tanto internos como externos.',
    },
    {
      termino: 'Revista',
      significado:
        'Publicación ilustrada que se entrega en forma periódica, sobre uno o varios temas y con un público definido.',
    },
    {
      termino: 'Sitio <i>web</i>',
      significado:
        'Agrupación de varias páginas <i>web</i> relacionadas entre sí, a las cuales se ingresa desde un mismo dominio y están ligadas a una misma URL.',
    },
  ],

  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López ',
          cargo: 'Instructor – experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Quindío ',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital ',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Julieth Paola Vital López ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital ',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor pedagógico ',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
          fecha: 'Mayo,2024',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
