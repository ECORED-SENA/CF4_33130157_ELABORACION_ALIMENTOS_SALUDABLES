export default {
  global: {
    componenteFormativo:
      'Aspectos clave de frutas, verduras, y la preparación de alimentos saludables',
    descripcionCurso:
      'Este componente formativo ofrece una guía práctica sobre la manipulación de frutas y hortalizas para la creación de alimentos saludables. Se abordan aspectos como la madurez, compuestos principales, métodos de cocción y conservación. Además, se presentan procedimientos para elaborar encurtidos, salsas, compotas y más, promoviendo una alimentación balanceada y técnicas sostenibles de preparación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Frutas y hortalizas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Frutas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Verduras',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elaboración de productos a base de frutas y verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Escaldado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Encurtidos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Salsa de tomate',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Compotas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Bebida isotónica',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Flan de frutas',
            hash: 't_2_6',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130157_CF04_DU.pdf',
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
  complementario: [
    {
      tema: 'Frutas y hortalizas',
      referencia:
        'Bluecinnatte. (2019). ¿Cuál es la diferencia entre FRUTA, VERDURA, HORTALIZA y CEREAL? [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MNw91ebIw1Q',
    },
    {
      tema: 'Escaldado',
      referencia:
        'CanalCandido. (2012).Diferencia entre blanquear y escaldar. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xtI8OuspHBY',
    },
    {
      tema: 'Encurtidos',
      referencia:
        'MeHueleAQuemao. (2017).Cómo hacer ENCURTIDOS CASEROS en VINAGRE [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndBnAp2jSCk',
    },
    {
      tema: 'Salsa de tomate',
      referencia:
        'Hogarmania. (2018). Cómo hacer SALSA DE TOMATE casera FÁCIL en 10 minutos con tomates naturales 🍅 Bruno Oteiza-Hogarmanía [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4gns1ixgZ48',
    },
    {
      tema: 'Compotas',
      referencia:
        'Compotas (2020).Cómo hacer COMPOTA de PERA. Pear compote [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mIui0P5L_Ec',
    },
    {
      tema: 'Bebida isotónica',
      referencia:
        'xNutricion Deportiva (2022). CÓMO HACER una BEBIDA ISOTÓNICA en CASA | Bebida rehidratante para deportistas | Nutrición deportiva [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XMJ_z84uaOQ',
    },
    {
      tema: 'Flan de frutas',
      referencia:
        'ElReceteo Canal (2014). El Receteo - Cómo hacer un flan de frutas [Receta] [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wO1uuBxrHHQ',
    },
  ],
  glosario: [
    {
      termino: 'Celulosa',
      significado:
        'componente estructural en las plantas, responsable de la textura de frutas y verduras.',
    },
    {
      termino: 'Compota',
      significado:
        'producto obtenido de la concentración de la pulpa de frutas, especialmente para bebés o ancianos.',
    },
    {
      termino: 'Encurtido',
      significado:
        'técnica de conservación que consiste en sumergir alimentos en vinagre o salmuera.',
    },
    {
      termino: 'Escaldado',
      significado:
        'método de cocción rápida en agua caliente para conservar color y nutrientes en los alimentos.',
    },
    {
      termino: 'Fécula',
      significado:
        'carbohidrato extraído de ciertos alimentos, utilizado como espesante en la preparación de alimentos.',
    },
    {
      termino: 'Flavonoides',
      significado:
        'pigmentos solubles en agua que se encuentran en la savia de las células de frutas y verduras.',
    },
    {
      termino: 'Licopeno',
      significado:
        'pigmento rojo presente en tomates y otras frutas, conocido por sus propiedades antioxidantes.',
    },
    {
      termino: 'Madurez',
      significado:
        'estado óptimo de desarrollo de las frutas y verduras para su recolección y consumo.',
    },
    {
      termino: 'Pigmentos',
      significado:
        'compuestos que proporcionan color a frutas y verduras, como la clorofila y los carotenoides.',
    },
    {
      termino: 'Respiración',
      significado:
        'proceso biológico por el cual las frutas y verduras absorben oxígeno y liberan dióxido de carbono.',
    },
  ],
  referencias: [
    {
      referencia:
        'Charley, H. (2006). Tecnología de los alimentos. México: Noriega editores.',
      link: '',
    },
    {
      referencia:
        'Gallo, F. (1997). <em>Manual de fisiología, patología post-cosecha y control de calidad de las frutas y hortalizas.</em> Armenia, Colombia: Editores SENA regional Quindío.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial  - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
