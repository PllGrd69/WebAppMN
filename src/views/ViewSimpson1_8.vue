<template>
  <div>
      <h1>
          Metodo Simpson 1/8
      </h1>
      <Simpson/>
      <Solucion/>
  </div>
</template>

<script>
import Simpson from '@/components/simpson/Simpson'
import Solucion from '@/components/simpson/Solucion'
export default {
    components: {
        Simpson,
        Solucion,
    },
}
</script>

<style>

</style>