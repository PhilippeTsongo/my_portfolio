<template>
    <div class="w-full">
      <HeaderComponent></HeaderComponent>

      <div class="pt-14">
        <ContactComponent></ContactComponent>
      </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderComponent from '../components/HeaderComponent.vue'
  import ContactComponent from '../components/ContactComponent.vue'

  export default {
    name: 'ContactView',
    components: {
      HeaderComponent,
      ContactComponent
    }
  
  
  }
  </script>
  