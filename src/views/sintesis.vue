<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-lg-12.mb-5
        p En este componente, se desarrollaron conceptos de endomarketing desde la comunicación interna, resaltando la importancia de las relaciones que existen entre las personas que participan en el proceso de marketing de la empresa. A continuación, se presenta un diagrama donde se enuncian los conceptos y temas más relevantes tratados en el componente. 
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En el diagrama se presentan los temas de endomarketing, comunicación interna y plan de comunicación, con carcterísticas y conceptos de cada uno.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
