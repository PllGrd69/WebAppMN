<template>
  <v-card
    dark
  >
    <v-toolbar>
    
      <v-app-bar-nav-icon 
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>
 
      <v-toolbar-title 
        :class="{'': $vuetify.breakpoint.smAndDown, 'ml-6': $vuetify.breakpoint.mdAndUp}">
        <v-chip
            pill
            class="m-1 p-1"
          >
            <v-avatar left>
              <v-img :src="require('@/assets/img/foto.jpg')"></v-img>
            </v-avatar>
            Mario Ccallo Luque 
          </v-chip>
      </v-toolbar-title>
 
      <v-spacer>
        <div class="wrapper">
        <h1>Web App Metodos Numericos</h1>
        </div>
      </v-spacer>
        <router-link to="/" class="flm">
          <v-btn
            dark
            class="text-capitalize mr-2 v-btn--active"
            v-show="$vuetify.breakpoint.lgOnly"
          >
            Home
          </v-btn>
        </router-link> 

        <router-link :to="{name:'Simpson1_8'}" class="flm">
          <v-btn
            dark
            class="text-capitalize mr-2"
            v-show="$vuetify.breakpoint.lgOnly"
          >
            Simpson 1/8
          </v-btn>
        </router-link> 
        <router-link :to="{name:'Simpson3_8'}" class="flm">
          <v-btn
            dark
            class="text-capitalize mr-2"
            v-show="$vuetify.breakpoint.lgOnly"
          >
            Simpson 3/8
          </v-btn>
        </router-link> 

        <router-link to="/trapecio" class="flm">
          <v-btn
            dark
            class="text-capitalize mr-2"
            v-show="$vuetify.breakpoint.lgOnly"
          >
            Trapecio
          </v-btn>
        </router-link> 

<router-link to="/contacto" class="flm">
        <v-btn
          dark
          class="text-capitalize mr-14"
          v-show="$vuetify.breakpoint.lgOnly"
        >
          Factorización LU
        </v-btn>
</router-link> 
 <!--
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
 
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
 
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    
 -->
 </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      height="auto"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"            
        >

         <router-link to="/" class="flm">
          <v-list-item>
           
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              home
            </v-list-item-title>
          </v-list-item>
  </router-link>


          <router-link :to="{name:'Simpson1_8'}" class="flm">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Simpson 1/8
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link :to="{name:'Simpson3_8'}" class="flm">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Simpson 3/8
              </v-list-item-title>
            </v-list-item>
          </router-link>

<router-link to="/trapecio" class="flm">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Trapecio
            </v-list-item-title>
          </v-list-item>
 </router-link>

<router-link to="/contacto" class="flm">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Factorización LU
            </v-list-item-title>
          </v-list-item>
 </router-link> 
        </v-list-item-group>
      </v-list>        
    </v-navigation-drawer>
 
  </v-card>
</template>

<script>
  export default {
    name: 'Menu',
 
    data: () => ({
      drawer: false,
      group: null,      
      items: [
        { title: 'Misión' },
        { title: 'Objetivo' },
        { title: 'Visión' },        
      ],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
 
    methods: {
      menuItems() {
        return this.menu;
      }
    }
 
  }
</script>

<style scope>
 
  .bgsel:hover {
    background: #afaeae;
  }
 
  .flm:link {
    text-decoration: none;
  }
 
  .v-application a {
    color: #ffffff!important;
  } 
  
  /*Web app */
   a {
	 text-decoration: none;
	 color: #9ca0b1;
}
 .wrapper {
	 text-align: center;
}
 .wrapper h1 {
	 color: #fff;
	 font-size: 32px;
	 text-transform: uppercase;
	 font-weight: 700;
	 background: linear-gradient(to right, #ffffff 10%, #25abe8 50%, #000000 60%);
	 background-size: auto auto;
	 background-clip: border-box;
	 background-size: 200% auto;
	 color: #fff;
	 background-clip: text;
	 -webkit-background-clip: text;
	 -webkit-text-fill-color: transparent;
	 animation: textclip 1.5s linear infinite;
	 display: inline-block;
}
 @keyframes textclip {
	 to {
		 background-position: 200% center;
	}
}
 
</style>