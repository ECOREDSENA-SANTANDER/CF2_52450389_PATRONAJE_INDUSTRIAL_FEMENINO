<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Comprobación del patrón base

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La comprobación del patrón base consiste en verificar que las medidas, líneas y proporciones del molde correspondan correctamente a las dimensiones corporales y a los parámetros técnicos establecidos.
            
    .sub.p-2.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-3.pe-3 Corte, ensamblaje y comprobación del patrón base femenino talla 8 (corpiño + manga básica)

    p.mb-5(data-aos="fade-right") Este proceso tiene por objetivo verificar que el corpiño y la manga básica en talla 8 reproducen fielmente las medidas antropométricas y holguras estándar, garantizando equilibrio, comodidad y viabilidad industrial antes de escalar o diseñar transformaciones. Por lo anterior, se partirá del patrón del corpiño y manga básica.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 A. Materiales, insumos y herramientas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 8.
          | Materiales, insumos y herramientas para el proceso de comprobación 
        .tabla-a.tab5.mb-2
          table
            thead
              tr
                th Área
                th Elementos
                th Observaciones
            tbody
              tr.bgr
                td #[b Patronaje]
                td Patrones en cartulina (corpiño delantero espalda, manga), papel manilo, regla recta 60 cm, curva francesa, curva sastre, escuadra, ruleta dentada, lápiz HB, cinta adhesiva.
                td Rotular piezas con nombre, talla y versión.
              tr
                td #[b Corte]
                td Muselina o popelina 100 % algodón sin elastano (≈1,8m), tijeras de sastre 9–10", alfileres finos o pesos, marcador textil soluble, cinta métrica.
                td Tela rígida facilita la lectura de ajustes.
              tr.bgr
                td #[b Confección]
                td Máquina recta (puntada 2,5 mm –3 mm), hilo poliéster contraste, plancha de vapor, almohadilla sastre, descosedor.
                td Colocar guía magnética en placa para márgenes.
              tr
                td #[b Prueba]
                td Maniquí regulable talla 8 o modelo vivo (busto 88 cm, cintura 68 cm), espejo de cuerpo entero, cámara/móvil.
                td Fotos frontales, laterales y posteriores.
              tr.bgr
                td #[b Documentación]
                td Fichas técnicas impresas, #[em checklist], marcador de datos digitales (PDF).
                td Archivar patrones y evidencias fotográficas.
        figcaption Fuente: SENA, (2025)

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 B. Requerimientos previos necesarios. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Parámetros de las dimensiones del patrón base
        .tabla-a.tabla-peq.tabla1
          table
            thead
              tr
                th Parámetro
                th Valor talla 8
                th Holgura inicial
            tbody
              tr.bgr
                td #[b Busto]
                td 88 cm.
                td + 4 cm.
              tr
                td #[b Cintura]
                td 68 cm.
                td + 2 cm.
              tr.bgr
                td #[b Altura de busto]
                td 19 cm – 20 cm.
                td 0 cm.
              tr
                td #[b Cabeza de manga]
                td 15 cm.
                td N / A
              tr.bgr
                td #[b Puño manga]
                td 24 cm.
                td N / A
        figcaption Fuente: SENA, (2025)
      .col-lg-7.d-none.d-lg-block
        img(src='@/assets/curso/tema5/2.png' alt='AvatarTop')
    
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg22.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/3.svg')
          h3.mb-4.text-center Márgenes de costura estándar
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Costados 1 cm.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Sisas y hombros 1,5 cm.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Escote 1 cm.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Cintura 2 cm.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Bajo manga 3 cm.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg23.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/4.svg')
          h3.mb-4.text-center.text-white Verificación inicial
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-lightbulb.bla
              p.mb-0.my-2.text-white Confrontar la longitud de sisa frente + espalda con la curva de la manga (diferencia ≤ 0,3 cm).
            li.d-flex.mb-0
              i.fas.fa-lightbulb.bla
              p.mb-0.my-2.text-white Confirmar perpendicularidad de “centro frente” y “centro atrás” respecto a la línea de cintura.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 C. Preparación del patrón base
    
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img.h-100(src='@/assets/curso/tema5/5.png')
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg24.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-12.mb-4.my-0
              img.img-a.img-t(src='@/assets/curso/tema5/6.svg' alt='AvatarTop')
          h4.text-center.mb-4 Corpiño
          ul.lista-ul.mb-0 
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 #[b Revisar líneas:] ½ ancho de pecho, línea de sisa, línea de cintura.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Vértice de la pinza de busto a 2 cm del punto de busto.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Cuello y escote limpios, sin quiebres.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg25.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-12.mb-4.my-0
              img.img-a.img-t(src='@/assets/curso/tema5/7.svg' alt='AvatarTop')
          h4.text-center.mb-4 Manga
          ul.lista-ul.mb-0 
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Cabeza: altura 15 cm; piquete central (hombro).
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Piquetes: 1 delantero, 2 espalda; largo de sisa frente / posterior rotulado.
            li.d-flex.mb-0
              i.fas.fa-lightbulb
              p.mb-0.my-2 Puño: 24 cm (12 cm cada lado) y bajo recto.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 D. Proceso de corte
    
    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.mb-3
          h5 Tabla 10.
          | Pasos del proceso de corte del patrón base
        .tabla-a.tabla-peq.tabla2.mb-1
          table
            thead
              tr
                th.text-center Paso
                th Descripción
            tbody
              tr.bgr
                td.text-center #[b 1]
                td Planchar la muselina; colocar al hilo sobre la mesa.
              tr
                td.text-center #[b 2]
                td Alinear Centro Frente, Centro Atrás y la línea de #[em grainline] de la manga paralelos al orillo.
              tr.bgr
                td.text-center #[b 3]
                td Trazar contornos, líneas internas (busto, cintura, sisa) y piquetes (cortes de 2 mm).
              tr
                td.text-center #[b 4]
                td Añadir márgenes estándar.
              tr.bgr
                td.text-center #[b 5]
                td Cortar con tijeras sin levantar la tela. Etiquetar cada pieza (F, B, Manga).
        figcaption Fuente: SENA, (2025)
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop')
    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 E. Construcción del prototipo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Ensamblaje manual (alta costura)")
            .col-lg-12
              ol.lista-ol--cuadro.lista-ol--separador
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span a
                  p.mb-0 Hilvanar pinzas de busto y cintura espalda (puntada larga 6 mm).
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span b
                  p.mb-0 Hilvanar hombros y costados; dejar abierto el centro espalda hasta la cintura.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span c
                  p.mb-0 Cerrar costura bajo - manga.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span d
                  p.mb-0 Hilvanar manga al cuerpo: piquete hombro → piquetes, delantero / espalda → repartir embebido.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span e
                  p.mb-0 Planchar costuras abiertas y pinzas.
          .row.align-items-center(titulo="Ensamblaje en máquina (método industrial)")
            .col-lg-12 
              p.mb-4 Es el proceso de unión de las piezas previamente cortadas siguiendo una secuencia técnica estandarizada que optimiza tiempo y calidad.
              .titulo-sexto.mb-4
                h5 Tabla 11.
                | Orden del proceso de ensamblaje del prototipo
              .tabla-a.tabla-peq.tabla3.mb-1
                table
                  thead
                    tr
                      th.text-center Orden
                      th Operación
                      th Configuración
                  tbody
                    tr.bgr
                      td.text-center #[b 0]
                      td #[em Stay stitch] en sisas (1 cm).
                      td Puntada 2,5 mm.
                    tr.bl
                      td.text-center #[b 1]
                      td Coser pinzas.
                      td Puntada 2,5 mm –3 mm, remates.
                    tr.bgr
                      td.text-center #[b 2]
                      td Hombros (1,5 cm).
                      td Abrir y planchar.
                    tr.bl
                      td.text-center #[b 3]
                      td Costados (1 cm).
                      td Abrir y planchar.
                    tr.bgr
                      td.text-center #[b 4]
                      td Frunce en corona (0,7 cm y 1 cm).
                      td Puntada 4 mm.
                    tr.bl
                      td.text-center #[b 5]
                      td Cerrar bajo manga (1 cm).
                      td Planchar hacia atrás.
                    tr.bgr
                      td.text-center #[b 6]
                      td Montar manga (casar piquetes, distribuir frunce).
                      td Puntada 2,5 mm – 3 mm.
                    tr.bl
                      td.text-center #[b 7]
                      td Planchar cabeza de manga sobre almohadilla.
                      td Vapor medio.
              figcaption Fuente: SENA, (2025)
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/9.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg2.p-4.p-lg-5
          p.mb-0 #[b Nota:] #[em stay-stitch] es un término utilizado en el patronaje que hace referencia a una línea de puntadas que se cose en un margen de costura que comprende una sola capa de tela para evitar que los bordes curvos o al sesgo se estiren.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 F. Prueba y evaluación 

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-5
        .sub.p-2.mb-4(data-aos="fade-left")
          h4.mb-0.text-white.ps-3.pe-3 • Lista de chequeo del corpiño básico 
        .titulo-sexto.mb-4
          h5 Tabla 12.
          | Lista de chequeo de los elementos del corpiño
        .tabla-a.tabla-peq.tabla4
          table
            thead
              tr
                th Ítem
                th Criterio
                th OK / Ajustar
            tbody
              tr.bgr
                td Línea busto horizontal.
                td Paralela al suelo.
                td OK / Ajustar.
              tr
                td Pinza busto.
                td Vértice a 2 cm del busto.
                td OK / Ajustar.
              tr.bgr
                td Holgura busto.
                td + 4 cm ± 0,5 cm.
                td OK / Ajustar.
              tr
                td Holgura cintura.
                td + 2 cm ± 0,5 cm.
                td OK / Ajustar.
              tr.bgr
                td Caída de hombro.
                td 12–15°.
                td OK / Ajustar.
              tr
                td Sisa.
                td Despegue 1 cm sin pellizcar.
                td OK / Ajustar.
              tr.bgr
                td Escote.
                td Plano, sin #[em gape].
                td OK / Ajustar.
              tr
                td Costado.
                td Perpendicular al piso.
                td OK / Ajustar.
        figcaption Fuente: SENA, (2025)
      .col-lg-6
        .sub.p-2.mb-4(data-aos="fade-left")
          h4.mb-0.text-white.ps-3.pe-3 • Lista de chequeo del corpiño + manga
        .titulo-sexto.mb-4
          h5 Tabla 13.
          | Lista de chequeo por items
        .tabla-a.tabla-peq.tabla5.mb-lg-5
          table
            thead
              tr
                th Ítem
                th Criterio
                th OK / Ajustar
            tbody
              tr.bgr
                td Longitud sisa versus curva manga.
                td Diferencia ≤ 0,3 cm.
                td OK / Ajustar.
              tr
                td Embebido corona.
                td Liso, sin frunces visibles.
                td OK / Ajustar.
              tr.bgr
                td Piquetes.
                td 1 F, 2 B y hombro coinciden.
                td OK / Ajustar.
              tr
                td Giro de brazo.
                td Elevar 90° sin tirantez.
                td OK / Ajustar.
              tr.bgr
                td Costura costado bajo manga.
                td Línea fluida.
                td OK / Ajustar.
        figcaption Fuente: SENA, (2025)

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 G. Transferencia de ajustes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .bg2.p-lg-5.p-4
          ol.lista-ol--cuadro
            li.d-flex 
              .lista-ol--cuadro__vineta
                span a
              p.mb-0 Descoser el prototipo y superponer sobre el patrón.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span b
              p.mb-0 Calcar nuevas líneas con ruleta dentada.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span c
              p.mb-0 Redibujar curvas con regla francesa; truequear costados.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span d
              p.mb-0 Etiquetar versión (v2, v3…).
            li.d-flex 
              .lista-ol--cuadro__vineta
                span e
              p.mb-1 Repetir corte y prueba si cambios > 1 cm o afectan sisa / escote / corona.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema5/10.png', alt='')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 H. Criterios de aprobación final 

    .bg4.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6
          img.img-a.img-t.mb-lg-0.mb-4(src="@/assets/curso/tema5/11.svg")
        .col-lg-6
          ol.lista-ol--cuadro
            li.d-flex 
              .lista-ol--cuadro__vineta
                span a
              p.mb-0 Todas las mediciones dentro de ± 0,5 cm de la tabla.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span b
              p.mb-0 Arrugas radiales eliminadas; embebido uniforme en corona.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span c
              p.mb-0 Movilidad completa sin distorsión del corpiño.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span d
              p.mb-0 Costuras verticales y horizontales equilibradas.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 I. Registro y archivo de las observaciones

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-7
        .titulo-sexto.mb-3
          h5 Tabla 14.
          | Registro de observaciones
        .tabla-a.tabla-peq.tabla6
          table
            thead
              tr
                th Documento
                th Contenido mínimo
                th Formato
            tbody
              tr.bgr
                td #[b Ficha técnica final]
                td Versión, medidas finales, holguras, fecha, responsable.
                td PDF etiquetado + impreso.
              tr
                td #[b Fotografías]
                td Frente, costado, espalda; brazos relajados y elevados.
                td Imagen + descripción.
              tr.bgr
                td #[b Patrones definitivos]
                td Corpiño T-8 versión final, manga T-8 versión final.
                td Cartapacio rígido rotulado.
        figcaption Fuente: SENA, (2025)
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema5/12.png' alt='AvatarTop')

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 J. Recomendaciones

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema5/13.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-3
          h5 Tabla 15.
          | Recomendaciones en ajuste de errores comunes
        .tabla-a.tab6
          table
            thead
              tr
                th Zona
                th Error frecuente (se observa en la muestra)
                th Causa principal en el patrón
                th Ajuste sobre el patrón
            tbody
              tr
                td.cet(rowspan='2') #[b Corpiño – busto]
                td.bgr Arrugas horizontales que tiran hacia el centro del busto.
                td.bgr Falta de holgura o pinza de busto insuficiente.
                td.bgr
                  p • Añadir 0,5 cm – 1 cm al costado en la línea de busto y redibujar sisa.
                  p.mb-0 • Profundizar la pinza busto 0,5 cm por cada lado.
              tr
                td Bolsas verticales debajo del busto.
                td Pinza de busto demasiado profunda o vértice llega al punto busto.
                td
                  p • Reducir la profundidad de la pinza 0,5 cm – 1 cm.
                  p.mb-0 • Retrasar el vértice 1 cm–1,5 cm hacia el costado.
              tr
                td.cet(rowspan='2') #[b Corpiño – cintura]
                td.bgr Exceso de tela (bolsa) en cintura espalda.
                td.bgr Pinza de cintura poco profunda.
                td.bgr.mb-0 • Aumentar la profundidad de la pinza cintura espalda 0,5 cm – 1 cm.
              tr
                td Tirantez en cintura delantera.
                td Falta de holgura o pinza busto muy grande.
                td • Comprobar tabla de medidas; añadir 0,5 cm en cada costado a nivel cintura.
              tr
                td.cet(rowspan='2') #[b Corpiño – hombro / sisa]
                td.bgr Sisa pellizca o limita el movimiento.
                td.bgr Sisa demasiado alta o curva muy cerrada.
                td.bgr
                  p • Bajar la sisa 0,5 cm y suavizar la curva con regla francesa.
                  p.mb-0 • Añadir 0,3 cm de holgura en costado superior.
              tr
                td Hueco / #[em gape] en sisa delantera.
                td Sisa demasiado profunda o pinza busto insuficiente.
                td
                  p • Subir la sisa 0,5 cm.
                  p.mb-0 • Profundizar pinza busto 0,3 – 0,5 cm.
              tr
                td.cet #[b Corpiño – escote]
                td.bgr Escote delantero se abre (#[em gape]).
                td.bgr Escote demasiado recto o largo de hombro excesivo.
                td.bgr
                  p • Reducir 0,5 cm en la línea de escote desde el hombro y redistribuir curva.
                  p.mb-0 • Ajustar inclinación de hombro si es necesario.
              tr
                td.cet(rowspan='2') #[b Corpiño – costado]
                td Costado inclinado hacia adelante.
                td Exceso de ancho en espalda / falta en delantero.
                td • Mover la costura costado 0,5 cm –1 cm hacia la espalda en la línea de cintura y busto.
              tr.bgr
                td Costado inclinado hacia atrás.
                td Exceso de ancho en delantero / falta en espalda.
                td.mb-0 • Mover la costura costado 0,5 cm – 1 cm hacia el delantero.
              tr
                td.cet(rowspan='2') #[b Manga – corona]
                td "Orejas" o puntas en la cima de la manga.
                td Embebido insuficiente o corona demasiado alta.
                td
                  p • Reducir altura de corona 0,5 cm – 1 cm y suavizar curva.
                  p.mb-0 • Añadir hilera de frunce para distribuir embebido.
              tr.bgr
                td Frunces visibles o pliegues en corona.
                td Exceso de embebido o corona muy baja.
                td
                  p • Aumentar altura de corona 0,5 cm –1 cm.
                  p.mb-0 • Disminuir frunce retirando 0,5 cm en la costura de manga desde piquete delantero a piquete espalda.
              tr
                td.cet(rowspan='2') #[b Manga – bíceps]
                td Tirantez al doblar el brazo.
                td Ancho de manga insuficiente en bíceps.
                td • Abrir la costura bajo manga 0,5 cm (total +1 cm) y suavizar hacia puño.
              tr.bgr
                td Exceso de tela en bíceps (arrugas horizontales).
                td Ancho de manga excesivo.
                td • Reducir 0,5–1 cm en cada lado de la costura bajo manga y suavizar hacia puño.
              tr
                td.cet(rowspan='2') #[b Manga – puño]
                td Puño muy ancho (cae).
                td Ancho de puño excesivo.
                td • Reducir puño 0,5 cm por lado y comprobar longitud de costura bajo manga.
              tr.bgr
                td Puño ajustado.
                td Ancho de puño insuficiente.
                td • Aumentar puño 0,5 cm por lado y prolongar costura bajo manga.
        figcaption Fuente: SENA, (2025)
        
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 K. Lista de abreviaturas y símbolos a tener en cuenta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema5/14.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-3
          h5 Tabla 16.
          | Lista de abreviaturas y símbolos
        .tabla-a.tab7
          table
            thead
              tr
                th Abreviatura / Símbolo
                th Significado
                th Contexto dentro del instructivo
            tbody
              tr.bgr
                td #[b CF]
                td #[em Centre front] / centro frente.
                td Línea vertical de referencia en el patrón y en la prenda que divide el delantero en su eje medio; guía la colocación de cierres o botones.
              tr
                td #[b CB]
                td #[em Centre back] / centro espalda.
                td Línea vertical central de la espalda; se usa para alinear el patrón y para abrir la prenda en las pruebas.
              tr.bgr
                td #[b F]
                td #[em Front] / frente (manga).
                td Piquete simple que señala el lado delantero de la sisa de la manga.
              tr
                td #[b B]
                td #[em Back] / espalda (manga).
                td Dos piquetes que identifican el lado posterior de la sisa de la manga.
              tr.bgr
                td #[b H]
                td Hombro (manga).
                td Piquete central en la corona de la manga que coincide con la costura de hombro del corpiño.
              tr
                td #[b v1, v2, v3…]
                td Versión del patrón.
                td Indicador de iteraciones sucesivas tras cada ciclo de prueba y ajuste (ejemplo: "T-8 v2").
              tr.bgr
                td #[b #[em Stay stitch] ——]
                td Costura de estabilizado.
                td Línea de puntada recta a 1 cm del borde que evita que la sisa o el escote se deformen durante la manipulación.
              tr
                td #[b ▲ / Corte de 2 mm]
                td Piquete (#[em notch]).
                td Pequeño corte triangular o recto en los márgenes que ayuda a casar piezas al ensamblar.
              tr.bgr
                td #[b • •]
                td Líneas de frunce.
                td Dos hileras paralelas de puntada larga usadas para crear el embebido en la corona de la manga.
              tr
                td #[b #[em ± 0,5 cm]]
                td Tolerancia.
                td Margen de error aceptable al comparar las medidas finales con la tabla estándar.
              tr.bgr
                td #[b #[em 1 cm / 1,5 cm / 2 cm / 3 cm]]
                td Márgenes de costura.
                td Distancias agregadas al contorno del patrón según la zona (costados, sisas, cintura, bajo de manga).
        figcaption Fuente: SENA, (2025)


</template>

<script>
export default {
  name: 'Tema5',
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
