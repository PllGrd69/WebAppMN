import router from '@/router'
import { create, all } from 'mathjs'

export default {
    namespaced: true,
    state: {
        listaSolucionIteracion: [],
        funcion: '',
        errorSimpson: '',
        integral: ''
    },
    mutations: {
        setListaSolucionIteracion(state, payload) {
            state.listaSolucionIteracion = payload
        },
        setFuncion (state, payload) {
            state.funcion = payload
        },
        setErrorSimpson(state, payload) {
            state.errorSimpson = payload
        },
        setIntegral(state, payload) {
            state.integral = payload
        },
    },
    actions: {
        resolverHomerSimpson({commit, s}, payload) {
            //Configurando
            commit('setListaSolucionIteracion', [])
            commit('setFuncion', '')
            commit('setErrorSimpson', '')
            commit('setIntegral', '')
            try{
                payload.funcion = payload.funcion.toLowerCase()
                const config = { number: 'BigNumber', precision: payload.presision}
                const mathjs = create(all, config);
                mathjs.config({
                    number: 'BigNumber', precision: payload.presision
                })
                let h = mathjs.evaluate(` (${payload.xf} - ${payload.x1}) /${payload.numIteraciones}`).toString();
                let solucionSimpson = [] //Se guardan los numeros de iteraciones
                // let solucion = {i:{}, x:{}, y:{}} //Objeto que sirve de modelo para la vista
                for (let i = 1; i <= payload.numIteraciones; i++) {
                    let solucion
                    if (i==1){
                        solucion = {
                            i:{
                                valor: `${i}`
                            }, 
                            x:{
                                valor: `${payload.x1}`,
                                solucion: `${payload.x1}`
                            }, 
                            y:{
                                valor: "0",
                                solucion: ""
                            }
                        }
                    } else {
                        solucion = {
                            i:{
                                valor: i
                            }, 
                            x:{
                                valor: mathjs.evaluate(`(${solucionSimpson[solucionSimpson.length-1].x.valor}) + (${h})`).toString(),
                                solucion: `(${solucionSimpson[solucionSimpson.length-1].x.valor}) + (${h})`
                            }, 
                            y:{
                                valor: "0",
                                solucion: ""
                            }
                        }
                    }
                    
                    // let calcularY = 
                    solucion.y.valor = mathjs.format(mathjs.evaluate(payload.funcion, { x: mathjs.bignumber(solucion.x.valor) }).toString(), { fraction: 'decimal' }).replaceAll("\"", "");
                    solucion.y.solucion = payload.funcion.replaceAll("x", mathjs.bignumber(solucion.x.valor));
                    solucionSimpson.push(solucion)
                }

                //Calcular la integral 

                // inicia en  i = 2      -------------- incremente en i = i + 2      ----- hasta   n
                let sumatoriaYiPrimer = ""
                for (let index = 1; index < solucionSimpson.length; index+=2) sumatoriaYiPrimer += solucionSimpson[index].y.valor + "+"
                sumatoriaYiPrimer = sumatoriaYiPrimer.substring(0,sumatoriaYiPrimer.length-1)
                
                // inicia en  i =3    ------- incremente en i = i + 2      ----- hasta   n - 1
                let sumatoriaYiSegundo=""
                for (let index = 2; index < solucionSimpson.length-1; index+=2) sumatoriaYiSegundo += solucionSimpson[index].y.valor + "+"
                sumatoriaYiSegundo = sumatoriaYiSegundo.substring(0,sumatoriaYiSegundo.length-1)
                
                let integralStr = `${h}/3 * (${solucionSimpson[0].y.valor} + 4 * ( ${sumatoriaYiPrimer} ) + 2 * (${sumatoriaYiSegundo}) + ${solucionSimpson[solucionSimpson.length-1].y.valor})`
                let ingretal = {
                    valor: mathjs.evaluate(integralStr).toString(),
                    solucion: integralStr
                }
                commit('setIntegral', ingretal)
                commit('setListaSolucionIteracion', solucionSimpson)
                commit('setFuncion', payload.funcion)
            } catch (e) {
                commit('setErrorSimpson', 'Error al resolver la solucion')
            }
            
        }
        
    },
    getters: {

    }

}