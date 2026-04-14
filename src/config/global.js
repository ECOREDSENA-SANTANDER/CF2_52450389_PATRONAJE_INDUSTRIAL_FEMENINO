export default {
  global: {
    Name: 'Patronaje de prendas femeninas',
    Description:
      'El componente formativo patronaje de prendas femeninas aborda los fundamentos técnicos necesarios para la construcción de patrones base, a partir del análisis de medidas corporales. Su desarrollo incluye el trazo del corpiño, manga, pantalón y falda, así como el estudio de pinzas, sistemas de ajuste y piezas complementarias, permitiendo establecer estructuras que facilitan la elaboración de prendas con coherencia técnica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimiento y entorno',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Metodología y manual de patronaje SENA',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodología y convenciones',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patrones base de prendas femeninas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trazo de corpiño básico femenina',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Traslado de pinzas de corpiño',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis y trazo de sistema de ajuste (pinzas y cortes)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazo básico de manga',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Piezas complementarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Patronaje de pantalón y falda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comprobación del patrón base',
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
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_52450389_DU.pdf',
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
  /*
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  */
  glosario: [
    {
      termino: 'Aplome',
      significado:
        'línea de referencia que indica la orientación estructural correcta del patrón respecto al cuerpo o al hilo del material.',
    },
    {
      termino: 'Base',
      significado:
        'molde fundamental que representa la estructura corporal y sirve como punto de partida para el desarrollo de diferentes diseños.',
    },
    {
      termino: 'Cabeza de manga',
      significado:
        'sección superior de la manga que se integra con la sisa y permite la correcta adaptación al patrón del cuerpo.',
    },
    {
      termino: 'Contorno',
      significado:
        'medida tomada alrededor de una zona específica del cuerpo, utilizada como referencia en la construcción del patrón.',
    },
    {
      termino: 'Corte',
      significado:
        'línea estructural incorporada en el patrón que permite dividir, ajustar o generar variaciones en el diseño de la prenda.',
    },
    {
      termino: 'Desahogo',
      significado:
        'aumento técnico aplicado al patrón para permitir movilidad, comodidad y funcionalidad en la prenda.',
    },
    {
      termino: 'Escalado',
      significado:
        'proceso mediante el cual se adaptan los patrones base a diferentes tallas manteniendo proporciones estructurales.',
    },
    {
      termino: 'Molde',
      significado:
        'representación bidimensional de una parte de la prenda que sirve como guía para el corte del material.',
    },
    {
      termino: 'Patrón',
      significado:
        'estructura técnica desarrollada a partir de medidas corporales que permite construir una prenda.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso técnico que consiste en la elaboración de moldes a partir del análisis de la estructura corporal.',
    },
    {
      termino: 'Pinza',
      significado:
        'recurso técnico que permite controlar y distribuir el volumen del patrón para ajustarlo a la forma del cuerpo.',
    },
    {
      termino: 'Sisa',
      significado:
        'abertura del patrón destinada a la unión de la manga con el cuerpo de la prenda.',
    },
    {
      termino: 'Sistema de ajuste',
      significado:
        'conjunto de recursos técnicos, como pinzas y cortes, que permiten adaptar el patrón a la configuración corporal.',
    },
    {
      termino: 'Trazo',
      significado:
        'procedimiento técnico mediante el cual se construyen las líneas y estructuras que conforman el patrón.',
    },
    {
      termino: 'Transformación',
      significado:
        'modificación aplicada a un patrón base para desarrollar nuevas formas o diseños sin alterar su estructura principal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Metropolitano de Educación Técnica (IMETY). (2021). Manual de patronaje básico. Instituto Metropolitano de Educación Técnica.',
      link: '',
    },
    {
      referencia:
        'Instituto Textil. (2018). Manual de patronaje básico e interpretación de diseños. Ministerio de Educación de Chile.',
      link: '',
    },
    {
      referencia:
        'Sánchez, M. (2016). Método de patronaje femenino: manual de patronaje y corte. Promopress.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2013). Manual de patronaje básico: femenino, masculino e infantil. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Vélez Sánchez, M. (1995). Patronaje y escalado línea femenina. Servicio Nacional de Aprendizaje (SENA).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
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
}
