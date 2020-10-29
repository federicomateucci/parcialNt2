<template >
<Nabar/>
<router-view/>
  <section class="src-components-preguntas">
   <table class="table">
      <thead>

        <tr class="bg-succes text-black">
          <th>Pregunta</th>
          <th>Respuesta</th>
        
        </tr>
      </thead>

     <tbody>
        <tr
          class="bg-info text-black"
          v-for="(pregunta, index) in preguntas"
          :key="index"
        >
       <td>{{pregunta.pregunta}}</td>
          <td>{{pregunta.respuestas}}</td>
        </tr>
     </tbody>
      </table>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-preguntas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas:[
        {pregunta:1,respuestas:['b']},
        {pregunta:2,respuestas:['b']},
        {pregunta:3,respuestas:['c']},
        {pregunta:4,respuestas:['d']},
        {pregunta:5,respuestas:['e','a']}
        ]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-preguntas {
}
</style>
