<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Frutas y hortalizas 

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-4

        p(data-aos="fade-left").mb-4 Las frutas y hortalizas son especies vegetales que, tras su recolección, continúan su proceso de respiración, es decir, absorben oxígeno y emiten dióxido de carbono. Este proceso va acompañado de la transpiración, lo que provoca que, al almacenar estos productos, su superficie se humedezca debido a la liberación de agua desde las células internas. 

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema1/8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La madurez es un factor crucial para alcanzar las características deseadas en el producto. Por esta razón, las frutas y hortalizas deben ser recolectadas en el momento adecuado, evitando daños en la poscosecha. Si la recolección se hace de manera prematura, es decir, cuando el fruto está demasiado verde, puede sufrir modificaciones fisiológicas, aumentar su transpiración y generar una mala maduración durante el almacenamiento.

        p(data-aos="fade-right").mb-5 #[strong Para determinar el momento óptimo de la cosecha, se utilizan los siguientes índices:]

        .carousel-bg.mb-4
          SlyderF(columnas="col-lg-6 col-xxl-4")(data-aos="zoom-in-up")
            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/9.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Color externo.

            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/10.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Color del fondo de la epidermis en productos como tomates, fresas, manzanas, ciruelas y peras.

            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/11.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Tamaño, en el caso de hortalizas como zanahorias o maíz.

            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/19.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Jugosidad de la pulpa, relevante para cítricos, manzanas, duraznos y peras.
            
            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/20.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Estado de degradación del almidón, aplicable a ciertas variedades de manzanas y peras.

            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/21.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Relación entre azúcar y acidez, especialmente en cítricos y uvas.
            
            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/22.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Ennegrecimiento de las semillas, como indicador en algunas variedades de manzanas y peras.

            .tarjeta.bg-color-10.p-4.shadow-top-left-right.text-center
              img(src='@/assets/curso/tema1/23.png', style="max-width: 288px", alt='').mx-auto.mb-4
              p.text-center Facilidad para desprender el pedúnculo, aplicable a uvas, manzanas y peras.

        Separador
      
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')#t_1_1
      h2 1.1 Frutas

    p(data-aos='fade-left').mb-5 Las frutas son muy apreciadas por sus cualidades, como el color y el agradable aroma que poseen gracias a la presencia de aldehídos, alcoholes y ésteres, compuestos responsables de su sabor agridulce. 

    .bg-fondo-gradiente.p-4.ps-lg-5(data-aos="zoom-in").mb-5
      .row
        .col-lg-8.order-2.order-lg-1(style="place-self:center;")
          .bg-white.p-4.p-xl-5
            p.mb-0 En la mayoría de las plantas, la parte comestible es un material pulposo que rodea las semillas una vez estas se han desarrollado. El componente comestible varía según la fruta: por ejemplo, en el mango, la semilla se encuentra en el centro, rodeada por una pulpa gruesa, mientras que en la papaya, la pulpa se encuentra alrededor de numerosas semillas.
        .col-lg-4.order-1.order-lg-2
          figure.position-relative
            img(src="@/assets/curso/tema1/12.svg")#img-intro-2

    p(data-aos='fade-right').mb-4 Las frutas pueden consumirse frescas, congeladas o secas, como ocurre con los frutos secos. 
    p(data-aos='fade-right').mb-4 #[strong Los principales compuestos de las frutas son:]


    .bg-full-width.bg-fondo-slyder(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Agua
                  p.mt-4 El contenido de agua en las frutas varía entre un 75% y un 90%, aunque este porcentaje puede cambiar. El agua se encuentra principalmente en las vacuolas y contiene sustancias solubles como azúcares, sales, ácidos orgánicos, pigmentos solubles y vitaminas.
              .col-lg-4
                img(src='@/assets/curso/tema1/13.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Hidratos de carbono
                  p.mt-4 Los carbohidratos son uno de los principales constituyentes de las frutas. Están formados por azúcares y almidones, además de celulosa, hemicelulosa y sustancias pécticas. A medida que la fruta madura, el almidón se convierte en azúcar. Las cantidades de pectina varían según el grado de maduración, influyendo en la textura.
              .col-lg-4
                img(src='@/assets/curso/tema1/14.png', style="max-width: 412px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Proteínas, vitaminas y minerales
                  p.mt-4 Las frutas contienen cantidades pequeñas de proteínas, suficientes para los procesos vitales de las plantas, pero insuficientes para cubrir las necesidades humanas. Las frutas cítricas son una excelente fuente de ácido ascórbico, mientras que las frutas amarillas proporcionan carotenos, precursores de la vitamina A.
              .col-lg-4
                img(src='@/assets/curso/tema1/15.png', style="max-width: 412px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Pigmentos (clorofila y carotenoides)
                  p.mt-4 Los pigmentos son responsables del color de las frutas; sin ellos, las frutas serían monótonas. La clorofila verde y los carotenoides amarillos se disuelven en grasa y están presentes en las células de algunas frutas y verduras.
              .col-lg-4
                img(src='@/assets/curso/tema1/16.png', style="max-width: 412px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Pigmentos flavonoides
                  p.mt-4 Los pigmentos flavonoides en frutas y verduras son solubles en agua y se encuentran en la savia celular. Incluyen antocianinas (azul), antoxantinas (amarillo) y compuestos fenólicos, muchos catalogados como taninos.
              .col-lg-4
                img(src='@/assets/curso/tema1/17.png', style="max-width: 412px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Aroma
                  p.mt-4 El aroma es una característica que hace más apetitosas a las frutas. Las sustancias responsables del olor son una mezcla compleja de componentes volátiles, difíciles de analizar debido a su inestabilidad e insaturación.
              .col-lg-4
                img(src='@/assets/curso/tema1/18.png', style="max-width: 412px").mx-auto

    Separador

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')#t_1_2
      h2 1.2 Verduras

    p(data-aos='fade-left').mb-4 Las verduras son hortalizas cuya parte comestible es verde y presentan gran variedad de formas. Al igual que las frutas, las verduras se caracterizan por su bajo contenido de grasa y su alto contenido de agua. En este grupo también se incluyen guisantes y legumbres. La parte comestible de las verduras es el tallo o las hojas. 

    p(data-aos='fade-left').mb-5 #[strong Las verduras se clasifican según su parte comestible:]

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.mb-4
        .tarjeta--boton.bg-color-2.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/24.png', alt='', style="max-width: 272px").mx-auto.mb-4
          .bg-color-11.d-inline-block.px-3.py-2.mb-3
            h5.text-center.mb-0.text-white #[strong Hojas y tallos]
          p.text-center Perejil, brócoli, apio, col, acelga, lechuga, espinaca, etc. 

      .col-lg-3.mb-4
        .tarjeta--boton.bg-color-2.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/25.png', alt='', style="max-width: 272px").mx-auto.mb-4
          .bg-color-11.d-inline-block.px-3.py-2.mb-3
            h5.text-center.mb-0.text-white #[strong Frutos]
          p.text-center Calabaza, tomate, pepino, pimientos, berenjena.

      .col-lg-3.mb-4
        .tarjeta--boton.bg-color-2.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/26.png', alt='', style="max-width: 272px").mx-auto.mb-4
          .bg-color-11.d-inline-block.px-3.py-2.mb-3
            h5.text-center.mb-0.text-white #[strong Legumbres frescas o verdes]
          p.text-center Habas, guisantes, judías verdes. 


      .col-lg-3.mb-4
        .tarjeta--boton.bg-color-2.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/27.png', alt='', style="max-width: 272px").mx-auto.mb-4
          .bg-color-11.d-inline-block.px-3.py-2.mb-3
            h5.text-center.mb-0.text-white #[strong Raíces]
          p.text-center Zanahoria, rábano, remolacha, nabo 


    p(data-aos='fade-right').mb-4 #[strong Los componentes de las verduras son:]


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-color-12.p-5
        img(src='@/assets/curso/tema1/28.png', alt='').mx-auto.mb-4
        .bg-color-1.d-inline-block.px-3.py-2.mb-3
          h5.text-center.mb-0 Carbohidratos
        p Algunas verduras tienen niveles más altos de carbohidratos que las frutas. Un ejemplo de ello son la papa, el maíz y los frijoles, ya que contienen almidones que, a medida que maduran, se convierten en hidratos de carbono.

      .col-md.tarjeta.bg-color-8.p-5
        img(src='@/assets/curso/tema1/29.png', alt='').mx-auto.mb-4
        .bg-color-1.d-inline-block.px-3.py-2.mb-3
          h5.text-center.mb-0 Vitaminas y minerales
        p Las verduras son más ricas en estos compuestos que las frutas. Las verduras delgadas y de hojas verde oscuro son más ricas en hierro, riboflavina, ácido ascórbico y caroteno (provitamina A).

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Adecuación de vegetales 

    p(data-aos='fade-left').mb-5 Las partes de las verduras destinadas al consumo humano crecen en o cerca del suelo, por lo que su lavado es indispensable antes de ser procesadas. Esto elimina agentes contaminantes como tierra y microorganismos. Se recomienda utilizar agua tibia para facilitar la eliminación de la tierra adherida a la superficie, y, en ocasiones, es necesario el uso de cepillos para lavar los vegetales. 


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Métodos de cocción 

    p(data-aos='fade-left').mb-5  Las verduras se cocinan para modificar su textura y sabor, además de eliminar los microorganismos presentes en su superficie. Varios factores influyen en la elección del método de cocción, entre ellos la temperatura. A mayor temperatura, se produce la desnaturalización de algunos compuestos, como las vitaminas y minerales de las verduras. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
