<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Patronaje de pantalón y falda

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.t4.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El patronaje de pantalón y falda femenina corresponde al proceso técnico mediante el cual se construyen los moldes base que representan la estructura corporal desde la cintura hasta la región inferior del cuerpo. Este procedimiento se fundamenta en el análisis de medidas antropométricas como cintura, cadera, tiro y largo, las cuales permiten establecer proporciones precisas y garantizar una adecuada adaptación de la prenda. 
    
    p.mb-5(data-aos="fade-left") En el caso del pantalón, el patrón integra elementos estructurales como líneas de tiro, entrepierna, rodilla y bota, que facilitan la movilidad y el ajuste funcional. Por su parte, el patrón de falda se organiza a partir de la relación entre cintura y cadera, incorporando pinzas como recurso técnico para distribuir el volumen y lograr correspondencia con la configuración corporal. A continuación, se relacionan los trazos de las bases de pantalón y falda con sus respectivos pasos. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-4.mb-2
          .titulo-sexto
            h5 Figura 4. 
            | Trazo del pantalón femenino paso 1
          img.img-a.img-t(src='@/assets/curso/tema4/2.svg' alt='Esquema técnico del patrón base de pantalón paso 1, que identifica el rectángulo inicial, la línea de cadera, la línea de quiebre y las referencias de medida para la construcción estructural del molde.')
        figcaption Fuente: SENA, (2021)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 3.
          | Paso 2 del trazo del pantalón femenino
        .tabla-a.tab3
          table
            thead
              tr
                th.text-center Paso
                th Acción
                th Procedimiento técnico
                th Referencia
            tbody
              tr.bgr
                td.text-center #[b 1]
                td #[b Construir el rectángulo base]
                td Trazar un rectángulo cuya base corresponde al valor de cadera dividido en cuatro, adicionando el valor de costura (1 cm). La altura corresponde al largo total del pantalón.
                td Cadera ÷ 4 + 1 cm.
              tr
                td.text-center #[b 2]
                td #[b Trazar la línea de cadera]
                td Desde el borde superior del rectángulo, medir hacia abajo la altura de cadera y trazar una línea horizontal de referencia.
                td Altura de cadera.
              tr.bgr
                td.text-center #[b 3]
                td #[b Definir la línea de quiebre]
                td Ubicar el punto medio en la base inferior del rectángulo y proyectar una línea vertical hasta el borde superior. Esta línea corresponde al eje estructural de la pierna.
                td Punto medio inferior.
              tr
                td.text-center #[b 4]
                td #[b Verificar proporciones]
                td Comprobar que el rectángulo y las líneas trazadas correspondan a las medidas establecidas, garantizando precisión para el desarrollo del patrón.
                td Medidas base del patrón.
        figcaption Fuente. SENA, (2025)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-4.mb-2
          .titulo-sexto
            h5 Figura 5. 
            | Paso 2 del trazo del pantalón femenino
          img.img-a.img-t(src='@/assets/curso/tema4/3.svg' alt='Esquema técnico del patrón base de pantalón femenino paso 2 que identifica la línea de profundidad de cadera, la línea de profundidad de tiro, la línea de rodilla y las curvas estructurales para la construcción del molde.')
        figcaption Fuente: SENA, (2021)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 4.
          | Paso 2 del trazo del pantalón femenino
        .tabla-a.tab3
          table
            thead
              tr
                th.text-center Paso
                th Acción
                th Procedimiento técnico
                th Referencia
            tbody
              tr.bgr
                td.text-center #[b 1]
                td #[b Reducir ancho superior]
                td Desplazar 1 cm hacia el interior desde cada extremo superior del rectángulo base para ajustar el ancho de cintura.
                td 1 cm en cada lado.
              tr
                td.text-center #[b 2]
                td #[b Trazar línea de profundidad de cadera]
                td Medir desde la línea superior hacia abajo el valor de profundidad de cadera y trazar una línea horizontal de referencia.
                td Medida de profundidad de cadera.
              tr.bgr
                td.text-center #[b 3]
                td #[b Trazar línea de profundidad de tiro]
                td Medir desde la línea de profundidad de cadera hacia abajo el valor correspondiente al tiro y trazar la línea horizontal.
                td Medida de profundidad de tiro.
              tr
                td.text-center #[b 4]
                td #[b Trazar línea de rodilla]
                td Medir desde la línea de tiro hacia abajo la altura de rodilla y trazar una línea horizontal estructural.
                td Medida de altura de rodilla.
              tr.bgr
                td.text-center #[b 5]
                td #[b Definir línea lateral]
                td Unir el punto superior reducido con el ancho correspondiente en la línea de rodilla mediante una línea continua.
                td Unión cintura – rodilla.
              tr
                td.text-center #[b 6]
                td #[b Construir curva de tiro]
                td Desarrollar la curva interna desde la línea de tiro hasta la línea de rodilla, manteniendo continuidad estructural.
                td Curva interna del tiro.
              tr.bgr
                td.text-center #[b 7]
                td #[b Verificar alineación]
                td Confirmar que las líneas horizontales y curvas se mantengan alineadas respecto a la línea de quiebre.
                td Línea de quiebre como eje.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-4.mb-2
          .titulo-sexto
            h5 Figura 6. 
            | Paso 3 del trazo del pantalón femenino
          img.img-a.img-t(src='@/assets/curso/tema4/4.svg' alt='Esquema técnico del patrón de pantalón femenino paso 3 que identifica la distribución de medidas en cintura, cadera, tiro, rodilla y bota, así como la ubicación de pinzas y ajustes laterales para la construcción del molde.')
        figcaption Fuente: SENA, (2021)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema4/5.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 5.
          | Paso 3 del trazo del pantalón femenino
        .tabla-a.tab4
          table
            thead
              tr
                th.text-center Paso
                th Acción
                th Procedimiento técnico
                th Referencia
            tbody
              tr.bgr
                td.text-center #[b 1]
                td #[b Definir ancho de bota]
                td Desde la línea de quiebre, medir hacia cada lado el valor correspondiente al ancho de bota dividido en dos y trazar los puntos de referencia.
                td Ancho de bota ÷ 2 cm.
              tr
                td.text-center #[b 2]
                td #[b Trazar línea de bota]
                td Unir los puntos definidos del ancho de bota mediante una línea horizontal que establezca el límite inferior del patrón.
                td Línea inferior del pantalón.
              tr.bgr
                td.text-center #[b 3]
                td #[b Definir ancho de rodilla]
                td Desde la línea de quiebre, medir hacia cada lado el valor correspondiente al ancho de rodilla dividido en dos y marcar los puntos.
                td Ancho de rodilla ÷ 2.
              tr
                td.text-center #[b 4]
                td #[b Trazar líneas laterales externas]
                td Unir el ancho de cadera con el ancho de rodilla y posteriormente con el ancho de bota mediante líneas continuas, definiendo el contorno lateral.
                td Unión cadera – rodilla – bota.
              tr.bgr
                td.text-center #[b 5]
                td #[b Trazar líneas internas de entrepierna]
                td Unir el punto de tiro con el ancho de rodilla y posteriormente con el ancho de bota mediante una línea continua.
                td Unión tiro – rodilla – bota.
              tr
                td.text-center #[b 6]
                td #[b Extender el tiro delantero]
                td Desde la línea central de quiebre, medir hacia el exterior el valor correspondiente a cadera ÷ 4 más costura, y proyectar el punto de extensión del tiro.
                td Cadera ÷ 4 + costura.
              tr.bgr
                td.text-center #[b 7]
                td #[b Construir curva del tiro delantero]
                td Trazar la curva del tiro delantero uniendo el punto de extensión con la línea de profundidad de tiro, manteniendo continuidad estructural.
                td Curva del tiro delantero.
              tr
                td.text-center #[b 8]
                td #[b Verificar continuidad estructural]
                td Confirmar que las líneas laterales e internas mantengan coherencia con la línea de quiebre y las medidas establecidas.
                td Línea de quiebre como eje.

    h4.mb-4(data-aos="fade-left") Video – Trazo de prendas inferiores – pantalón
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/oBsuCQmODcc?si=SnsGpmQBA2dlFHEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. TRAZO DE PRENDAS INFERIORES - PANTALÓN

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Trazo de la falda
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4
        .bg21.p-4.p-lg-5.mb-lg-0.mb-4
          img.img-t.img-a.mb-lg-2.mb-4(src='@/assets/curso/tema4/7.svg' alt='AvatarTop')
          p.mb-0 El trazo de la falda es el proceso técnico mediante el cual se construye el patrón base a partir de medidas corporales como cintura, cadera y largo deseado.
      .col-lg-8
        .bg2.p-4
          .titulo-sexto
            h5 Figura 7. 
            | Trazo del posterior de la falda
          img.img-a.img-t.mb-4(src='@/assets/curso/tema4/6.svg' alt='Esquema técnico del patrón de pantalón femenino paso 3 que identifica la distribución de medidas en cintura, cadera, tiro, rodilla y bota, así como la ubicación de pinzas y ajustes laterales para la construcción del molde.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 6.
          | Pasos del trazo de la falda delantera
        .tabla-a.tab4
          table
            thead
              tr
                th.text-center Paso
                th Acción
                th Procedimiento técnico
                th Referencia
            tbody
              tr.bgr
                td.text-center #[b 1]
                td #[b Trazar el rectángulo base]
                td Construir un rectángulo cuyo ancho corresponde a cadera ÷ 4 y cuya altura corresponde al largo total de falda.
                td Cadera ÷ 4 y largo de falda.
              tr
                td.text-center #[b 2]
                td #[b Trazar la línea de cadera]
                td Desde la línea superior, medir hacia abajo la altura de cadera y trazar una línea horizontal de referencia.
                td Altura de cadera.
              tr.bgr
                td.text-center #[b 3]
                td #[b Definir el ancho de cintura]
                td Sobre la línea superior, marcar el valor de cintura ÷ 4 adicionando el valor correspondiente a la pinza delantera.
                td Cintura ÷ 4 + pinza.
              tr
                td.text-center #[b 4]
                td #[b Aplicar ajuste en costado]
                td Reducir 1 cm hacia el interior en el extremo lateral superior para establecer la inclinación de la cintura.
                td 1 cm en costado.
              tr.bgr
                td.text-center #[b 5]
                td #[b Ubicar la pinza delantera]
                td Determinar el punto de ubicación de la pinza sobre la línea de cintura, generalmente centrado o ligeramente desplazado hacia el costado.
                td Ubicación estructural.
              tr
                td.text-center #[b 6]
                td #[b Definir el ancho de pinza]
                td Marcar el ancho total de la pinza, distribuyendo el valor hacia ambos lados desde el punto central.
                td Ancho de pinza según tabla.
              tr.bgr
                td.text-center #[b 7]
                td #[b Definir el largo de pinza]
                td Medir desde la línea de cintura hacia abajo el largo correspondiente a la pinza delantera.
                td Largo de pinza delantera.
              tr
                td.text-center #[b 8]
                td #[b Trazar la pinza]
                td Unir los extremos del ancho de pinza con el punto inferior, formando el triángulo estructural de ajuste.
                td Construcción de pinza.
              tr.bgr
                td.text-center #[b 9]
                td #[b Trazar el costado]
                td Unir el punto de cintura con la línea de cadera y continuar hasta el largo total de falda, manteniendo continuidad estructural.
                td Línea lateral.
              tr
                td.text-center #[b 10]
                td #[b Verificar proporciones]
                td Confirmar la correspondencia entre cintura, cadera y largo, garantizando precisión estructural del patrón delantero.
                td Relación cintura – cadera – largo.        

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-4.mb-2
          .titulo-sexto
            h5 Figura 8. 
            | Trazo del delantero de la falda
          img.img-a.img-t(src='@/assets/curso/tema4/8.svg' alt='Esquema técnico del patrón delantero de falda que identifica la distribución de medidas en cintura y cadera, la ubicación de la pinza delantera y el largo total como referencias para la construcción del molde.')
        figcaption Fuente: SENA, (2025)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema4/9.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 7.
          | Trazo del posterior de la falda
        .tabla-a.tab4
          table
            thead
              tr
                th.text-center Paso
                th Acción
                th Procedimiento técnico
                th Referencia
            tbody
              tr.bgr
                td.text-center #[b 1]
                td #[b Trazar el rectángulo base]
                td Construir un rectángulo cuyo ancho corresponde a cadera ÷ 4 y cuya altura corresponde al largo total de falda.
                td Cadera ÷ 4 y largo de falda.
              tr
                td.text-center #[b 2]
                td #[b Trazar la línea de cadera]
                td Medir desde la línea superior hacia abajo la altura de cadera y trazar una línea horizontal estructural.
                td Altura de cadera.
              tr.bgr
                td.text-center #[b 3]
                td #[b Definir el ancho de cintura]
                td Marcar sobre la línea superior el valor correspondiente a cintura ÷ 4 adicionando el valor de la pinza.
                td Cintura ÷ 4 + pinza.
              tr
                td.text-center #[b 4]
                td #[b Aplicar ajuste lateral]
                td Reducir 1 cm hacia el interior en el costado superior para generar la inclinación de la cintura.
                td 1 cm en costado.
              tr.bgr
                td.text-center #[b 5]
                td #[b Ubicar la pinza posterior]
                td Determinar el punto de ubicación de la pinza sobre la línea de cintura según la proporción estructural.
                td Ubicación de pinza.
              tr
                td.text-center #[b 6]
                td #[b Definir ancho de pinza]
                td Marcar el ancho total de la pinza distribuyendo el valor hacia ambos lados del punto central.
                td 3 cm.
              tr.bgr
                td.text-center #[b 7]
                td #[b Definir largo de pinza]
                td Medir desde la línea de cintura hacia abajo el largo de la pinza posterior.
                td 9.5 cm.
              tr
                td.text-center #[b 8]
                td #[b Trazar la pinza]
                td Unir los extremos del ancho con el punto inferior para formar el triángulo estructural.
                td Construcción de pinza.
              tr.bgr
                td.text-center #[b 9]
                td #[b Trazar el costado de la falda]
                td Unir la cintura ajustada con la línea de cadera y continuar hasta el largo total de falda.
                td Línea lateral.
              tr
                td.text-center #[b 10]
                td #[b Verificar estructura del patrón]
                td Confirmar la correspondencia entre cintura, cadera y largo de falda.
                td Relación estructural.
        
    h4.mb-4(data-aos="fade-right") Se invita a explorar los siguientes recursos: 

    .row.justify-content.align-items-start.mb-4(data-aos="fade-left")
      .col-lg-5
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-lightbulb
            p.mb-0.my-2 Video - Trazo de falda y modificación de básicos de falda.
      .col-lg-4
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-lightbulb
            p.mb-0.my-2 Video - Trazo de faldas rotondas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/xtyPQh3vtuc?si=XY6dabXCAnAocOeJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. TRAZO DE FALDA Y MODIFICACIÓN DE BÁSICOS DE FALDA

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/NxZQL369p9Q?si=MSh1VMMfOiztXjAW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. TRAZO DE FALDAS ROTONDAS


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
