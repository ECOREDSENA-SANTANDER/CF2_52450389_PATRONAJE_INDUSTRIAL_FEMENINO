<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje de prendas femeninas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los fundamentos técnicos del patronaje y su aplicación en la construcción e interpretación de patrones base de prendas femeninas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del patronaje en la confección de prendas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar la prenda antes del corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Traducir el diseño en un proceso de costura directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Traducir la forma tridimensional del cuerpo a una estructura bidimensional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el tiempo de costura exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje y su función en la traducción técnica de la estructura corporal a superficies bidimensionales para la construcción de prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito principal de un patrón base en el patronaje femenino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir como prenda final para confección directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar la estructura corporal y servir como base para desarrollar diseños.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el proceso de confección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de tomar medidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al reconocer el patrón base como estructura técnica que permite el desarrollo y transformación de prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 3,
          texto:
            '¿Qué recurso técnico permite adaptar el patrón plano a la forma tridimensional del cuerpo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Escala.', esCorrecta: false },
            { id: 'b', texto: 'Desahogo.', esCorrecta: false },
            { id: 'c', texto: 'Línea de aplome.', esCorrecta: false },
            { id: 'd', texto: 'Pinza.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al identificar la pinza como recurso técnico para la adaptación del patrón a la configuración corporal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el elemento estructural que permite unir la manga con el cuerpo de la prenda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sisa.', esCorrecta: true },
            { id: 'b', texto: 'Escote.', esCorrecta: false },
            { id: 'c', texto: 'Costado.', esCorrecta: false },
            { id: 'd', texto: 'Puño.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje y la estructura técnica de la prenda al reconocer la sisa como punto de integración funcional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la finalidad principal del traslado de pinzas en el patronaje?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el volumen del patrón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar el tamaño de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Redistribuir el volumen sin alterar el ajuste.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el largo de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al comprender el traslado de pinzas como procedimiento técnico de redistribución del volumen.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 6,
          texto:
            '¿Qué medida es fundamental para construir el patrón base del pantalón femenino?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contorno de cadera.', esCorrecta: true },
            { id: 'b', texto: 'Largo de manga.', esCorrecta: false },
            { id: 'c', texto: 'Contorno de cuello.', esCorrecta: false },
            { id: 'd', texto: 'Altura de hombro.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al identificar la cadera como medida estructural para el desarrollo de prendas inferiores.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función de la ficha técnica en el proceso de confección?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Decorar el patrón.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Registrar información técnica del producto y su proceso de elaboración.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Sustituir el patrón base.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de medidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al reconocer la ficha técnica como herramienta de organización y control del proceso productivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito de la comprobación del patrón base?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eliminar el uso de moldes.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reducir el tamaño de la prenda.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Decorar el prototipo.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Confirmar que el patrón reproduce correctamente las medidas y el ajuste.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al comprender la comprobación como proceso de verificación técnica del ajuste y la estructura.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función de la cabeza de manga en el patronaje?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unir el patrón del pantalón con la blusa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir la correcta adaptación y movilidad entre manga y cuerpo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir el largo total de la prenda.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Decorar el diseño.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al reconocer la cabeza de manga como elemento estructural de adaptación y funcionalidad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
        {
          id: 10,
          texto: '¿Qué representa el patrón en el proceso de confección?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un diseño decorativo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Una herramienta de costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una representación bidimensional de la prenda basada en medidas corporales.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Una prenda terminada.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos del patronaje al identificar el patrón como representación técnica esencial para la elaboración de prendas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el Patronaje de prendas femeninas.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre patronaje de prendas femeninas y su relación en la arquitectura de la prenda.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
