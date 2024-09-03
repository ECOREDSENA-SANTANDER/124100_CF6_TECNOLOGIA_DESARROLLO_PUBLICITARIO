<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 3
        h1 Plan de comunicación interna

      .row.justify-content-center.mb-4
        .col-lg-11
          .bloque-texto-g.fondo-b.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.png')})`}"
            )
            .bloque-texto-g__texto.p-5.mt-4.mb-4
              p.mb-0 Cuando la empresa es consciente que debe tener claro el sistema de información desde y hacia sus empleados y colaboradores y la importancia que este proceso tiene para el desarrollo de la empresa, es entonces que se debe implementar un plan de comunicación interna; como todo plan debe tener una estructura y una ruta muy bien establecida para generar la mejor calidad de información posible.

      p Un plan de comunicación interna debe integrar los siguientes elementos:
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-sm-6
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/1.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Objetivo de comunicación interna
                .py-2
                  p.text-center Este objetivo se centra en lo que se quiere lograr; por ejemplo, mantener informado al total de los empleados de la empresa acerca de las funciones que deben realizar en su puesto de trabajo.
                
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/2.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Estrategias
                .py-2
                  p.text-center En este punto se deben definir claramente las acciones a realizar para lograr los objetivos planteados: implementación de canales, tipo de comunicación.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/3.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Público objetivo
                .py-2
                  p.text-center Aquí es importante realizar una segmentación y caracterización de los diferentes públicos a los que va dirigida la comunicación.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/4.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Áreas
                .py-2
                  p.text-center Debe tenerse claro qué secciones de la empresa o departamentos van a ser objeto de la comunicación.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/5.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Mensajes claves
                .py-2
                  p.text-center Información que se va a generar y puntos clave en los que se va a centrar.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/6.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Ecosistema de medios
                .py-2
                  p.text-center Selección de los medios a implementar para hacer llegar la información a los diferentes públicos.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/7.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Programación
                .py-2
                  p.text-center El calendario de entrega de los mensajes a los diferentes públicos debe estar bien planteado y respetarse de forma estricta.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/8.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Recursos necesarios
                .py-2
                  p.text-center Es necesario definir todos los recursos que se requieren para el desarrollo de una adecuada comunicación interna: técnicos, tecnológicos, humanos y económicos.
            
            .tarjeta.color-secundario-cus.p-4
              .row.justify-content-center.mb-3
                .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/9.png')
              .row.justify-content-center.mb-3
                .col-lg-8.fondo-morado.p-1
                  h4.text-center.text-white Medición
                .py-2
                  p.text-center Es importante contar con un sistema de feedback que permita medir la respuesta de los empleados y colaboradores a la comunicación interna de la empresa.

      Separador
      #t_3_1.titulo-segundo.color-secundario
        h2 3.1 Medios para la comunicación interna

      p El desarrollo de cualquier proceso de comunicación implica la selección e implementación de una plataforma de medios acorde con las características del mercado y en este caso con la infraestructura de la empresa u organización. Siendo así, es importante conocer los medios más adecuados para el desarrollo de la comunicación interna en una empresa, teniendo en cuenta lo descrito por Cuenca y Verazzi (2018):

      .fondo4.p-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            .blanco.p-4
              SlyderA(tipo="b").p-3
                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 #[em Intranet]
                      p Es un canal que poco a poco se ganó un lugar central en el ecosistema de medios, aun con todas las opciones que amenazan su vigencia. La intranet puede dar cabida y facilitar el acceso, incluso cuando estén alojados en otra plataforma, a todos los documentos internos que guían al empleado en su rol y su quehacer: manual de bienvenida, normativa interna, manual de identidad corporativa, directorios, datos útiles, etc. A su vez, facilita el acceso a otros canales con usos diferentes y múltiples herramientas posibles. Dentro de la intranet pueden incorporarse foros y wikis. Los foros representan un buen instrumento de comunicación horizontal y ascendente.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img2.png')
                
                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 #[em Blogs]
                      p Son una potente herramienta de comunicación interna que permite a la organización mantener informados a sus empleados y tener un feedback (participación) en tiempo real, no solo con sus comentarios, sino también con las estadísticas que se generan sobre su utilización, contenidos más consultados o comentados, temas de interés, usuarios más activos, franjas de mayor acceso, etc.Se produce cuando directivos y mandos medios generan información hacia los empleados, estos pueden contener información de tipo organizacional o corporativa.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img3.png')
                
                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 #[em Mailing]
                      p Es uno de los canales preferidos, posiblemente por su simplicidad y su carácter de índole pasiva de cara al lector: no se requiere nada, el correo electrónico simplemente aparece en cada bandeja de entrada. No hay que buscar información, la información llega y esto, en ciertas culturas corporativas, puede ser útil. La recomendación es que los correos electrónicos formales estén formateados y enviados desde una plataforma de e-mail marketing que arroje indicadores.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img4.png')

                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 Carteleras
                      p Son útiles y están bien valoradas hoy día en ciertas circunstancias. Se trata de un buen canal para públicos con perfiles muy técnicos, que realicen trabajos manuales, en operaciones, en planta, en tiendas, etc.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img8.png')


                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 Revista interna 
                      p Representa un vínculo de comunicación estable con los empleados, para presentar proyectos, contar historias en profundidad, transmitir la filosofía y las bases de las empresas. Pero, sobre todo, sirve para sacar hacia afuera lo interno de la empresa, la esencia que tiene. Puede llegar desde el seno de la organización hasta las casas de los empleados, donde ellos pueden compartir en familia el lugar de trabajo. Esto último es una de las razones por las que más se valora este canal.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img6.png')

                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 Redes sociales corporativas: 
                      p Son plataformas cada vez más utilizada y donde tienen mayor éxito de adhesión es en las empresas más flexibles, horizontales o con metodologías ágiles. La principal ventaja como herramienta de comunicación es la multidireccionalidad, la inmediatez y la posibilidad que brinda de generar redes de trabajo que permiten interacción laboral, social y lúdica. Además, estas redes no solo permitirían mejorar resultados, sino que podrían impactar positivamente en las relaciones y en el clima laboral. Ahora bien, lo que permite, en definitiva, es comunicarse, cooperar y crear comunidad.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img7.png')

                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h4 Reuniones informativas
                      p Son muy eficaces en términos comunicativos; después de todo, no es lo mismo leer o escuchar, que vivir algo en carne propia. Podría tratarse de reuniones de carácter general, eventos o bien de reuniones más reducidas. Incluso aquellas otras en las que la transmisión de los mensajes se realiza mediante la interlocución directa, propia de los sistemas de comunicación descendente. En la nueva era de la información, este tipo de reuniones se están desarrollando a través de plataformas webinar que permiten conectar a grupos amplios de personas en el tiempo real en que se encuentren en cualquier lugar del mundo.
                  .col-lg-5.p-4.col-sm-8
                    img(src='@/assets/curso/temas/tema3/img5.png')
        
</template>

<script>
export default {
  name: 'Tema3',
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
