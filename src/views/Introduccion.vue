<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img.my-1(src='@/assets/curso/intro/1.svg' alt='AvatarTop')
          .col-lg-10.col-md-10
            p.mb-0 El componente formativo “Patronaje de prendas femeninas” se orienta al desarrollo de competencias técnicas relacionadas con la construcción de patrones base, a partir del análisis estructural del cuerpo y la aplicación de metodologías propias del sector confección. Este proceso permite comprender la relación entre las medidas corporales y su traducción en estructuras bidimensionales, constituyendo el fundamento para la elaboración de moldes que faciliten la producción de prendas con ajuste, funcionalidad y coherencia técnica.
        p.mb-0 En este contexto, se abordan los principios del patronaje, su procedimiento y entorno de aplicación, así como la metodología establecida en el Manual de patronaje del SENA, incorporando las convenciones técnicas necesarias para la correcta interpretación y desarrollo de los patrones. Posteriormente, se estudia la construcción de patrones base de prendas femeninas, incluyendo el trazo del corpiño básico, el traslado de pinzas y el análisis de los sistemas de ajuste, elementos que permiten adaptar el molde a la configuración corporal.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/2.png' alt='AvatarTop')

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/intro/3.svg' alt='AvatarTop')
      .col-lg-10.ps-lg-0
        .bg1.p-3
          p.mb-lg-1.mt-lg-2.mx-lg-2 De igual manera, se desarrolla el trazo básico de manga y el análisis de piezas complementarias, componentes que contribuyen a la estructura funcional y constructiva de la prenda. El componente también integra el patronaje de pantalón y falda femenina, considerando los principios técnicos que permiten su correcta construcción y adaptación. Finalmente, se incorpora el proceso de comprobación del patrón base, etapa que permite verificar la correspondencia entre las medidas, la estructura del molde y los requerimientos técnicos, garantizando precisión en el desarrollo del patronaje y su aplicación en los procesos de confección.


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
