<template>
	<div class="w-full">
		<HeaderComponent></HeaderComponent>
	</div>
	<div>
		<SkillComponent></SkillComponent>
		<ContactComponent></ContactComponent>

		<FooterComponent></FooterComponent>
	</div>
</template>

<script>
// @ is an alias to /src
import SkillComponent from '@/components/SkillComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import ContactComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';


export default {
	name: 'SkillView',
	components: {
		HeaderComponent,
		SkillComponent,
		ContactComponent,
		FooterComponent,
	}


}
</script>