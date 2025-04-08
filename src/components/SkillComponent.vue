<template>
    
    <div class="px-5 md:px-24 pt-24 mb-20 transition-opacity duration-2000 ease-out transform translate-y-4 opacity-0 animate-fadeIn">
      
        <div class="text-center w-full mt-10">
            <div class="relative h-24 text-center w-full z-10">
                <h1 class="absolute z-50 text-center w-full text-black font-bold text-4xl">Skills</h1>
                <h1 class="absolute z-10 text-center w-full mt-2 text-[#878684] font-bold text-6xl">Skills</h1>
            </div>

            <p class="mt-10 text-gray-700">
                Highly skilled Full Stack Developer with enough experience to design and implement robust web applications
                <div class="text-yellow-500">
                    Php, Php Laravel, Python, Django, Java, Spring Boot, JavaScript, Node js, Vue js, React js, Tailwind css, Css, Html, Bootstrap, MVC, Database architecture(PostgreSql, MySql), Api design, Api integration and testing, Git, AWS 
                </div>
            </p>
        </div>

        <div class="md:grid md:grid-cols-3 md:justify-between gap-5 mt-14">
            <div class="py-4 px-7 bg-black rounded-md text-center  border-l-4 border-yellow-500 hover:border-l-4 hover:border-[black]">
                <font-awesome-icon icon="code" class="text-white" />
                <h2 class="font-bold text-white mt-2 border-b-2 border-[black] pb-5 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 hover:cursor-pointer">Web Design</h2>
            </div>

            <div class="py-4 px-7 mt-5 md:mt-0 bg-black rounded-md text-center border-l-4 border-yellow-500 hover:border-l-4 hover:border-[black]">
                <font-awesome-icon icon="code" class="text-white" />
                <h2 class="font-bold text-white mt-2 pb-5 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 hover:cursor-pointer">Frontend Development</h2>
            </div>

            <div class="py-4 px-7 mt-5 md:mt-0 bg-black rounded-md text-center border-l-4 border-yellow-500 hover:border-l-4 hover:border-[black]">
                <font-awesome-icon icon="code" class="text-white" />
                <h2 class="font-bold text-white mt-2 pb-5 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 hover:cursor-pointer">Backend Development</h2>
            </div>
        </div>
        <div class="mt-14 rounded-md border border-gray-200 px-5 py-5 md:px-10 md:py-10 mb-82">
            
            <h3>Programming Languages & Frameworks</h3>

            <div class="border border-gray-200 mt-5 md:mt-10 rounded-md flex justify-between">
                <div class="border-l-4 border-yellow-500 rounded-l-md pr-10 w-1/3 md:text-center border-r py-5 hover:bg-yellow-500 hover:text-white hover:cursor-pointer hover:rounded-l-md"
                    @click="fetchSkills('Frontend')">
                    <span class="ml-5">Frontend</span>
                </div>
                <div class="pr-10 w-1/3 md:text-center border-r border-yellow-500 py-5 hover:bg-yellow-500 hover:text-white hover:cursor-pointer"
                    @click="fetchSkills('Backend')">
                    <span class="ml-5">Backend</span>
                </div>
                <div class="border-r-4 border-yellow-500 rounded-r-md py-5 w-1/3 md:text-center hover:bg-yellow-500 hover:text-white hover:cursor-pointer hover:rounded-r-md"
                    @click="fetchSkills('Database')">
                    <span class="ml-5">Database</span>
                </div>
            </div>

            <div class="md:grid md:grid-cols-3 md:justify-between gap-5">
                
                <SkillListComponent 
                    v-for="(skill, index) in skills" :key="index" 
                    :skillName="skill.skillName"
                    :skillLevel="skill.skillLevel"
                    :skillImage="skill.skillImage"
                    class="mt-5"
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
            fetchSkills(category){

                fetch('skills.json')
                .then((response) =>response.json())
                .then((data) => {
                    if(category){
                        const filteredSkills = data.filter(
                            filteredSkill => filteredSkill.category === category
                        );
                        this.skills = filteredSkills;
                    }else{
                        this.skills = data;
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        }
    }

</script>