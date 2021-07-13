<template>
  <div class="wrapper">
    <div class="outer-container">
  <div class="image-container" style="background-image: url('https://1.bp.blogspot.com/-w6qKoNevHNA/X5r-0hOG_8I/AAAAAAAAQbg/3J-0Oj89KP4k158Z2DMAzmf2TlR6xPVrwCLcBGAsYHQ/s700/que-son-metodos-numericos-ecuaciones-de-calculo.png');">
    
    <h2 class="section-title on-dark">
      <span class="paralax-title">
        Metodos Numericos
      </span>
    </h2>
  </div>
  
  <h2 class="section-title">
    <span class="paralax-title">
      Metodos Numericos
    </span>
  </h2>
</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
    },
  }

  let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if(didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)
</script>
<style scoped>
 body {
	 height: 100vh;
	 margin: 0;
	 background-color: #353535;
	 font-family: "ubuntu", Arial, sans-serif;
	 overflow-x: hidden;
	 display: grid;
	 
}
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
 
/*del cuadrito */
 .outer-container {
	 max-width: 600px;
	 margin: auto;
	 width: 90%;
	 padding: 20px 0px;
	 position: relative;
}
 .image-container {
	 padding-bottom: 100%;
	 background: black;
	 position: relative;
	 overflow: hidden;
	 z-index: 2;
	 background-size: cover;
	 background-position: center;
}
 .section-title {
	 margin: 0;
	 font-size: 64px;
	 width: 100%;
	 text-align: center;
	 position: absolute;
	 top: 50%;
	 left: -30%;
	 transform: translateY(-50%);
	 z-index: 1;
	 white-space: nowrap;
}
 .section-title.on-dark {
	 color: white;
}
 .section-title span {
	 position: relative;
	 display: block;
}
 
</style>