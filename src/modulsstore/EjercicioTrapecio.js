import router from '@/router'
import { create, all } from 'mathjs'

export default {
    namespaced: true,
    state: {
        listaSolucionIteracionTrapecio: [], 
        funcion: '',
        sumaTrapecio: '',
        trapecio: '',
        h:'',
        errorTrapecio: ''
    },
    mutations: {
        setListaSolucionIteracionTrapecio(state, payload) {
            state.listaSolucionIteracionTrapecio = payload
        },
        setFuncion (state, payload) {
            state.funcion = payload
        },
        setSumaTrapecio(state, payload) {
            state.sumaTrapecio = payload
        },
        setTrapecio(state, payload) {
            state.trapecio = payload
        },
        setH( state, payload) {
            state.h = payload
        },
        setErrorTrapecio( state, payload) {
            state.errorTrapecio= payload
        },
    },
    actions: {
        resolverTrapecio({commit}, payload) {
            commit('setTrapecio', '')
            commit('setH', '')
            commit('setSumaTrapecio', '')
            commit('setListaSolucionIteracionTrapecio', [])
            commit('setFuncion', '')
            commit('setErrorTrapecio', '')
            try {
                payload.funcion = payload.funcion.toLowerCase()
                let presisionNum = payload.presision
                const config = { number: 'BigNumber', precision: presisionNum }
                const mathjs = create(all, config);
                mathjs.config({
                    number: 'BigNumber', precision: presisionNum
                })
                let listaSolucionTrapecio = []
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
                        if (i == payload.numIteraciones-1) {
                            valC = 1
                        } else {
                            valC = 2
                        }
                        solucion = {
                            i:{
                                valor: i
                            }, 
                            x:{
                                valor: mathjs.evaluate(`(${listaSolucionTrapecio[listaSolucionTrapecio.length-1].x.valor}) + (${h})`).toString(),
                                solucion: `(${listaSolucionTrapecio[listaSolucionTrapecio.length-1].x.valor}) + (${h})`
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


                    listaSolucionTrapecio.push(solucion)
                }

                // suma trapecio 
                let sumaTrapecioStr = ''
                listaSolucionTrapecio.forEach( element => sumaTrapecioStr += `${element.c_x_f.valor}+`)
                sumaTrapecioStr = sumaTrapecioStr.substring(0, sumaTrapecioStr.length-1)
                sumaTrapecioStr = sumaTrapecioStr.replaceAll("+", " + ")
                let sumaTrapecio = {
                    valor: mathjs.evaluate(sumaTrapecioStr).toString(),
                    solucion: sumaTrapecioStr
                }

                //Trapecio
                let trapecioStr = `${h}/2 * ${sumaTrapecio.valor}`
                let trapecio = {
                    valor: mathjs.evaluate(trapecioStr).toString(),
                    solucion: trapecioStr,
                }
                commit('setTrapecio', trapecio)
                commit('setH', {
                    valor: h,
                    solucion: `(${payload.b} - ${payload.a}) /${payload.numIteraciones}`,
                })
                commit('setSumaTrapecio', sumaTrapecio)
                commit('setListaSolucionIteracionTrapecio', listaSolucionTrapecio)
                commit('setFuncion', payload.funcion)
            } catch (error) {
                commit('setErrorTrapecio', 'No se puede resolver el erjeciio')
                
            }
        }
    },
    getters: {

    }

}