<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Patronaje

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El patronaje traduce las formas tridimensionales del cuerpo a superficies bidimensionales, de modo que la arquitectura de la prenda quede trazada sobre planos precisos. Este proceso constituye la fase estructural del diseño de moda: a partir de líneas, contornos y ejes de aplome se generan los moldes que, al cortarse y ensamblarse, recuperan el volumen original con exactitud. Un buen patronaje no solo garantiza ajuste y comodidad, sino que también optimiza el consumo de material, facilita el escalado de tallas y sienta las bases para cualquier transformación creativa posterior.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        .titulo-sexto
          h5 Figura 1. 
          | Plano en 3D
        .bg2.p-4
          img.img-a.img-t(src='@/assets/curso/tema1/3.svg' alt='Representación geométrica de un volumen cúbico y su relación con un sistema de coordenadas tridimensional. Se establecen los ejes X, Y y Z como referencia para ubicar dimensiones, posición y orientación en el espacio.')
      .col-lg-6
        .titulo-sexto
          h5 Figura 2. 
          | Plano en 2D
        .bg2.p-4
          img.img-a.img-t.mb-lg-1.mt-lg-1(src='@/assets/curso/tema1/4.svg' alt='Desarrollo plano de un volumen cúbico compuesto por seis caras unidas. La estructura organiza las superficies para permitir el plegado y la conformación de un cuerpo tridimensional.')
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg3.p-4.p-lg-5
          p.mb-0 El patronaje cumple una función estratégica en todo el ciclo de diseño, desarrollo y producción de indumentaria. Su utilidad va mucho más allá de “pasar el cuerpo a planos técnicos”; constituye el puente operativo entre la idea creativa y la prenda terminada. A continuación, se detallan sus principales aportes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 1. 
          | Aportes del patronaje en la elaboración de prendas
        .tabla-a.tab1
          table
            thead
              tr
                th Dimensión
                th Aporte clave del patronaje
                th Beneficio directo
            tbody
              tr.bgr
                td Ajuste y ergonomía
                td Traduce las proporciones anatómicas a superficies planas con puntos de control (busto, cintura, cadera, sisa, escote).
                td Garantiza comodidad, libertad de movimiento y correcta caída de la prenda.
              tr
                td Eficiencia productiva
                td Define márgenes de costura, piquetes y secuencias de ensamblaje.
                td Reduce errores en corte y confección, ahorra tiempo y desperdicio de tela.
              tr.bgr
                td Escalado de tallas
                td Sirve como "matriz" para gradar medidas hacia tallas superiores o inferiores de forma coherente.
                td Permite atender diversos rangos de clientela sin rebajar desde cero cada tamaño.
              tr
                td Creatividad controlada
                td Actúa como lienzo técnico para manipular pinzas, volúmenes y líneas de diseño (traslados, añadidos, recortes).
                td Facilita experimentación con siluetas manteniendo la estructura base estable.
              tr.bgr
                td Comunicación interdisciplinar
                td Estandariza símbolos y convenciones (piquetes, líneas de aplome, códigos de pieza).
                td Mejora el diálogo entre diseñadores, patronistas, cortadores y costureras, minimizando malentendidos.
              tr
                td Viabilidad económica
                td Optimiza el consumo de material mediante tizadas eficientes y verificación previa de ajuste #[em (toile)].
                td Disminuye costos de materia prima y retrabajos.
              tr.bgr
                td Sustentabilidad
                td Proporciona bases para sistemas de corte 3D y #[em nesting] avanzado, reduciendo excedentes.
                td Contribuye a prácticas de producción responsable y a la generación de menos residuos.
              tr
                td Digitalización y archivo
                td Facilita la migración a #[em software] CAD y la creación de bibliotecas de patrones reutilizables.
                td Acelera futuras colecciones y respalda la trazabilidad documental.
        figcaption Fuente: SENA, (2025)

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 Conceptos de prepatronaje
              p.mb-0 Consulta las generalidades del patronaje y sus diferentes métodos.
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Pasos_para_definir_el_patronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/6.png' alt='AvatarTop')

    p.mb-5(data-aos="fade-right") El patronaje se clasifica en dos grandes modalidades según su finalidad productiva: patronaje industrial y patronaje sobre medidas. La primera se orienta a la fabricación en serie bajo parámetros estandarizados, mientras que la segunda responde a procesos personalizados que atienden características específicas de una persona usuaria.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 A. Patronaje industrial
    
    .bg4.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6.mb-lg-0.mb-4
          img.img-a.img-t(src="@/assets/curso/tema1/7.png")
        .col-lg-6
          p.mb-0 El patronaje industrial parte del estudio antropométrico de la figura corporal en su tridimensionalidad y traduce esta información a representaciones bidimensionales, ya sea mediante trazado manual sobre papel o a través de #[em software] especializado como Audaces 360, Optitex, Gerber o Lectra, herramientas ampliamente empleadas en la industria de la confección. Este procedimiento técnico permite estructurar moldes base, realizar transformaciones y optimizar tiempos de desarrollo.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.pe-lg-0
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg5.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.h-100.mar
                TarjetaAudio.color-acento-botones.mb-3(
                texto="Su fundamento se sustenta en tablas de medidas previamente establecidas según regiones, mercados y tipologías de prenda, lo que facilita la estandarización y el proceso de escalado."
                :audio="require('@/assets/actividad/audio/podcast_cf2_patronaje_industrial_femenino.mp3')"
            )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-lg-1.mb-4 A partir de una talla base se aplican incrementos proporcionales definidos, permitiendo generar un rango de tallas sin necesidad de rediseñar cada molde, lo cual favorece eficiencia, uniformidad y control en la producción en serie.
                p.mb-0 Dentro de esta modalidad se contemplan procesos como:
      .col-lg-4.ps-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/tema1/8.svg")
    
    p.mb-4 Su fundamento se sustenta en tablas de medidas previamente establecidas según regiones, mercados y tipologías de prenda, lo que facilita la estandarización y el proceso de escalado.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        img.d-none.d-lg-block(src='@/assets/curso/tema1/26.svg', alt='Texto que describa la imagen')
        .tarjeta.bg5.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4.h-100.mar
            TarjetaAudio.color-acento-botones.mb-0(
            texto="Pódcast. Patronaje Industrial"
            :audio="require('@/assets/actividad/audio/podcast_cf2_patronaje_industrial_femenino.mp3')"
            )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    p.mb-lg-1.mb-4 A partir de una talla base se aplican incrementos proporcionales definidos, permitiendo generar un rango de tallas sin necesidad de rediseñar cada molde, lo cual favorece eficiencia, uniformidad y control en la producción en serie.
    p.mb-4 Dentro de esta modalidad se contemplan procesos como:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/tema1/9.png")
      .col-lg-8
        .bg6.p-4.p-lg-5
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Elaboración de básicos delanteros y posteriores.
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Desarrollo de patrones para prendas superiores e inferiores.
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Construcción de moldes para componentes estructurales (cuellos, escotes, mangas, puños, ribetes, bolsillos, charreteras, entre otros).
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Aplicación en diferentes líneas de mercado (infantil, femenina y masculina).
            li.d-flex.mb-2
              i.fas.fa-lightbulb
              p.mb-0.my-2 Proyección de colecciones articuladas con universos de vestuario y ocasiones de uso.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Desarrollo de propuestas alineadas con gamas comerciales y segmentos del sistema moda.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 B. Patronaje sobre medidas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img.my-1(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
          .col-lg-10.col-md-10
            p.mb-0 El patronaje sobre medidas se orienta a la elaboración de prendas ajustadas a las características específicas de una persona usuaria, priorizando adaptación ergonómica, precisión estructural y funcionalidad. Esta modalidad se emplea en contextos donde se requiere exclusividad y ajuste personalizado, particularmente en marcas o talleres dirigidos a públicos con perfiles de consumo definidos y expectativas elevadas en términos de detalle y acabado.
        p.mb-4 El procedimiento inicia con la toma rigurosa de medidas antropométricas individuales, seguida de la construcción de una prenda de prueba, comúnmente elaborada en un textil provisional, cuya finalidad es verificar proporciones, caídas y ajustes. Posteriormente, se realiza una sesión de prueba para identificar posibles correcciones antes de confeccionar la versión definitiva, garantizando coherencia entre estructura corporal y solución constructiva.
        p.mb-0 En esta modalidad se aplican principalmente dos técnicas:
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/11.png' alt='AvatarTop')

    TabsC.color-primario.mb-5(data-aos="fade-left")
      .bg7.p-lg-5.p-4(titulo="Levantamiento en plano")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            .row.justify-content-center.align-items-center.my-lg-0.my-4
              .col-lg-6.col-md-8.col-10.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/12.png', alt='')
              .col-lg-6
                p.mb-0 Procedimiento semejante al utilizado en el patronaje industrial, aunque permite mayor flexibilidad en la aplicación de fórmulas, ajustes personalizados y modificaciones específicas según la morfología de la persona usuaria.
      .bg7.p-lg-5.p-4(titulo="Patronaje sobre maniquí (<em>moulage</em>)")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            .row.justify-content-center.align-items-center.my-lg-0.my-4
              .col-lg-6.col-md-8.col-10.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/13.png', alt='')
              .col-lg-6
                p.mb-0 Técnica que consiste en construir directamente la prenda o su base estructural sobre un maniquí, facilitando el desarrollo de drapeados, plisados y configuraciones complejas. Este método se utiliza con frecuencia en prendas de ceremonia, vestidos de fiesta, sastrería, diseño infantil y propuestas con alto nivel de detalle estructural.
    
    .bg8.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6.mb-lg-0.mb-4
          .titulo-sexto
            h5 Figura 3. 
            | Patronaje sobre maniquí
          img(src='@/assets/curso/tema1/15.png' alt='Proceso de construcción de una prenda directamente sobre un maniquí. Se trabaja con una pieza de tela fijada con alfileres, marcando líneas guía que siguen las proporciones del cuerpo.')
        .col-lg-6
          img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/14.svg', alt='')
          p.mb-4 Dentro de los procesos productivos del sector confección, las fichas técnicas constituyen instrumentos fundamentales para la organización y estandarización del trabajo. Estos documentos estructuran de manera detallada las especificaciones del producto, los materiales requeridos, la secuencia de ensamblaje y los parámetros técnicos necesarios para su elaboración.
          p.mb-0 Su implementación facilita la comunicación entre las diferentes áreas involucradas en la producción, favoreciendo coherencia en los procedimientos, control de calidad y uniformidad en los resultados. De este modo, la ficha técnica se consolida como un soporte operativo indispensable para garantizar precisión y consistencia en la fabricación de prendas.
          
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 2. 
          | Comparativo entre patronaje industrial y sobre medidas
        .tabla-a.tab2
          table
            thead
              tr
                th Dimensión
                th Patronaje industrial
                th Patronaje sobre medidas
            tbody
              tr.bgr
                td #[b Finalidad]
                td Producción masiva / tiradas grandes.
                td Exclusividad individual / piezas únicas.
              tr
                td #[b Base de medidas]
                td Tablas estandarizadas (S, M, L, XL, XXL).
                td 25 – 40 medidas específicas por cliente.
              tr.bgr
                td #[b Holguras]
                td Definidas para rangos de percentil.
                td Ajustadas caso por caso según postura.
              tr
                td #[b Gradación]
                td Sí, sistemática y computarizada.
                td No (cada prenda es un único tamaño).
              tr.bgr
                td #[b N.º de pruebas]
                td 0 – 1 (#[em size set] piloto).
                td 2 – 4 muestras por encargo.
              tr
                td #[b Tecnología]
                td CAD/CAM, #[em plotters, nesting] automático.
                td Herramientas manuales + escáner 3D opcional.
              tr.bgr
                td #[b Tiempo de desarrollo]
                td Días o semanas.
                td Semanas o meses.
              tr
                td #[b Costo unitario]
                td Bajo – medio (economía de escala).
                td Alto (mano de obra especializada).
              tr.bgr
                td #[b Control de calidad]
                td Muestreos por lote.
                td Revisión total pieza por pieza.
              tr
                td #[b Aplicaciones típicas]
                td #[em Fast fashion], uniformes, marcas de #[em retail].
                td Alta costura, sastrería #[em bespoke], vestuario escénico.
        figcaption Fuente. SENA, (2025)


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Procedimiento y entorno

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5
        img(src='@/assets/curso/tema1/16.svg', alt='')
      .col-lg-7
        .bg9.p-lg-5.p-4
          p.mb-0.mb-lg-2.mt-lg-3.mx-lg-4 Para garantizar el desarrollo de una prenda que responda a los requerimientos específicos de la persona usuaria, resulta necesario seguir una secuencia organizada de procedimientos que permitan asegurar coherencia técnica, precisión estructural y calidad en el resultado final. Esta secuencia facilita la correcta interpretación de las medidas corporales, la construcción adecuada de los patrones y la ejecución eficiente del proceso de confección. En este sentido, se establece el siguiente procedimiento:

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 Pasos que se deben seguir para realizar el procedimiento de patronaje
              p.mb-0 Se invita a explorar el PDF – Pasos para definir el patronaje.
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Pasos_para_definir_el_patronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    

    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Metodología y manual de patronaje SENA

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
            img.my-1(src='@/assets/curso/tema1/17.svg' alt='AvatarTop')
          .col-lg-10.col-md-10
            p.mb-0 El Manual de patronaje del SENA constituye un documento técnico elaborado por especialistas en el área de confección, con el propósito de establecer una metodología estructurada para el desarrollo de patrones a partir del análisis antropométrico y funcional del cuerpo humano. Este recurso orienta la comprensión de los principios técnicos del patronaje, facilitando la interpretación de medidas corporales y su traducción en estructuras bidimensionales aplicables a la elaboración de prendas.
        p.mb-0 Su contenido se organiza de manera progresiva, permitiendo fortalecer las competencias relacionadas con la construcción de básicos, el desarrollo de moldes y la aplicación de procesos de escalado, conforme a los estándares formativos y productivos del sector confección. Para ampliar la información, se recomienda consultar el manual en su versión oficial, disponible a través de los medios institucionales del SENA.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/18.png' alt='AvatarTop')

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-3 Manual de patronaje del SENA
              p.mb-0 Se invita a explorar el PDF – “Manual de patronaje”.
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/2_Manual_de_patronaje_del_SENA.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Metodología y convenciones

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img.d-none.d-lg-block(src='@/assets/curso/tema1/25.png', alt='')
        .bg10.p-4
          p.mb-4.mt-lg-4 Dentro del proceso de patronaje, el uso de convenciones gráficas constituye un elemento fundamental para garantizar la correcta interpretación técnica de los patrones y su adecuada aplicación durante las fases de corte y confección. Estos símbolos permiten identificar de manera precisa las características estructurales de cada pieza, facilitando la comunicación entre las diferentes etapas del proceso productivo sin depender exclusivamente de descripciones textuales.
          p.mb-lg-2.mb-0 Al realizar el despiece de un patrón, cada componente debe incorporar información técnica clara que permita su reconocimiento y correcta utilización. Entre los elementos indispensables se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/20.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-start.mb-4.mb-lg-0
          .col-lg-5.col-md-6
            ol.lista-ol--cuadro.lista-ol--separador
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 Nombre de la pieza.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 Referencia o identificación del modelo.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 Talla correspondiente.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span d
                p.mb-0 Nombre de la persona responsable del patronaje.
          .col-lg-7.col-md-6
            ol.lista-ol--cuadro.lista-ol--separador
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span e
                p.mb-0 Simbología de corte.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span f
                p.mb-0 Número de veces que debe cortarse la pieza.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span g
                p.mb-0 Piquetes de confección para facilitar el ensamble.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span h
                p.mb-0 Líneas de aplome que indican la dirección estructural del patrón.
        .bg11.p-4.mb-4 
          p.mb-0 De manera complementaria, pueden incorporarse indicaciones adicionales relacionadas con procesos específicos, como ubicación de estampación, variaciones de material, cambios cromáticos, acabados especiales o localización de componentes funcionales como bolsillos o aberturas.
        p.mb-0 En cuanto al procedimiento de construcción, el trazo del patrón se fundamenta en el uso de formas geométricas básicas, tales como líneas horizontales, verticales y perpendiculares, así como figuras como rectángulos, ángulos rectos, diagonales y curvas. Estas referencias permiten establecer estructuras precisas que responden a las dimensiones corporales previamente definidas. Toda construcción parte de un rectángulo base, el cual integra el contorno principal y el largo total de la prenda.
  
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-3.mb-lg-0.mb-4
        .h-100.bg12.p-4
          p.mb-0.mx-lg-3 El uso de escalas facilita la representación proporcional de los patrones, permitiendo trabajar tanto en tamaño real como en formatos reducidos para fines pedagógicos o de análisis técnico. Las escalas más empleadas corresponden a:
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg13.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-12.mb-4.my-3
              img.img-a.img-t(src='@/assets/curso/tema1/21.png' alt='AvatarTop')
          h4.text-center.mb-4 Escala 1:1 
          p.mb-0.text-center (Representación en tamaño real).
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg13.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-12.mb-4.my-3
              img.img-a.img-t(src='@/assets/curso/tema1/22.png' alt='AvatarTop')
          h4.text-center.mb-4  Escala 1:2 
          p.mb-0.text-center (Representación a la mitad del tamaño real).
      .col-lg-3.col-md-6
        .h-100.bg14.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-12.mb-4.my-3
              img.img-a.img-t(src='@/assets/curso/tema1/23.png' alt='AvatarTop')
          h4.text-center.mb-4 Escala 1:4 
          p.mb-0.text-center (Representación a la cuarta parte del tamaño real).
    
    p.mb-5(data-aos="fade-left") El trazo a escala constituye una herramienta útil para comprender la estructura del patrón antes de su desarrollo definitivo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 Para la correcta ejecución del trazo, se recomienda el uso de herramientas técnicas que garanticen precisión y control en la construcción del patrón, entre las cuales se incluyen:
        .bg1.p-4.p-lg-5.mb-4
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Regla técnica o regla mágica con cuadrícula y ángulos de referencia.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Curvígrafo para el desarrollo de curvas anatómicas.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Cinta métrica graduada en centímetros.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Instrumentos de marcación como lápiz técnico o portaminas.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Cinta adhesiva para montaje de piezas.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Tijeras destinadas exclusivamente al corte de papel.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Papel técnico que facilite claridad y precisión en el trazo.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Juego de reglas de patronaje, incluyendo escuadra, curvas y sisómetro.
        p.mb-0 Estas convenciones y herramientas permiten estructurar el patrón con precisión técnica, favoreciendo la correcta interpretación, reproducción y aplicación en los procesos de confección.
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/tema1/24.png")

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-2(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 Se invita a explorar el PDF  
              p.mb-0 Manual de patronaje  básico e interpretación de diseños. 
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/3_Manual_de_patronaje_basico_e_interpretacion_de_diseños.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
