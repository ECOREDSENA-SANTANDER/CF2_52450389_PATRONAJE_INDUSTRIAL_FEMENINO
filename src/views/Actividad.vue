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
        '<b> Objetivo:</b> verificar la comprensión de los conceptos y procedimientos técnicos del patronaje industrial femenino, incluyendo la construcción de patrones base, el sistema de ajuste por pinzas, el trazo de pantalón y falda, y el proceso de comprobación del patrón.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función estratégica del patronaje dentro del ciclo de diseño, desarrollo y producción de indumentaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir la paleta de colores y los materiales que componen la colección de cada temporada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer los costos de producción y los márgenes de rentabilidad por referencia de prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actuar como puente operativo entre la idea creativa y la prenda terminada, traduciendo formas tridimensionales a planos técnicos precisos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar el tipo de maquinaria y la secuencia de ensamblaje requerida para la confección en serie.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del patronaje como proceso técnico estructural que articula el diseño con la producción, optimizando ajuste, escalado y uso del material.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la base sobre la que se fundamenta el patronaje industrial para generar un rango de tallas sin redibujar cada molde?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tablas de medidas estandarizadas y aplicación de incrementos proporcionales a partir de una talla base.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La toma de medidas individuales de cada cliente con posterior construcción de un prototipo personalizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El análisis morfológico de la persona usuaria y la elaboración de un molde único ajustado a su postura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La digitalización directa de la prenda mediante escáner tridimensional y software de gradación automática.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los fundamentos del patronaje industrial y la comprensión del escalado como proceso de gradación proporcional a partir de tablas estandarizadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la técnica de patronaje sobre medidas que consiste en construir directamente la base estructural de la prenda sobre un maniquí?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Patronaje industrial, fundamentado en tablas estandarizadas y software CAD/CAM para la producción en serie.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Levantamiento en plano, procedimiento semejante al patronaje industrial con mayor flexibilidad en la aplicación de fórmulas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Escalado bibásico, método de gradación que utiliza dos patrones de referencia para calcular las tallas intermedias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Patronaje sobre maniquí (<em>moulage</em>), técnica que facilita el desarrollo de drapeados, plisados y configuraciones complejas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de las técnicas del patronaje sobre medidas y la identificación precisa del <em>moulage</em> como método de construcción directa sobre maniquí.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función de las líneas de aplome en un patrón técnico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Indicar los márgenes de costura que deben añadirse al contorno de cada pieza antes del corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Señalar la orientación estructural correcta del patrón respecto al cuerpo o al hilo del material textil.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Marcar los puntos de coincidencia entre piezas para facilitar su ensamble durante la confección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir la ubicación de las pinzas y los sistemas de ajuste dentro de la estructura del patrón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del sistema de convenciones técnicas del patronaje y la función específica de las líneas de aplome como referencia estructural del molde.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 5,
          texto: 'En el trazo técnico de patrones, ¿qué indica una escala 1:2?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el patrón se representa a la mitad del tamaño real, útil para análisis técnico o fines pedagógicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que el patrón se representa en tamaño real, listo para su uso directo en el proceso de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el patrón se representa a la cuarta parte del tamaño real para facilitar el archivo documental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el patrón se ha escalado al doble de su tamaño original para facilitar la verificación de medidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del sistema de escalas aplicado en el trazo técnico de patrones y la interpretación correcta de la representación proporcional reducida.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 6,
          texto:
            '¿Por qué el patrón base no se utiliza directamente en el proceso de corte sobre tela?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque su construcción se realiza únicamente en software CAD y no puede transferirse al papel de patronaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque es exclusivo para el desarrollo de prendas de alta costura y no aplica en la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque requiere la incorporación de desahogos, amplitudes, líneas de diseño o transformaciones específicas antes de su uso en producción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque su escala de representación es reducida y debe ampliarse al tamaño real antes de proceder al corte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del concepto de patrón base como estructura inicial que debe someterse a transformaciones técnicas antes de convertirse en molde de producción.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 7,
          texto:
            '¿De qué estructura anatómica se origina la pinza de busto en el corpiño básico femenino?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'De la diferencia entre el contorno de cintura y el contorno de cadera en la zona inferior del torso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'De la variación entre el ancho de espalda y el ancho de pecho registrados en el cuadro de tallas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Del excedente de material generado al trasladar el contorno de hombro hacia la línea de sisa del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'De la diferencia estructural entre los patrones delantero y posterior al integrarlos por la línea de cintura, derivada de la configuración anatómica del busto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del origen técnico de la pinza de busto y su función como recurso de ajuste que responde a la configuración anatómica tridimensional del cuerpo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el eje de referencia que se utiliza en el procedimiento de traslado de pinzas del corpiño?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La línea de cintura, que actúa como eje horizontal de equilibrio entre el patrón delantero y el posterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La línea de hombro, que establece el punto más alto de la estructura del corpiño básico femenino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La línea de sisa, desde la cual se redistribuye el volumen hacia las distintas zonas del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El punto de busto, considerado eje estructural o punto de rotación desde el cual se puede reubicar la pinza.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del procedimiento de traslado de pinzas y la identificación precisa del punto de busto como eje de rotación que mantiene el nivel de ajuste en cualquier posición.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la regla técnica fundamental que debe respetarse en la construcción de cualquier pinza dentro de un patrón?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La pinza debe finalizar antes de alcanzar el punto de busto, conservando una distancia de seguridad para mantener la distribución correcta del volumen.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La pinza debe extenderse hasta el borde del patrón para garantizar que el ajuste alcance la zona de costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La pinza debe ubicarse obligatoriamente en el costado del corpiño, ya que es la posición que genera menor deformación estructural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La pinza debe tener siempre un ancho fijo de 3 cm, independientemente de la talla o el tipo de prenda que se esté desarrollando.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de la regla técnica esencial del trazado de pinzas y su justificación estructural para evitar deformaciones en el volumen del patrón.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función estructural de la cabeza de manga en el patrón básico?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el largo total de la manga desde el hombro hasta el puño según las medidas del cuadro de tallas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar el ancho de manga en la zona del bíceps para garantizar comodidad al doblar el brazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integrar la parte superior de la manga con la sisa del cuerpo, incidiendo directamente en la movilidad, el ajuste y la estabilidad de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Establecer el número de piquetes necesarios para el ensamble correcto de la manga con el corpiño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la función técnica de la cabeza de manga y su incidencia sobre la movilidad, el ajuste y la estabilidad en la unión con el cuerpo de la prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },

        {
          id: 11,
          texto:
            '¿A partir de qué referencia se construyen técnicamente las piezas complementarias como cuellos, bolsillos y tapas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A partir de las tablas estandarizadas de medidas de talla, sin relación directa con el patrón base de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'A partir del patrón base, considerando proporciones, ubicación y relación con las demás partes que conforman la prenda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'A partir del modelo de maniquí regulable correspondiente a la talla de producción establecida para la referencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'A partir de la ficha técnica de despiece, sin necesidad de construir una base previa para cada componente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la función técnica de las piezas complementarias y su construcción articulada con el patrón base para garantizar coherencia estructural y funcional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 12,
          texto:
            'En el trazo del pantalón femenino, ¿qué valor determina el ancho del rectángulo base?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El valor del contorno de cintura dividido en cuatro, adicionando el valor de la pinza delantera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El valor de la altura de cadera medida desde la línea de cintura hacia abajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor del contorno de cintura más el desahogo establecido en la tabla de holguras de la talla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El valor del contorno de cadera dividido en cuatro, adicionando el valor de costura de 1 cm.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del procedimiento técnico de construcción del rectángulo base del pantalón y la fórmula de cálculo del ancho a partir del contorno de cadera.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la función de la línea de quiebre en el trazo del pantalón femenino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actuar como eje estructural de la pierna, proyectada desde el punto medio de la base inferior del rectángulo hacia el borde superior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir la profundidad del tiro a partir de la línea de cadera para garantizar la comodidad en uso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer el ancho de la bota midiendo hacia ambos lados desde el extremo inferior del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Indicar la posición de la pinza de cintura en el patrón delantero del pantalón femenino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del rol de la línea de quiebre como eje estructural del patrón del pantalón, base para la distribución de anchos y líneas internas de entrepierna.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 14,
          texto:
            'En el trazo del patrón delantero de la falda, ¿cómo se determina el ancho de cintura sobre la línea superior del rectángulo base?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se toma directamente el valor completo del contorno de cintura sin divisiones ni adiciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se calcula la mitad del contorno de cintura adicionando el valor de la pinza posterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se divide el contorno de cadera entre cuatro y se adiciona la distancia correspondiente a la altura de cadera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se calcula cintura dividido en cuatro, adicionando el valor correspondiente a la pinza delantera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la fórmula técnica para determinar el ancho de cintura en el patrón delantero de la falda y la función de la pinza en la distribución del volumen.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 15,
          texto:
            'Según el procedimiento técnico del componente formativo, ¿cuál es el ancho estándar de la pinza posterior de la falda?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '1 cm, correspondiente al ajuste lateral aplicado en el extremo superior del rectángulo base.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '3 cm, distribuidos hacia ambos lados del punto central de ubicación de la pinza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                '9,5 cm, equivalente al largo de pinza establecido desde la línea de cintura hacia abajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '2 cm, equivalente al margen de costura estándar aplicado en la línea de cintura de la falda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de los parámetros técnicos del trazo de la falda posterior y la identificación correcta del ancho estándar de la pinza según el procedimiento establecido.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la holgura inicial establecida para el contorno de busto en el patrón base talla 8 durante la comprobación del corpiño?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '+4 cm, que permite comodidad, libertad de movimiento y correcta caída de la prenda en la zona del busto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                '+2 cm, equivalente a la holgura aplicada al contorno de cintura en la misma talla de referencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '+6 cm, para garantizar holgura suficiente en prendas de tejido plano sin elasticidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '+1 cm, correspondiente al margen mínimo de comodidad para prendas ajustadas de alta confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los parámetros técnicos de la comprobación del corpiño base talla 8 y la holgura estándar aplicada al contorno de busto.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la función del <em>stay stitch</em> en el proceso de ensamblaje del prototipo del corpiño básico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cerrar la costura bajo manga mediante puntadas de refuerzo que aumentan la resistencia estructural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Distribuir el embebido en la corona de la manga mediante dos hileras paralelas de puntada larga.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Casar los piquetes de la manga con los del cuerpo para garantizar la correcta integración de ambas piezas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estabilizar el borde de la sisa o del escote mediante una línea de puntada recta que evita su deformación durante la manipulación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la función técnica del <em>stay stitch</em> como costura de estabilizado que preserva la forma de los bordes curvados o al sesgo antes del ensamblaje definitivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 18,
          texto:
            'Cuando el prototipo presenta arrugas horizontales que tiran hacia el centro del busto, ¿cuál es la causa principal identificada en el patrón?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exceso de holgura en la línea de cintura delantera que genera tensión hacia la zona del busto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Falta de holgura en el contorno de busto o pinza de busto insuficiente para el volumen corporal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sisa demasiado alta con curva cerrada que restringe el movimiento del brazo en la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Escote delantero demasiado recto con longitud de hombro excesiva que genera tensión superficial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación del análisis de errores frecuentes en la comprobación del corpiño y la identificación de la causa técnica de las arrugas horizontales en la zona del busto.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el margen de costura estándar establecido para las sisas y hombros en la comprobación del patrón base talla 8?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '1 cm, equivalente al margen aplicado en costados y escote de la misma prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '2 cm, correspondiente al margen establecido para la línea de cintura del corpiño básico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '1,5 cm, margen estándar definido específicamente para las sisas y hombros en la comprobación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                '3 cm, reservado para el bajo de manga como referencia de mayor amplitud en el dobladillo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los márgenes de costura diferenciados por zona del patrón base y la identificación del valor estándar aplicado a sisas y hombros en la comprobación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de los siguientes enunciados corresponde a uno de los criterios de aprobación final del patrón base comprobado?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Todas las piezas del patrón deben presentar un embebido visible y uniforme en la corona de la manga mayor a 2 cm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El largo de pinza posterior debe coincidir exactamente con la altura de cadera registrada en la tabla de medidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las costuras verticales y horizontales deben estar equilibradas, con todas las mediciones dentro de ± 0,5 cm de la tabla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El escote delantero debe presentar una apertura (<em>gape</em>) de 0,5 cm como referencia de holgura mínima aceptable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los criterios técnicos de aprobación final del patrón base y la tolerancia dimensional establecida para garantizar precisión y coherencia estructural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la estructura corporal femenina y sistema de medidas.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre patronaje de prendas femeninas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
