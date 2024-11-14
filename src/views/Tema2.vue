<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 La comunicación interna



      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12.col-12.col-sm-12.p-4
         .bloque-texto-g.fondobebe.p-3.p-sm-4.p-md-5(data-aos="fade-down")
            .bloque-texto-g__img.dor(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.png')})`}"
            )
            .bloque-texto-g__texto.dos.p-4
              p.mb-0 Cómo ya se dijo anteriormente, se centrará el tema en la comunicación hacia el interior de la empresa, una actividad cada vez más frecuente y que ha generado frutos en el desarrollo de las estrategias de #[em marketing] relacional.
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-secundario
        h2 2.1 ¿Qué es la comunicación interna?
      
      p Para dar un primer acercamiento a la comunicación interna según la Guía fundamental de la comunicación interna (2018), es necesario poner un contexto, ya que para algunos expertos en #[em marketing] está en manos de las relaciones públicas, toda vez que el target al que se dirige tiene características similares en cuanto a sus intereses y algunas de sus prioridades y una misma identidad social que gira en torno a la empresa en la que se labora; diversos estudios empíricos explicitan que, cuanto mejor informada está una persona, más motivada estará para realizar su trabajo de manera correcta y eficazmente, porque comprenderá y asignará mayor sentido a sus tareas.
      .row.mb-5
        .col-lg-4.col-sm-7
          h3 Enfoques de la comunicación interna
          img(src="@/assets/curso/linea.png", alt="")
      p Las necesidades de comunicación al interior de una empresa son diversas, de ahí que muchas organizaciones dependiendo de su tamaño tienen un equipo dedicado de forma exclusiva y permanente, al desarrollo de estrategias de comunicación dirigida a los empleados y los colaboradores. 
      p La comunicación interna puede tener varios enfoques, de acuerdo con las necesidades de información que presente el público interno de una empresa. Uno muy común es el relacionado con las funciones en cada uno de los cargos; en este sentido, hay un trabajo arduo en comunicación que va desde el diseño de manuales de funciones, hasta estrategias de motivación para generar eficiencia. Otro enfoque es el relacionado con la entrega de valor de la empresa en el mercado; es decir, todo lo concerniente con la función de la empresa en el mercado, el aporte a la sociedad y las razones por las que los clientes compran o usan sus productos o servicios. Un tercer enfoque es el relacionado con lo institucional; este tiene que ver con los programas de bienestar empresarial y con los procesos administrativos, los sistemas de calidad, los formatos y los protocolos. 
      p Teniendo en cuenta lo anterior, la comunicación interna tiene una serie de funciones que se describirán a continuación:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-8
          img(src="@/assets/curso/temas/tema2/img002.png", alt="")
        .col-lg-7 
          .bgimg2.p-4
            SlyderA(tipo="b").p-3
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Promueve el uso adecuado de los elementos de identidad corporativa de la empresa, ¿qué lo hace único en la historia?
              
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Satisface las necesidades de información de los empleados en cuanto a sus funciones.
              
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Proporciona conocimiento relacionado con normas y protocolos internos de la empresa.
              
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Informa acerca de oportunidades de ascenso y promoción dentro de la empresa.

              .row.p-1
                .col-lg-12 
                  br
                  br
                  p.p-4 Permite la interacción entre jefes, colaboradores y empleados para manifestar diferentes puntos de vista en temas específicos.

              
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Contribuye a promover los valores y filosofías empresariales.
              
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Promueve la colaboración y participación entre los diferentes departamentos de la empresa y estimula el trabajo en equipo.
              
              .row.p-1
                .col-lg-12
                  br
                  br
                  p.p-4 Genera motivación y un clima organizacional cordial y ameno.
      
      Separador
      #t_2_2.titulo-segundo.color-secundario
        h2 2.2 Los públicos internos

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          p Cada organización es un mundo diferente, por lo tanto, van a presentar necesidades de información diversas, esas necesidades están ligadas a los públicos a los que se dirija la comunicación. Los públicos están directamente relacionados con el organigrama de la empresa y con quienes deben generar comunicación. Por lo general, quienes más generan información o se comunican en mayor medida con los empleados, son los mandos medios que transmiten información derivada de los altos mandos y directivos; los mandos medios tienen comunicación en tres vías, hacia arriba con los directivos, hacia abajo con los operarios y en horizontal con sus pares, con quienes deben coordinar procesos. 
          p Es importante tener en cuenta de igual forma a los colaboradores externos; es decir, aquellas personas que no están de planta en la empresa pero que tienen relación directa, beneficios y la responsabilidad de hacer buen uso de la identidad, valores y filosofía de la compañía, para el caso son los vendedores, promotores, transportadores y los proveedores.
        .col-lg-6.col-8
          img(src="@/assets/curso/temas/tema2/img003.png", alt="")

      .row 
        .col-lg-4.col-sm-8
          h3 Caracterización de los públicos internos
          img(src="@/assets/curso/linea.png", alt="")
      .py-3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-8.col-sm-6
          img(src="@/assets/curso/temas/tema2/img04.png", alt="")
        .col-lg-9.py-2 
          p Si bien no es necesario hacer una segmentación tan rigurosa como se realiza con los clientes, es importante conocer algunas características de quienes van a recibir la comunicación por parte de la empresa. Para caracterizar esta población se van a aplicar variables propias de una base de datos: nombre, edad, género, cargo que ocupa, nivel educativo, estado civil, número de hijos y personas con quien convive. 
          p En muchas empresas es dado el hacer visitas domiciliarias por parte del departamento de talento humano, para conocer las condiciones de vivienda de sus empleados y este tipo de visitas pueden suministrar información muy relevante para el desarrollo de la comunicación interna. 
          p Por lo anterior, en la caracterización del público interno es necesario tener en cuenta las siguientes variables:
        
        .py-3
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-12.col-sm-10
            SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
            
              .tarjeta.color-secundario-cus.p-4
                .row.justify-content-center.mb-3
                  .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema2/ico01.png')
                .row.justify-content-center.mb-3
                  .col-lg-8.fondo-morado.p-1
                    h4.text-center.text-white Heterogéneos
                  .py-2
                    p.text-center Si bien los une elementos en común como la empresa y sus labores dentro de ella, son diversos en cuanto a sus características personales.
                  
              .tarjeta.color-secundario-cus.p-4
                .row.justify-content-center.mb-3
                  .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema2/ico02.png')
                .row.justify-content-center.mb-3
                  .col-lg-8.fondo-morado.p-1
                    h4.text-center.text-white Multifuncional
                  .py-2
                    p.text-center Un mismo individuo hace parte de diferentes grupos; por ejemplo, un mando medio puede hacer parte de un grupo deportivo o cultural.

              .tarjeta.color-secundario-cus.p-4
                .row.justify-content-center.mb-3
                  .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema2/ico03.png')
                .row.justify-content-center.mb-3
                  .col-lg-8.fondo-morado.p-1
                    h4.text-center.text-white Interconectado
                  .py-2
                    p.text-center Independiente de a donde pertenezca un grupo o individuo, pueden y deben en muchas ocasiones hacer parte de otros o de grupos alternos constituidos por individuos de diferentes áreas para realizar tareas puntuales.
              
              .tarjeta.color-secundario-cus.p-4
                .row.justify-content-center.mb-3
                  .col-sm-3.col-lg-5.my-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema2/ico04.png')
                .row.justify-content-center.mb-3
                  .col-lg-8.fondo-morado.p-1
                    h4.text-center.text-white Dinámicos
                  .py-2
                    p.text-center Los grupos suelen cambiar en cuanto a su composición, actitudes y comportamientos.

      Separador
      #t_2_3.titulo-segundo.color-secundario
        h2 2.3 Mensajes en la comunicación interna 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-8.py-1
          img(src='@/assets/curso/temas/tema2/img05.png')
        .col-lg-9
          p Como en toda estrategia o plan de comunicación, el mensaje en la comunicación interna es un elemento fundamental para llevar la información de una forma clara y concreta, en el momento adecuado al público objetivo seleccionado. Dentro de su desarrollo se pueden diferenciar dos tipos: 
          ul.lista-ul.color-secundario
            li
              i.fas.fa-circle-check.px-2
              | #[b La comunicación operativa:] tiene que ver con todo el proceso y desarrollo de procesos y protocolos de la organización.
            li
              i.fas.fa-circle-check.px-2 
              | #[b La comunicación corporativa:] implica un mayor despliegue creativo toda vez que se encarga de informar acerca de eventos, novedades en el personal, instalaciones, infraestructura, datos relacionados con la cultura empresarial, entre otros. 

      .py-2
        P Los mensajes por lo tanto son la punta del #[em iceberg] en el proceso comunicativo interno, pero al mismo tiempo son la puerta de acceso a la interacción entre directivos y clientes. En ese orden de ideas, los mensajes se pueden dividir en dos clases:
      .tarjeta--container.row.mb-2
        .col-md.tarjeta.color-primario.pri8.p-5.pp
          .row.justify-content.mb-3
            .col-3.my-3
              figure
                img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
          h3 Mensajes generales 
          p Son sobre todo informativos y van dirigidos a toda la comunidad sin distinción de grupo, área o departamento. Se utilizan para proporcionar información relacionada con temas de interés de toda la comunidad como circulares, normas, formatos, programas u otro tipo de dato que afecte a toda la empresa. Estos mensajes suelen ser enviados por canales directos y por lo general no requieren diseños elaborados y conceptos creativos persuasivos, a no ser que se refieran a eventos en los que participa todo el personal. En muchas ocasiones son enviados por los mismos jefes o por el departamento de comunicaciones.
        .col-md.tarjeta.color-primario.pri9.p-5.pp
          .row.justify-content.mb-3
            .col-3.my-3
              figure
                img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')
          h3.text-white Mensajes segmentados
          p.text-white Van dirigidos a grupos específicos, áreas o departamentos. Estos mensajes siempre tienen un objetivo concreto y por lo general requieren de una estructura mediática, diseño y concepto. Por ejemplo, la divulgación de un manual de funciones de un área específica o el desarrollo de una capacitación en particular.
      
      p Es importante tener claro que independiente del tipo de mensaje que se genere, la información y la manera como se entregue debe proporcionar credibilidad; este factor implica que los empleados poco a poco tengan mayor confianza en la organización y en sus directivos. 
      p Por último, la información que se proporcione debe llegar en momentos claves y de acuerdo con una programación estructurada con las características de los diferentes grupos. Es clave entender en qué horario el público está en disposición de recibir y atender un mensaje, esto implica también que algunos medios permiten una interacción inmediata y otros lapsos más prolongados entre la emisión y la respuesta. Es importante que quien genere la información tenga claro el horario laboral y el familiar para la entrega de la información. 
      
      Separador
      #t_2_4.titulo-segundo.color-secundario
        h2 2.4 Rutas de la información interna
      
      p Hoy la premisa es que el personal debe estar más y mejor informado, esto implica que la comunicación se dé a través de varias rutas y con el apoyo de todos los formatos posibles: escritos, audiovisuales, presenciales, etc. Las rutas de la información tienen un alto nivel de relevancia en el proceso de comunicación interna, encontrando:

      .fondo3.p-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            .blanco.p-4
              SlyderA(tipo="b").p-3
                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                      h5 Descendente
                      p Se produce cuando directivos y mandos medios generan información hacia los empleados, estos pueden contener información de tipo organizacional o corporativa.
                  .col-lg-5.p-4
                    img(src='@/assets/curso/temas/tema2/img07.png')
                
                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                    h5 Ascendente
                    p Se da desde los empleados hacia los mandos medios y directivos o desde los mandos medios hacia los directivos. Por lo general, son mensajes en los que se manifiestan las impresiones de los empleados, se realizan solicitudes, quejas o reclamos, también suelen utilizarse para realizar propuestas de mejoramiento, innovación y cambios en los procesos. La comunicación ascendente es muy beneficiosa para la empresa, toda vez que permite mejorar el clima organizacional, promueve el desarrollo del personal, fortalece el trabajo colaborativo, genera credibilidad, permite el desarrollo de nuevas ideas y proyectos beneficiosos para la empresa y permite tomar decisiones más efectivas.
                  .col-lg-5.p-4
                    img(src='@/assets/curso/temas/tema2/img08.png')
                
                .row.justify-content-center.align-items-center.p-1
                  .col-lg-7.p-4
                    h5 Horizontal
                    p Se da entre homólogos de diferentes departamentos de la empresa o mandos medios que están en el mismo nivel jerárquico. La comunicación entre departamentos es muy beneficiosa para mejorar la eficiencia de la compañía y optimizar los procesos; permite la generación de conocimiento y el desarrollo de innovación, mejora el clima organizacional y el proceso de comunicación en las demás rutas.
                  .col-lg-5.p-4
                    img(src='@/assets/curso/temas/tema2/img09.png')

      Separador
      #t_2_5.titulo-segundo.color-secundario
        h2 2.5 Errores y obstáculos de la comunicación interna

      p En todo proceso de comunicación es necesario seguir un norte y realizar un proceso con una planificación bien estructurada. Puede tenerse la sensación de que por tratarse de comunicación interna se puede omitir la planeación y es por tal motivo que se cae en estos errores comunes:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          TabsB.color-acento-contenido.mb-5
            .py-4.py-md-5(titulo="No tener una estrategia" :icono="require('@/assets/curso/temas/tema2/1.png')")
              .row.justify-content-center.align-items-center.mb-5
                .col-md-2.col-5
                  figure
                    img(src='@/assets/curso/temas/tema2/ico4.png', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  p.p-4 En cualquier proceso de comunicación se va a dar la necesidad de desarrollar varios mensajes y utilizar una serie de medios, si se lanza el mensaje sin tener una estrategia clara en estos aspectos mínimos, el esfuerzo puede ser infructuoso o llegar a demandar más tiempo de lo que requiere.
              
            .py-4.py-md-5(titulo="Saturación de mensajes" :icono="require('@/assets/curso/temas/tema2/2.png')")
              .row.justify-content-center.align-items-center.mb-5
                .col-md-2.col-5
                  figure
                    img(src='@/assets/curso/temas/tema2/ico5.png', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  p.p-4 Un plan correcto debería garantizar que con cierto número de mensajes se llegue al público seleccionado de forma clara y directa, la sobrecarga puede afectar la credibilidad y el interés por la comunicación en general.
            
            .py-4.py-md-5(titulo="No medir efectividad" :icono="require('@/assets/curso/temas/tema2/3.png')")
              .row.justify-content-center.align-items-center.mb-5
                .col-md-2.col-5
                  figure
                    img(src='@/assets/curso/temas/tema2/ico6.png', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  p.p-4 La medición de comunicación es indispensable para determinar si los medios utilizados fueron los adecuados y el mensaje es comprensible; este tipo de mediciones se pueden realizar a través de mecanismos de #[em feedback]. Es importante tener claros los indicadores que se van a medir en cada comunicación.
            
            .py-4.py-md-5(titulo="Incorrecta selección de los medios" :icono="require('@/assets/curso/temas/tema2/4.png')")
              .row.justify-content-center.align-items-center.mb-5
                .col-md-2.col-5
                  figure
                    img(src='@/assets/curso/temas/tema2/ico7.png', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  p.p-4 Los canales por los que el mensaje debe llegar al público, son muy importantes para garantizar la efectividad de la comunicación, ya que un canal inadecuado puede generar una entrega errónea del mensaje.
            
            .py-4.py-md-5(titulo="No contar con recursos" :icono="require('@/assets/curso/temas/tema2/5.png')")
              .row.justify-content-center.align-items-center.mb-5
                .col-md-2.col-5
                  figure
                    img(src='@/assets/curso/temas/tema2/ico8.png', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  p.p-4 Las empresas deben ser conscientes que la comunicación a cualquier nivel requiere una serie de recursos y elementos para que pueda ser efectiva; es necesario contar con equipos que permitan la producción de contenidos y piezas gráficas que permitan el diseño de mensajes más persuasivos y efectivos.
           
           









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
