<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Carotenoides
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8(data-aos="fade-left")
          p.mb-4 #[strong Los carotenoides] son una clase de más de 600 pigmentos naturales sintetizados por #[strong plantas, algas y bacterias fotosintéticas]. Estas moléculas de colores brillantes son responsables de los tonos amarillos, naranjas y rojos en muchas plantas. La principal fuente de carotenoides en la dieta humana proviene de frutas y verduras.
  
          p Los carotenoides son pigmentos naturales que contribuyen a los colores vibrantes de las plantas, y los más comunes en la dieta incluyen el alfa-caroteno, beta-caroteno, beta-criptoxantina, luteína, zeaxantina y licopeno. 
  
          p Estos se clasifican en dos tipos:
        .col-lg-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/9.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.d-none.d-lg-block
  
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .row.justify-content-center.align-items-stretch
            .col-lg-6
              .card.h-100.brounded.bg-color-2
                .car-header.bg-color-1.p-2.brounded-x.mb-4
                  p.mb-0.text-center #[strong Carotenos]
  
                img(src="@/assets/curso/tema2/10.svg", alt="", style="max-width: 37px").mx-auto.mb-3
                p.mb-4.text-center Alfa-caroteno, beta-caroteno y licopeno.
            .col-lg-6
              .card.h-100.brounded.bg-color-5
                .car-header.bg-color-6.p-2.brounded-x.mb-4
                  p.mb-0.text-center #[strong Xantofilas]
  
                img(src="@/assets/curso/tema2/11.svg", alt="", style="max-width: 56px").mx-auto.mb-3
                p.mb-4.text-center Beta-criptoxantina, luteína y zeaxantina.
  
  
      p(data-aos="fade-left") Los carotenoides alfa-caroteno, beta-caroteno y beta-criptoxantina son provitamina A, lo que significa que el cuerpo puede transformarlos en retinol, una forma activa de vitamina A. En contraste, la luteína y el licopeno no pueden convertirse en retinol, por lo que no presentan actividad de vitamina A.
  
      .bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-5
          p(data-aos="fade-left").mb-5 Algunos alimentos que contienen carotenoides son:
  
          .row.justify-content-center
            .col-lg-4.mb-5(data-aos="zoom-in-up")
              .custom-image-card.bg-color-8
                img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-3 #[strong β-caroteno]
                  p.mb-0 Zanahoria, aceite rojo de palma (sin refinar), melocotones, albaricoques, pulpa de mango, papaya, naranja, papa, calabaza, cereales, legumbres.
            .col-lg-4.mb-5(data-aos="zoom-in")
              .custom-image-card.bg-color-8
                img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-3 #[strong α-caroteno]
                  p.mb-0 Zanahoria, aceite rojo de palma (sin refinar), melocotones, albaricoques, pulpa de mango, papaya, naranja, papa, calabaza, cereales, legumbres.
            .col-lg-4.mb-5(data-aos="zoom-in-left")
              .custom-image-card.bg-color-8
                img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-3 #[strong Luteína]               
                  p.mb-0 Verduras de hoja verde, guisantes, pimientos inmaduros.
            .col-lg-4.mb-5(data-aos="zoom-in-left")
              .custom-image-card.bg-color-8
                img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-3 #[strong β-criptoxantina]
                  p.mb-0 Cítricos, maíz.
            .col-lg-4.mb-5(data-aos="zoom-in-left")
              .custom-image-card.bg-color-8
                img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-3 #[strong Licopeno]               
                  p.mb-0 Tomate, sandía, toronja.
  
  
      .bg-full-width.bg-fondo-3.mb-5
        .px-4.px-md-5.pb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg
              p(data-aos="fade-left").mb-0 Los carotenoides, aunque han mostrado efectos positivos en estudios epidemiológicos, presentan una relación compleja con la salud humana. Actualmente, no está claro si sus efectos biológicos están directamente relacionados con su función antioxidante. A continuación, se destacan algunos puntos clave:
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", alt="", style="max-width: 124px").m-auto.mt-lg-0.d-none.d-lg-block
  
  
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/tema2/18.png', style="max-width: 100%", alt='').m-auto
  
            .col-lg-9
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-2")
                div(titulo="Carotenoides en general")
                  p Dietas ricas en frutas y verduras con carotenoides están asociadas con menor riesgo de enfermedades cardiovasculares y ciertos tipos de cáncer. Suplementos de betacaroteno en dosis elevadas pueden aumentar el riesgo de cáncer de pulmón en fumadores y ex trabajadores de asbesto.
                div(titulo="Licopeno")
                  p Alto consumo de licopeno (presente en tomates) se asocia con un menor riesgo de desarrollar cáncer de próstata en hombres.
                div(titulo="Luteína y zeaxantina")
                  p Únicos carotenoides presentes en la retina y el cristalino. Relacionados con menor incidencia de degeneración macular y cataratas.
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-0 La estabilidad de los carotenoides en los alimentos se ve favorecida por tratamientos térmicos moderados, como el escaldado y la cocción, que desnaturalizan las proteínas que los contienen y facilitan su extracción. Estos procesos también inactivan enzimas como la lipoxigenasa y la peroxidasa, las cuales pueden afectar la estabilidad de los carotenoides.
        .col-lg-4
          img(src="@/assets/curso/tema2/19.png", alt="", style="max-width: 100%", data-aos="fade-right").m-auto.mt-lg-0.d-none.d-lg-block
  
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
