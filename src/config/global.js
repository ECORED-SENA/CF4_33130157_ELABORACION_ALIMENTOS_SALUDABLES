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
        titulo: 'Carotenoides',
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
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Esteroles vegetales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Compuestos fenólicos o polifenoles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Los ácidos grasos Omega 3, 6 y 9',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'La actividad física como factor clave para la salud',
        desarrolloContenidos: true,
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Componentes bioactivos',
      referencia:
        'Top Doctors LATAM (2023). Beneficios de los Compuestos Bioactivos. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Nvoy0L9BgC0',
    },
    {
      tema: 'Carotenoides',
      referencia:
        'Instituto de Investigaciones Agrícolas | UCR (2019). ¿Qué son los carotenoides y porqué debemos incluirlos en nuestra dieta?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hCOf1DFg5rM',
    },
    {
      tema: 'Esteroles vegetales',
      referencia:
        'xNutricion Clinica. (2023). FITOESTEROLES para BAJAR el COLESTEROL | Esteroles vegetales contra colesterol | Nutrición clínica. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lUJWgiV9pZw',
    },
    {
      tema: 'Los ácidos grasos Omega 3, 6 y 9',
      referencia:
        'Dr. Carlos Jaramillo (2021).11 Grandes Beneficios del OMEGA 3 | Dr. Carlos Jaramillo. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qaP3ALloONE',
    },
    {
      tema: 'La actividad física como factor clave para la salud',
      referencia:
        'Aprendemos Juntos 2030. (2020). Los beneficios del ejercicio para tu cerebro. Wendy Suzuki, neurocientífica. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PXvz8zyuob0&t=9s',
    },
  ],
  glosario: [
    {
      termino: 'Actividad física',
      significado:
        'movimiento corporal que requiere gasto energético y aporta beneficios a la salud física y mental.',
    },
    {
      termino: 'Antioxidantes',
      significado:
        'sustancias que protegen las células del daño causado por los radicales libres.',
    },
    {
      termino: 'Carotenoides',
      significado:
        'pigmentos naturales presentes en plantas, responsables de los colores amarillo, naranja y rojo.',
    },
    {
      termino: 'Catequinas',
      significado:
        'polifenoles presentes en el té verde que poseen propiedades antioxidantes y anticancerígenas.',
    },
    {
      termino: 'Fitoesteroles',
      significado:
        'compuestos vegetales que ayudan a reducir los niveles de colesterol en el cuerpo.',
    },
    {
      termino: 'LDL',
      significado:
        'lipoproteína de baja densidad, conocida como el "colesterol malo".',
    },
    {
      termino: 'Omega-3',
      significado:
        'ácido graso esencial que beneficia la salud cardiovascular y cerebral.',
    },
    {
      termino: 'Omega-6',
      significado:
        'ácido graso poliinsaturado necesario para la función celular, pero su exceso puede ser perjudicial.',
    },
    {
      termino: 'Omega-9',
      significado:
        'ácido graso monoinsaturado que ayuda a reducir el colesterol malo y mejorar el colesterol bueno.',
    },
    {
      termino: 'Polifenoles',
      significado:
        'antioxidantes presentes en alimentos que protegen las células del daño causado por radicales libres.',
    },
  ],
  referencias: [
    {
      referencia:
        'Begolla, O. y Granada, F. (2008). Bioactivos. Madrid, España: Subdirección General de Alimentos.',
      link: '',
    },
    {
      referencia:
        'Boatella, J., Codoy, R. y López, A. (2010). Química y Bioquímica de los Alimentos. Barcelona, España. Ediciones de la Universidad de Barcelona.',
      link: '',
    },
    {
      referencia:
        'Gil, A. y Ruiz, D. (2010). Tratado de nutrición. Madrid: Médica Panamericana.',
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
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
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
