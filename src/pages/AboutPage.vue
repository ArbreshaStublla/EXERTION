<template>
<div class="abouttemplate">
  <NavBar/>
      <AboutHero/>
      <AboutSection/>
      <AboutService/>
      <AboutCharts/>
      <div class="lamp" :style="{ display: lampDisplay }">
      <div class="lampposition"><img src="../assets//lampb.jpg"></div>
    </div>
      <AboutUs/>
      <FooterSection/>
</div>
   
   
 
</template>

<script>
import NavBar from "../components/NavBar.vue";
import AboutHero from "../modules/About/AboutHero.vue";
import AboutSection from "@/modules/About/AboutSection.vue";
import AboutService from "@/modules/About/AboutService.vue";
import AboutCharts from "@/modules/About/AboutCharts.vue"
import AboutUs from "@/modules/About/AboutUs.vue";
import FooterSection from '@/components/FooterSection.vue';

export default {
  components: {
    NavBar, 
    AboutHero,
    AboutSection,
    AboutService,
    AboutCharts,
    AboutUs,
    FooterSection
  },
  data() {
    return {
      lampDisplay: 'block'
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.lampDisplay = window.innerWidth >= 800 ? 'block' : 'none';
    }
  }
}
</script>

<style scoped >
.abouttemplate {
  background-color: #131313;
}
.lamp {
  position: relative;
}
.lampposition {
  position: absolute;
  top: 95px;
  left: 10px;
}
</style>