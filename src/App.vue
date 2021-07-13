<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
     
    
    </v-app-bar> -->
<Menu/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/general/Menu'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Menu,
  },
};
</script>
