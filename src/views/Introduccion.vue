<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
  
  
      .row.mb-4.mb-lg-5
        .col-lg(data-aos="fade-left")
          p.mb-0 El componente formativo tiene como objetivo ofrecer una guía completa sobre la elaboración de alimentos saludables a base de frutas y hortalizas. A lo largo del componente, se abordan aspectos clave como la madurez de los productos, sus principales compuestos y características, así como los métodos de cocción y conservación. Este conocimiento es fundamental para asegurar la calidad y el valor nutricional de los alimentos, así como para promover prácticas de preparación adecuadas y seguras. 
        .col-lg-auto(data-aos="fade-right")
          img.img-fluid(src="@/assets/curso/intro/1.svg", alt='', style='max-width: 100%').mx-auto.d-none.d-lg-block
  
      .bg-fondo-gradiente.p-4.ps-lg-5(data-aos="zoom-in").mb-5
        .row
          .col-lg-8.order-2.order-lg-1(style="place-self:center;")
            .bg-white.p-4.p-xl-5
              p.mb-0 El contenido está dirigido a quienes buscan mejorar sus habilidades en la manipulación y transformación de frutas y hortalizas, utilizando técnicas saludables y sostenibles. Además, se detallan procedimientos para la elaboración de productos como encurtidos, salsas, compotas, bebidas isotónicas y flanes, con un enfoque en el uso de ingredientes naturales y métodos que respetan la integridad de los alimentos, garantizando su sabor, calidad y durabilidad. 
          .col-lg-4.order-1.order-lg-2
            figure.position-relative
              img(src="@/assets/curso/intro/2.svg")#img-intro-2

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          img(src="@/assets/curso/intro/3.png").mx-auto
        .col-lg-8
          p(data-aos="fade-left").mb-4 Además, el componente formativo resalta la importancia de adoptar hábitos alimenticios saludables y de incorporar actividades físicas regulares, lo que contribuye a mejorar la calidad de vida y el bienestar general, fortaleciendo el sistema inmunológico y promoviendo un estilo de vida equilibrado.

          .d-flex
            img(src="@/assets/curso/intro/4.svg", style="max-width: 85px").me-2
            img(src="@/assets/curso/intro/5.svg", style="max-width: 85px").me-2
            img(src="@/assets/curso/intro/6.svg", style="max-width: 85px").me-2
            img(src="@/assets/curso/intro/7.svg", style="max-width: 85px").me-2
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
