<template>
	<div class="w-full">
		<HeaderComponent></HeaderComponent>

		<AboutComponent></AboutComponent>
		
	</div>

</template>

<script>
// @ is an alias to /src
import HeaderComponent from '../components/HeaderComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'


export default {
name: 'HomeView',
components: {
  HeaderComponent,
  AboutComponent
}


}
</script>
