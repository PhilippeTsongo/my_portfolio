<template>
    <div class="w-full">
      <HeaderComponent></HeaderComponent>

      <div class="pt-14">
        <ContactComponent></ContactComponent>

        <FooterComponent></FooterComponent>
      </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderComponent from '../components/HeaderComponent.vue'
  import ContactComponent from '../components/ContactComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'


  export default {
    name: 'ContactView',
    components: {
      HeaderComponent,
      ContactComponent,
      FooterComponent

    }
  
  
  }
  </script>
  