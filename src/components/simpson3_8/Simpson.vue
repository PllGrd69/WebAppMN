<template>
  <v-form
    ref="form"
  >
    <v-text-field
      v-model.trim="trapecioInput.funcion"
      label="Funcion"
    ></v-text-field>

    <v-text-field
      type="number"
      v-model="trapecioInput.a"
      label="a"
    ></v-text-field>

    <v-text-field
      type="number"
      v-model="trapecioInput.b"
      label="b"
    ></v-text-field>
    

    <v-text-field
      type="number" 
      v-model="trapecioInput.numIteraciones"
      label="n - Numero de Intervalos"
    ></v-text-field>

    <v-text-field
      type="number"
      v-model.number="trapecioInput.presision"
      label="Presición del número"
    ></v-text-field>

    <v-btn
      color="warning"
      @click="resolverTrapecio(trapecioInput)"
    >
      Resolver
    </v-btn>
  </v-form>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data() {
    return {
      trapecioInput: {
        numIteraciones: "12",
        a: "0",
        b: "10",
        funcion: 'x  * e^(-x)',
        presision:8
      }
    }
  },
  
  methods: {
    ...mapActions('ejercicioSimpson3_8', ['resolverTrapecio'])
  },
  created () {
  },
}
</script>

<style>

</style>