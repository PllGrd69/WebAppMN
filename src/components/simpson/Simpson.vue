<template>
  <v-form
    ref="form"
  >
    <v-text-field
      v-model.trim="simpsonInput.funcion"
      label="Funcion"
    ></v-text-field>

    <v-text-field
      type="number"
      v-model="simpsonInput.x1"
      label="x1 - limite interior"
    ></v-text-field>

    <v-text-field
      type="number"
      v-model="simpsonInput.xf"
      label="xf - limite superior"
    ></v-text-field>

    <v-text-field
      type="number" 
      v-model="simpsonInput.numIteraciones"
      label="n - Numero de Intervalos"
    ></v-text-field>

    <v-text-field
      type="number"
      v-model.number="simpsonInput.presision"
      label="Presición del número"
    ></v-text-field>

    <div class="flex">
      <a href="#0" class="bttn" ></a>
    </div>
    <v-btn
    @click="resolverHomerSimpson(simpsonInput)" 
    color="accent"
    depressed
    elevation="2"
    outlined
  >Resolver</v-btn>
  </v-form>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data() {
    return {
      simpsonInput: {
        numIteraciones: "13",
        xf: "5",
        x1: "1",
        funcion: '5 * X^2 - (x/3)',
        presision:8
      }
    }
  },
  
  methods: {
    ...mapActions('ejercicioSimpson', ['resolverHomerSimpson'])
  },
  created () {
  },
}
</script>

<style >

</style>