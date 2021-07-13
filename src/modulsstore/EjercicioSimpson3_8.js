import router from '@/router'
import { create, all } from 'mathjs'

export default {
    namespaced: true,
    state: {
        listaSolucionIteracionSimpson3_8: [], 
        funcion: '',
        sumaSimpson3_8: '',
        simpson3_8: '',
        h:'',
        errorSimpson3_8: ''
    },
    mutations: {
        setListaSolucionIteracionSimpson3_8(state, payload) {
            state.listaSolucionIteracionSimpson3_8 = payload
        },
        setFuncion (state, payload) {
            state.funcion = payload
        },
        setSumaSimpson3_8(state, payload) {
            state.sumaSimpson3_8 = payload
        },
        setSimpson3_8(state, payload) {
            state.simpson3_8 = payload
        },
        setH( state, payload) {
            state.h = payload
        },
        setErrorSimpson3_8( state, payload) {
            state.errorSimpson3_8= payload
        },
    },
    actions: {
        resolverTrapecio({commit}, payload) {
            commit('setSimpson3_8', '')
            commit('setH', '')
            commit('setSumaSimpson3_8', '')
            commit('setListaSolucionIteracionSimpson3_8', [])
            commit('setFuncion', '')
            commit('setErrorSimpson3_8', '')
            try {
                payload.funcion = payload.funcion.toLowerCase()
                let presisionNum = payload.presision
                const config = { number: 'BigNumber', precision: presisionNum }
                const mathjs = create(all, config);
                mathjs.config({
                    number: 'BigNumber', precision: presisionNum
                })
                let contador3=1
                let listaSolucionSimpson3_8 = []
                let h = mathjs.evaluate(` (${payload.b} - ${payload.a}) /${payload.numIteraciones}`).toString();
                
                for (let i = 0; i < payload.numIteraciones; i++) {
                    let solucion
                    if (i==0) {
                        solucion = {
                            i:{
                                valor: `${i}`
                            }, 
                            x:{
                                valor: `${payload.a}`,
                                solucion: ""
                            }, 
                            y:{
                                valor: "0",
                                solucion: ""
                            },
                            c: {
                                valor: "1",
                            },
                            c_x_f: {
                                valor: "0",
                                solucion: ""
                            }
                        }
                    } else {
                        let valC
                        contador3++;
                        if (i == payload.numIteraciones-1) {
                            valC = 1
                        } else {
                            if (contador3 <= 3){
                                valC = 3
                            } else {
                                valC = 2
                                contador3 = 1
                            }
                            
                        }
                        solucion = {
                            i:{
                                valor: i
                            }, 
                            x:{
                                valor: mathjs.evaluate(`(${listaSolucionSimpson3_8[listaSolucionSimpson3_8.length-1].x.valor}) + (${h})`).toString(),
                                solucion: `(${listaSolucionSimpson3_8[listaSolucionSimpson3_8.length-1].x.valor}) + (${h})`
                            }, 
                            y:{
                                valor: "0",
                                solucion: ""
                            },
                            c: {
                                valor: `${valC}`,
                            },
                            c_x_f: {
                                valor: "0",
                                solucion: ""
                            }
                        }
                        
                    }
                    // f(xi)
                    solucion.y.valor = mathjs.format(mathjs.evaluate(payload.funcion, { x: mathjs.bignumber(solucion.x.valor) }).toString(), { fraction: 'decimal' }).replaceAll("\"", "");
                    solucion.y.solucion = payload.funcion.replaceAll("x", mathjs.bignumber(solucion.x.valor));
                    
                    
                    // calcular ci*f(xi)
                    solucion.c_x_f.valor  = mathjs.evaluate(`(${solucion.y.valor}) * (${solucion.c.valor})`).toString()
                    solucion.c_x_f.solucion  = `${solucion.y.valor} * ${solucion.c.valor}`


                    listaSolucionSimpson3_8.push(solucion)
                }

                // suma trapecio 
                let sumaSimpson3_8Str = ''
                listaSolucionSimpson3_8.forEach( element => sumaSimpson3_8Str += `${element.c_x_f.valor}+`)
                sumaSimpson3_8Str = sumaSimpson3_8Str.substring(0, sumaSimpson3_8Str.length-1)
                sumaSimpson3_8Str = sumaSimpson3_8Str.replaceAll("+", " + ")
                let sumaSimpson3_8 = {
                    valor: mathjs.evaluate(sumaSimpson3_8Str).toString(),
                    solucion: sumaSimpson3_8Str
                }

                //Simpson
                let simpson3_8Str = `3/8 * ${h} * ${sumaSimpson3_8.valor}`
                let simpson3_8 = {
                    valor: mathjs.evaluate(simpson3_8Str).toString(),
                    solucion: simpson3_8Str,
                }

                //Guardar los commit para las vistas
                commit('setSimpson3_8', simpson3_8)
                commit('setH', {
                    valor: h,
                    solucion: `(${payload.b} - ${payload.a}) /${payload.numIteraciones}`,
                })
                commit('setSumaSimpson3_8', sumaSimpson3_8)
                commit('setListaSolucionIteracionSimpson3_8', listaSolucionSimpson3_8)
                commit('setFuncion', payload.funcion)
            } catch (error) {
                commit('setErrorSimpson3_8', 'No se puede resolver el erjeciio')
                
            }
        }
    },
    getters: {

    }

}