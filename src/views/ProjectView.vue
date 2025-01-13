<template>
    <div class="w-full">
        <HeaderComponent></HeaderComponent>
    </div>
    <div>
      <ProjectComponent></ProjectComponent>
      <ContactComponent></ContactComponent>

      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderComponent from '../components/HeaderComponent.vue';
  import ProjectComponent from '@/components/ProjectComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import ContactComponent from '@/components/ContactComponent.vue';

  export default {
    name: 'ProjectView',
    components: {
      HeaderComponent,
      ProjectComponent,
      FooterComponent,
      ContactComponent
    }
  
  
  }
  </script>
  