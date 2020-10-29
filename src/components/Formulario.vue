<template>
  <Navbar />
  <router-view />
  <section class="src-components-formulario">
    <h1>FORMULARIO GASTOS</h1>
    <div class="jumbotron">
      <form novalidate autocomplete="off" @submit.prevent="sendForm()">
        <div class="form-group">
          <label for="fname">Full name:</label><br />
          <input
            type="text"
            id="fname"
            class="form-control"
            v-model="$v.f.name_user.$model"
          />
          <div
            v-if="$v.f.name_user.$error && $v.f.name_user.$dirty"
            class="alert alert-danger mt-1"
          >
          <div v-if="$v.f.name_user.required.$invalid">
            {{$v.f.name_user.required.$message}}
          </div>
          <div v-if="$v.f.name_user.minLength.$invalid">
            {{$v.f.name_user.minLength.$message}}
          </div>
          <div v-if="$v.f.name_user.maxLength.$invalid">
            {{$v.f.name_user.maxLength.$message}}
          </div>
           
          </div>
        </div>
        <br />
        <div class="form-group">
          <label for="lname">Descripcion</label><br />
          <input
            type="text"
            id="lname"
            name="lname"
            class="form-control"
            v-model="$v.f.desc_user.$model"
          />
          <div
            v-if="$v.f.desc_user.$error && $v.f.desc_user.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.desc_user.required.$invalid">
              {{ $v.f.desc_user.required.$message }}
            </div>
          </div>
        </div>
        <div class="form group">
          <label for="todo">Gastos</label><br />
          <input
            type="number"
            id="todo"
            name="todo"
            class="form-control"
            v-model.number="$v.f.spend_user.$model"
          />
          <div
            v-if="$v.f.spend_user.$error && $v.f.spend_user.$dirty"
            class="alert alert-danger mt-3"
          >
            <div v-if="$v.f.spend_user.required.$invalid">
              {{ $v.f.spend_user.required.$message }}
            </div>
          </div>
        </div>

        <div class="form-group">
          <input
            type="submit"
            class="btn btn-succes mt-5"
            value="Enviar"
            :disabled="$v.$invalid"
          />
        </div>
      </form>
    </div>
    <pre>{{ $v }}</pre>
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import { required, minLength, maxLength } from "@vuelidate/validators";
export default {
  name: "src-components-formulario",
  props: [],
  components: {
    Navbar,
  },
  mounted() {},
  data() {
    return {
      f: this.resetCells(),
      url: "https://5f833c646b97440016f4e4f5.mockapi.io/parcial",
    };
  },
  validations: {
    f: {
      name_user: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(15),
      },
      desc_user: { required },
      spend_user: {
        required,
      },
    },
  },
  methods: {
    resetCells() {
      return {
        name_user: "",
        desc_user: "",
        spend_user: "",
      };
    },
    async sendForm() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        let form = this.f;
        console.log(form);
        await this.sendFormToAxios(form);
        this.f = this.resetCells();
        this.$v.$reset();
      } else {
        this.f = this.resetCells();
        this.$v.$reset();
      }
    },
    async sendFormToAxios(form) {
      try {
        let resp = await this.axios.post(this.url, form, {
          "content-type": "application/json",
        });
        console.log(resp.data);
      } catch (err) {
        console.log("es un error desde console log >>>>>>", err);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-formulario {
}
</style>
