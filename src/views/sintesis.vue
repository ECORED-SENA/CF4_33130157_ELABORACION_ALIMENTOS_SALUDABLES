<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-11.mb-5
        figure.bg-color-14.p-5.brounded
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis aborda los procesos y técnicas para elaborar alimentos saludables, destacando las frutas y hortalizas, su respiración y madurez, la composición de las frutas con agua, carbohidratos y vitaminas, y la clasificación de las verduras en hojas, frutos y raíces. También se menciona el escaldado, una cocción rápida, y se listan algunos productos saludables, como encurtidos, compotas y bebidas isotónicas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
