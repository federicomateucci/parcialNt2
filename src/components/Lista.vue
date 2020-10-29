<template>
  <Navbar />
  <router-view />
  <section class="src-components-lista">
    <div class="table-responsive">
      <table class="table">
        <tr class="bg-succes text-black">
          <th>Nombre Completo</th>
          <th>Descripcion Gasto</th>
          <th>fecha</th>
          <th>importe</th>
        </tr>

        <tr
          class="bg-info text-black"
          v-for="(tarea, index) in tareas"
          :key="index"
        >
          <td>{{ tarea.name_user }}</td>
          <td>{{ tarea.desc_user }}</td>
          <td>{{ formatearFecha(tarea.fecha_created) }}</td>
          <td>{{ formatearDinero(tarea.spend_user) }}</td>
        </tr>
      </table>
        <div
          v-if="this.total() < 1000"
          id="total"
          :style="{ backgroundColor:'#008000' }"
          class="container"
        >
          MONTO TOTAL : $ {{ this.total() }}
        </div>
        <div
          v-else-if="this.total() > 1000 && this.total() < 5000"
          :style="{backgroundColor: '#cf3476'}"
          class="container"
        >
          MONTO TOTAL : $ {{ this.total() }}
        </div>
        <div
          v-else-if="this.total()>5000"
          :style="{ backgroundColor: '#ff8000' }"
          class="container"
        >
          MONTO TOTAL : $ {{ this.total() }}
        </div>
    </div>
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import Filtros from "../Filtros.js";

export default {
  name: "src-components-lista",
  mixins: [Filtros],
  props: [],

  components: {
    Navbar,
  },
  mounted() {
    this.getFromAxios();
  },
  data() {
    return {
      url: "https://5f833c646b97440016f4e4f5.mockapi.io/parcial",
      tareas: [],
    };
  },
  methods: {
    async getFromAxios() {
      try {
        let resp = await this.axios(this.url);
        console.log(resp.data);
        this.tareas = resp.data;
      } catch (err) {
        console.log("error en getdatos desde console log", err);
      }
    },
    total() {
      let total = 0;
      this.tareas.forEach((element) => {
        total = total + element.spend_user;
      });
      return total;
    },

    // convert(fecha){
    //   return new Date(fecha).toLocaleString();
    // }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-lista {
}
</style>
