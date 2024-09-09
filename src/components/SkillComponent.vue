<template>
    
    <div class="px-8 md:px-24 pt-24 mb-20 transition-opacity duration-2000 ease-out transform translate-y-4 opacity-0 animate-fadeIn">
      
        <div class="text-center w-full">
            <div class="relative h-24 text-center w-full z-10">
                <h1 class="absolute z-50 text-center w-full text-black font-bold text-4xl">Skills</h1>
                <h1 class="absolute z-10 text-center w-full mt-2 text-[#878684] font-bold text-6xl">Skills</h1>
            </div>

            <p class="mt-10 text-gray-700">
                Highly skilled Full Stack Developer with enough experience to design and implement robust web applications
                Php, Php Laravel, Django, javaScript, Node js, Vue js, React Tailwind css, css, html, bootstrap, Git, MVC, Database architecture, Api design, Api integration and testing
            </p>
        </div>

        <div class="md:grid md:grid-cols-3 md:justify-between gap-5 mt-14">
            <div class="py-4 px-7 bg-black rounded-md text-center py-20 border-l-4 border-yellow-500 hover:border-0">
                <font-awesome-icon icon="code" class="text-white" />
                <h2 class="font-bold text-white mt-2 pb-5 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 hover:cursor-pointer">Web Design</h2>
            </div>

            <div class="py-4 px-7 mt-5 md:mt-0 bg-black rounded-md text-center py-20 border-l-4 border-yellow-500 hover:border-0">
                <font-awesome-icon icon="code" class="text-white" />
                <h2 class="font-bold text-white mt-2 pb-5 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 hover:cursor-pointer">Front Development</h2>
            </div>

            <div class="py-4 px-7 mt-5 md:mt-0 bg-black rounded-md text-center py-20 border-l-4 border-yellow-500 hover:border-0">
                <font-awesome-icon icon="code" class="text-white" />
                <h2 class="font-bold text-white mt-2 pb-5 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 hover:cursor-pointer">Back end Development</h2>
            </div>
        </div>
        <div class="mt-14 rounded-md border border-gray-200 px-10 py-10 mb-82">
            
            <h3>Programming Languages & Frameworks</h3>

            <div class="md:grid md:grid-cols-2 md:justify-between mt-10 gap-10">
                
                <SkillListComponent 
                    v-for="(skill, index) in skills" :key="index" 
                    :skillName="skill.skillName"
                    :skillLevel="skill.skillLevel"
                    :skillImage="skill.skillImage"
                />
                
            </div>
            
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SkillListComponent from './SkillListComponent.vue';

    export default {
        name: "SkillComponent",
        components: {
            SkillListComponent
        },

        data(){
            return{
                skills: [],
            }
        },

        mounted(){
            this.fetchSkills()
        },

        methods:{
            fetchSkills(){
                fetch('skills.json')
                .then((response) =>response.json())
                .then((data) => {
                    this.skills = data
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        }
    }

</script>