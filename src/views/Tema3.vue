<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Piezas complementarias


    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Las piezas complementarias, como cuellos, bolsillos, tapas y otros componentes estructurales, cumplen una función relevante tanto en la configuración formal como en el desempeño funcional de la prenda. Estos elementos contribuyen a definir la estructura, facilitar el uso y responder a requerimientos específicos de diseño y funcionalidad.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img.my-1(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')
          .col-lg-10.col-md-10
            p.mb-0 Su construcción técnica se desarrolla a partir del patrón base, considerando proporciones, ubicación y relación con las demás partes que conforman la prenda. La forma, dimensión y posición de estas piezas varían según la intención proyectual, permitiendo integrar soluciones que responden a criterios estructurales, ergonómicos y de uso.
        p.mb-0 De este modo, las piezas complementarias no solo cumplen una función operativa, sino que también participan en la configuración integral del diseño, fortaleciendo la coherencia entre la estructura técnica del patrón y la propuesta constructiva final.
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema3/3.png' alt='AvatarTop')


    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0 PDF- Generalidades del patronaje en piezas complementarias
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/6_Generalidades_de_piezas_complementarias_en_el_patronaje_femenino.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    h4.mb-4(data-aos="fade-right") Video – Trazo de escotes y tipo de cuellos


    p.mb-4(data-aos="fade-left") Paso a paso para el trazo de escotes y tipos de cuellos. 
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Fd19HkRegQQ?si=VMOz2Djvx_90hAT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. TRAZO DE ESCOTES Y TIPOS DE CUELLOS


</template>

<script>
export default {
  name: 'Tema3',
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
