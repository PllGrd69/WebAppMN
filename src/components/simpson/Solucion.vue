<template>
  <div >
      <!--<h2>Funcion: {{funcion}}</h2> -->
      <h1 class="red--text" v-if="errorSimpson">{{errorSimpson}}</h1>
      <div class="table-wrapper">
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            N°
          </th>
          <th class="text-left">
            Valor x
          </th>
          <th class="text-left">
            Valor y
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
         v-for="(solucion, index) in listaSolucionIteracion" :key="index"
        >
          <td>{{solucion.i.valor}}</td>
          <td>{{solucion.x.valor}}</td>
          <td>{{solucion.y.valor}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
     <!-- <div class="mt-5" v-for="(solucion, index) in listaSolucionIteracion" :key="index">
      {{solucion}}
      <h2>Iteracion :{{solucion.i.valor}}</h2>
      <h2>Valor x:{{solucion.x.valor}}</h2>
      <h2>Valor y :{{solucion.y.valor}}</h2>
      </div>
      <h2 class="user-box">integral</h2>-->
      <!--<p class="user-box">{{integral}}</p> -->
  <v-row justify="center">
    <v-col

    >
      <v-card>
        <v-card-title class="grey darken-2">
          <span class="text-h5 white--text">Integral</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Integral : {{integral.valor}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-content >
              <v-list-item-title>{{integral.solucion}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-divider inset></v-divider>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  </div> 
  
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed: {
        ...mapState('ejercicioSimpson', ['listaSolucionIteracion', 'funcion', 'errorSimpson', "integral"])
    },
}
</script>

<style scoped>

</style>