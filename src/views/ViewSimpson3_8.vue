<template>
  <div>
      <h1>Metodo Simpson 3/8</h1>
      <Simpson/>
      <Solucion/>
  </div>
</template>

<script>
import Simpson from '@/components/simpson3_8/Simpson'
import Solucion from '@/components/simpson3_8/Solucion'
export default {
    components: {
        Simpson,
        Solucion,
    },
}
</script>

<style>

</style>