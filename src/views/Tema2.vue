<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Patrones base de prendas femeninas


    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La construcción del patronaje en prendas femeninas se fundamenta en la elaboración de patrones base, desarrollados a partir de medidas anatómicas y criterios técnicos de proporcionalidad y escalado. Estas bases constituyen la estructura inicial que representa la configuración corporal, permitiendo establecer moldes tanto para prendas superiores como inferiores. Su función es servir como soporte técnico para el desarrollo de diseños, por lo que no se utilizan directamente en el proceso de corte sobre tela, dado que requieren la incorporación de elementos como desahogos, amplitudes, líneas de diseño o transformaciones específicas.

    
    p.mb-0 La precisión en la elaboración de estos patrones resulta determinante, ya que permite garantizar estabilidad estructural, coherencia dimensional y adecuada adaptación de la prenda durante su uso. Cada patrón base se construye en función de la tipología de prenda y del segmento corporal que se desea representar, constituyendo el punto de partida para el desarrollo técnico posterior.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Trazo de corpiño básico femenina
      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img.my-1(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
          .col-lg-10.col-md-10
            p.mb-0 El control del volumen en las prendas se logra mediante la aplicación de recursos técnicos como las pinzas y otros sistemas de ajuste, los cuales permiten adaptar la estructura plana del patrón a la forma tridimensional del cuerpo. Estos elementos facilitan la distribución del excedente de material, contribuyendo a una mejor correspondencia entre la prenda y la anatomía corporal.
        p.mb-0 La metodología empleada para el desarrollo del corpiño básico sigue una secuencia estructurada que facilita la comprensión del proceso, independientemente de la línea o aplicación posterior. Este procedimiento permite consolidar las bases necesarias para la transformación y desarrollo de diferentes tipologías de prendas.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/3.png' alt='AvatarTop')


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Trazo de la base superior: descripción y medidas


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5.brt
            p.mb-0 La base superior corresponde al patrón que representa la estructura corporal desde la región del cuello hasta la línea de cintura, incorporando las proporciones anatómicas necesarias para su correcta construcción. Este molde constituye el fundamento técnico para el desarrollo de prendas como blusas, camisetas, chaquetas, chalecos, corpiños y vestidos.
    .d-none
      img(src='@/assets/curso/tema2/t2.png' alt='')


    p.mb-5 La adecuada elaboración de esta base permite establecer una estructura equilibrada, facilitando su posterior transformación según los requerimientos de diseño, funcionalidad y uso. Su correcta construcción favorece el ajuste, la estabilidad y la coherencia estructural de la prenda final dentro del proceso de patronaje industrial femenino.


    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-2 Se invita a explorar el PDF 
              h4.mb-0 Pasos para el trazo de la base superior
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/3_Manual_de_patronaje_basico_e_interpretacion_de_diseños.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    p.mb-5 A continuación, podrá consultar el trazo del patrón básico superior femenino. 


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-2 Se invita a explorar el PDF - Manual de patronaje básico e interpretación de diseños
              p.mb-0 Patrón base superior femenino. Ir a la página 20 a 25.
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/3_Manual_de_patronaje_basico_e_interpretacion_de_diseños.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Traslado de pinzas de corpiño

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Al integrar los patrones base delantero y posterior a través de la línea de cintura, se reconoce una diferencia estructural derivada de la configuración anatómica del cuerpo. Esta variación da origen a la pinza de busto, elemento técnico que permite distribuir el volumen necesario para lograr la adaptación de la prenda en la región superior del torso. La pinza constituye un recurso fundamental en el patronaje, ya que posibilita ajustar la superficie plana del patrón a la forma tridimensional del cuerpo.
        .bg9.p-4.mb-4 
          p.mb-0 El traslado de pinzas corresponde a un procedimiento técnico mediante el cual el volumen concentrado en una pinza puede redistribuirse hacia diferentes zonas del patrón, manteniendo el mismo nivel de ajuste. Este proceso se realiza tomando como referencia el punto de busto, considerado eje estructural o punto de rotación, desde el cual se puede reubicar la pinza hacia el costado, la sisa, el escote, el hombro o la cintura, según las necesidades del diseño.
        p.mb-0 Esta técnica permite desarrollar diversas configuraciones formales, facilitando la incorporación de recursos constructivos como cortes, pliegues, frunces o líneas estructurales que responden a criterios funcionales o estéticos. En algunos casos, la pinza se integra de manera visible como parte del diseño, mientras que en otros se incorpora dentro de líneas de corte, permaneciendo como un elemento estructural interno.
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema2/5.png' alt='')

    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.png' alt='')
      .col-lg-4
        .bg15.p-lg-5.p-4.mb-lg-0.mb-4
          p.mb-0.mb-lg-2.mt-lg-3 Toda pinza debe finalizar antes de alcanzar el punto de busto, conservando una distancia de seguridad que permita mantener la correcta distribución del volumen sin generar deformaciones en la estructura del patrón.
      .col-lg-3
        img.img-t.mb-4.d-none.d-lg-block(src="@/assets/curso/tema2/7.svg")
        p.mb-0 A continuación, se invita a seguir los pasos para los traslados de pinza en el básico superior femenino. 


    h4.mb-4(data-aos="fade-right") Video - Traslados de pinza correctiva de talles.


    p.mb-4(data-aos="fade-left") Se invita a explorar el video explicativo sobre cómo se hacen traslados de pinza correctiva de talles.
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sg_UbHStwtk?si=lag0jcUb07OZaIkZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. TRASLADOS DE PINZA CORRECTIVA DE TALLES


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Análisis y trazo de sistema de ajuste (pinzas y cortes)
    

    .bg16.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema2/8.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/9.svg', alt='')
            p.mb-0(data-aos="fade-left") En el desarrollo técnico del patronaje, las pinzas constituyen un recurso estructural esencial que permite adaptar la superficie plana del patrón a la configuración tridimensional del cuerpo. Su aplicación cumple una doble función: por una parte, facilita el ajuste de la prenda, y por otra, permite controlar y distribuir los volúmenes de manera precisa, garantizando coherencia entre la estructura corporal y la forma final del molde.

    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-5.pe-lg-0.mb-lg-0.mb-4
        .bg17.h-100.p-4
          p.mb-0.mx-lg-2.my-lg-1 En el patronaje femenino, el estudio de las pinzas se fundamenta en el análisis de los contornos corporales principales, especialmente busto, cintura y cadera. Estas zonas concentran las variaciones anatómicas más significativas y establecen puntos de referencia indispensables para la construcción de patrones base. 
          p.mb-0.mx-lg-2 A partir de estos contornos, se define la organización estructural del molde y se determina la distribución del volumen necesario para lograr un adecuado nivel de ajuste.
      .col-lg-3.ps-lg-0.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/tema2/10.svg', alt='')
      .col-lg-4.ps-lg-0
        .bg18.h-100.p-4
          p.mb-0.mx-lg-2.my-lg-3 Desde una perspectiva técnica, la pinza responde a un principio matemático derivado de la diferencia entre medidas corporales en distintas zonas, lo que genera un excedente que debe redistribuirse mediante su incorporación al patrón. Este procedimiento permite que el molde conserve estabilidad dimensional y correspondencia con la morfología corporal.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg19.p-4.p-lg-5
          p.mb-0 Independientemente de la tipología de prenda, el nivel de desahogo o la interpretación del diseño, la aplicación de pinzas se relaciona directamente con los contornos estructurales del cuerpo, ya que estos constituyen la base sobre la cual se construye el patrón. Su correcta ubicación y trazado permiten lograr un ajuste funcional, facilitando el desarrollo posterior de cortes, líneas de diseño y transformaciones propias del proceso de patronaje industrial femenino. 


    h4.mb-4(data-aos="fade-right") Video - Análisis y trazo de sistema de ajuste pinzas y cortes


    p.mb-4(data-aos="fade-left") Video explicativo sobre cómo se hace el trazo de sistemas de ajuste de pinzas y cortes.
    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/rLYn-8vPNlU?si=Ec6BaUT9VQJ0S1gb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. ANÁLISIS Y TRAZO DE SISTEMA DE AJUSTE PINZAS Y CORTES

    
    p.mb-5 A continuación, se explica la interpretación de blusa femenina. 


    h4.mb-4(data-aos="fade-right") Video - Trazo de blusa femenina


    p.mb-4(data-aos="fade-left") Pasos para la interpretación de blusa femenina con cuello camisero.
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/euVdaqaTQlY?si=VCGUaB-TViUj8BLu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. TRAZO DE BLUSA FEMENINA


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Trazo básico de manga

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Medidas necesarias para trazar la cabeza de manga


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg2.p-lg-5.p-4
          ul.lista-ul.mb-lg-4.mt-lg-4
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Recorrido de sisa delantera (obtenido del plano).
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Recorrido de sisa posterior (obtenido del plano).
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Tipo de cabeza de manga (según la prenda: deportiva, casual, formal).
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Largo total de la manga.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/11.png', alt='')
  
    
    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 PDF- Aspectos clave en el trazo de la manga
              p.mb-0 Conoce cómo la anatomía y la ergonomía influyen en el trazo del patrón de la manga para mujer
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/5_Aspectos_clave_para_el_trazo_de_la_manga.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg20.p-lg-5.p-4
          p.mb-0 En el trazo de manga, la cabeza de manga constituye un elemento estructural determinante en la configuración y adaptación de la prenda. Esta sección corresponde a la zona superior que se integra con la sisa del cuerpo, permitiendo la correcta unión entre la manga y el patrón base. Su construcción técnica influye directamente en la movilidad, el ajuste y la estabilidad de la prenda durante su uso.


    h4.mb-4(data-aos="fade-right") Video – Trazo de manga y cabezas de manga


    p.mb-4(data-aos="fade-left") Paso a paso para conocer el trazo de manga y cabezas de manga. 
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/flZWxWKNq5s?si=uCUD1XFhMdBb-UsL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video. Trazo de manga y cabezas de manga


</template>

<script>
export default {
  name: 'Tema2',
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
