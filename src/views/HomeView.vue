<template>
    <div class="w-full">
        <HeaderComponent></HeaderComponent>

        <div class="md:flex md:justify-between px-8 md:px-24 pt-14 md:pt-36 transition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn z-10">
            <div class="w-full md:w-2/4 left-0 mt-36">
                <p class="uppercase text-yellow-500">Hello!</p>
                <div class="mt-8">
                    <div class="text-4xl md:text-4xl font-bold">I'm <span class="text-yellow-500">Philippe Tahakava Tsongo </span></div>
                    <div class="mt-5 text-xl"> A full stack developer</div>
                </div>
                <div class="flex mt-14">
                    <div class="bg-yellow-500 text-white px-3 py-2 rounded-full w-36 text-center">
                        <a ><font-awesome-icon icon="code"/> Hire me</a>
                    </div>
                    <div class="border border-yellow-500 text-yellow-500 px-3 py-2 rounded-full w-36 text-center ml-2">
                        <router-link :to="{name: 'projects'}" ><font-awesome-icon icon="code"/> Projects</router-link>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-2/4 mt-14 md:0 transition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn"> 
                <img src="../../public/image.png" class="grayscale hover:filter hover:grayscale-0 transition duration-500" alt="Philippe Tsongo Tahakava">
            </div>
        </div>
    </div>

    <AboutComponent></AboutComponent>
    <ExperienceComponent></ExperienceComponent>
    <ProjectComponent></ProjectComponent>
    <SkillComponent></SkillComponent>

    <EducationComponent></EducationComponent>
    <ContactComponent></ContactComponent>

    <FooterComponent></FooterComponent>

</template>

<script>
// @ is an alias to /src
import HeaderComponent from '../components/HeaderComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import ExperienceComponent from '../components/ExperienceComponent.vue'
import ProjectComponent from '../components/ProjectComponent.vue'
import SkillComponent from '../components/SkillComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'


export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        AboutComponent,
        ExperienceComponent,
        ProjectComponent,
        SkillComponent,
        ContactComponent,
        FooterComponent,
        EducationComponent
    }


}
</script>
