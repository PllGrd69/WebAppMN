<template>
  <div>
        <h1>Solucion: {{funcion}}</h1>
        <h1 class="red--text" v-if="errorTrapecio">{{errorTrapecio}}</h1>
        <h3>Itaraciones</h3>
        <p class="mt-5" v-for="(solucion, index) in listaSolucionIteracionTrapecio" :key="index"><!--{{solucion}}--></p>
        <br>
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
                        <th class="text-left">
                            Valor cxf
                        </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr
                         v-for="(solucion, index) in listaSolucionIteracionTrapecio" :key="index"
                        >
                        <td>{{solucion.i.valor}}</td>
                        <td>{{solucion.x.valor}}</td>
                        <td>{{solucion.y.valor}}</td>
                        <td>{{solucion.c_x_f.valor}}</td>
                      </tr>
                  </tbody>
                </template>
            </v-simple-table>
          </div>
          <!--Fin Tabla-->
<!--Inicio Cards-->
<v-row justify="center">
    <v-col>
        <v-card>
            <v-card-title class="grey darken-2">
                <span class="text-h5 white--text">Valor de H</span>
            </v-card-title>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Integral : {{h.valor}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{h.solucion}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-col>
</v-row>
<v-row justify="center">
    <v-col>
        <v-card>
            <v-card-title class="grey darken-2">
                <span class="text-h5 white--text">suma</span>
            </v-card-title>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Integral : {{sumaTrapecio.valor}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{sumaTrapecio.solucion}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-col>
</v-row>
<v-row justify="center">
    <v-col>
        <v-card>
            <v-card-title class="grey darken-2">
                <span class="text-h5 white--text">suma</span>
            </v-card-title>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Valor : {{trapecio.valor}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{trapecio.solucion}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-col>
</v-row>
<!--Fin Cards-->
<!--
        <h3>Valor de H</h3>
        <p>{{ h }}</p>
        <br>

        <h3>Suma trapecio</h3>
        <p>{{sumaTrapecio}}</p>
        <br>

        <h3>Trapecio</h3>
        <p>{{trapecio}}</p>-->
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed: {
        ...mapState('ejercicioTrapecio', ['listaSolucionIteracionTrapecio', 'errorTrapecio', 'funcion', 'sumaTrapecio','h', 'trapecio'])
    },
}
</script>

<style>

</style>