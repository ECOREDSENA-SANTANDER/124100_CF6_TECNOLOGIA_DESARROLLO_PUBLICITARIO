<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Le invitamos a consultar atentamente el video que se presenta a continuación, el cual ilustra sobre el #[em endomarketing] como estrategia enfocada en mejorar la comunicación interna, la cultura y la productividad organizacional.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FGED5DiHFlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Plan de #[em endomarketing]
    

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
