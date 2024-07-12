<template>
	<div class="w-full">
		<HeaderComponent></HeaderComponent>

		<AboutComponent></AboutComponent>
		
		<FooterComponent></FooterComponent>

	</div>

</template>

<script>
// @ is an alias to /src
import HeaderComponent from '../components/HeaderComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'


export default {
name: 'HomeView',
components: {
  HeaderComponent,
  AboutComponent,
  FooterComponent
}


}
</script>
