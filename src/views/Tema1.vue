<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 <i>Endomarketing</i>

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          p El #[em endomarketing] basa su estructura en el desarrollo de estrategias que permitan que los empleados de la empresa tengan sentido de pertenencia y que se conviertan en promotores de sus productos o servicios, aun estando en horarios no laborales o así sus obligaciones contractuales no tengan nada que ver con las ventas o la promoción. Esto se resume en una frase que el empresario Richard Branson tiene dentro de sus más célebres y que traza parte de su actuar como CEO de sus organizaciones: “ siempre he creído que la forma en la que tratas a tus empleados es la forma en la que ellos tratarán a tus clientes y que las personas florecen cuando se les alaba. Cuando tratamos bien a otras personas, estas tenderán a tratarnos de la misma forma, sean clientes o empleados, un empleado además puede ser un futuro cliente”.
          p En una organización, la relación existente entre los miembros de ella, es el reflejo de lo que se hace con los clientes; pues un empleado satisfecho con el trato recibido, el salario y la buena relación con sus compañeros, recibirá a los clientes expresando esa satisfacción con una sonrisa y un trato amable; pero lo más importante, ese empleado va a hablar bien de su empresa, del producto que fabrican o del servicio que prestan y va a usar todos sus argumentos y conocimientos para ponerlos por encima de la competencia.
        
        .col-lg-4.col-8.col-sm-6
          img(src="@/assets/curso/temas/tema1/img01.png", alt="")

      .row.justify-content-center.align-items-center.mb-5.fondoverde(data-aos="fade-left").p-4
        .col-lg-4.col-8.col-sm-6
          img(src="@/assets/curso/temas/tema1/img02.png", alt="")
        .col-lg-8
          p El #[em endomarketing] entonces, se puede definir como un conjunto de estrategias y tácticas que se desarrollan al interior de la empresa, con el fin de promover la marca y los productos de la misma entre los empleados y colaboradores, generando sentido de pertenencia y mayor efectividad en el proceso de comercialización y promoción de los productos y servicios. 
          p En el artículo de la revista Dinero del 25 de marzo de 2017, se menciona el #[em endomarketing] como una estrategia que es partícipe del mercadeo holístico de la organización y se hace referencia a que esta estrategia es originada en las empresas de servicios Sasser y Arbeit (1976) mencionan que “el personal es el primer mercado de una empresa de servicios”. Berry (1981), sostiene que “el alcance del mercadeo tradicionalmente se ha restringido a las transacciones que tienen lugar entre clientes y empresas” pero que “también es aplicable a los intercambios que se dan entre el personal y estas mismas organizaciones”, y por lo tanto se puede considerar a los empleados como clientes. 
        
    
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
