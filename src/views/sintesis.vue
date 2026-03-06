<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta un esquema que resume los aspectos fundamentales del componente formativo Patronaje de Prendas Femeninas. Este integra saberes relacionados con los fundamentos del patronaje, los tipos de líneas, los procedimientos técnicos y las metodologías aplicadas, con el propósito de comprender la construcción estructural de los patrones base. Asimismo, se desarrollan procesos como el trazo del corpiño básico femenino, el traslado de pinzas, el análisis de sistemas de ajuste, y el trazo de manga, blusa, pantalón y falda, elementos esenciales para la interpretación y desarrollo de prendas.


    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema del patronaje de prendas femeninas que organiza los procesos desde los fundamentos del patronaje, los tipos de líneas y metodologías, hasta el desarrollo de patrones base como corpiño, manga, blusa, pantalón y falda. El esquema también integra el análisis de sistemas de ajuste, la interpretación de prendas inferiores y la comprobación del patrón mediante materiales, ensamblaje y verificación técnica.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
