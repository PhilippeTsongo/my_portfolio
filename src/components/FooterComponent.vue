<template>
    <div class="w-full bg-black text-white py-8 px-5 md:px-24">
        <div class="md:grid grid-cols-3 gap-24 w-full">
            <div class="">
                <h2 class="font-bold pt-5 md:pt-0">About</h2>
                <p class="mt-10 text-gray-400">I am a Full-stack Software Engineer with 4+ of experience building, implementing and deploying 
                    robust web applications,
                    I have contributed to the development of successful projects as backend and frontend developer using various programming
                    languages such as Python, Php, Java, and Javascript and frameworks such as React js, Vue js, Django, Laravel, Spring Boot and Nest js.
                </p>
            </div>
            <div class="mt-10 md:mt-0">
                <h2 class="font-bold">Links</h2>
                <div class="mt-10 text-gray-400">  <router-link :to="{name: 'home'}" class="hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"><font-awesome-icon icon="arrow-right"/> <span class="ml-2">Home</span> </router-link> </div>
                <div class="mt-5 text-gray-400">  <router-link :to="{name: 'projects'}" class="hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"><font-awesome-icon icon="arrow-right"/> <span class="ml-2"> Projects</span> </router-link> </div>
                <div class="mt-5 text-gray-400">  <router-link :to="{name: 'skills'}" class="hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"><font-awesome-icon icon="arrow-right"/> <span class="ml-2">Skills</span></router-link> </div>
                <div class="mt-5 text-gray-400">  <router-link :to="{name: 'contact'}" class="hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"><font-awesome-icon icon="arrow-right"/> <span class="ml-2">Contact</span></router-link> </div>
                <div class="mt-5 text-gray-400">  <router-link :to="{name: 'about'}" class="hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"><font-awesome-icon icon="arrow-right"/> <span class="ml-2">About</span></router-link> </div>
            </div>

            <div class="mt-10 md:mt-0">
                <h2 class="font-bold">Do you have a question?</h2>
                <div class="mt-5 text-gray-400">
                    <p class="">Find me here</p>

                    <div class="mt-5">
                        <p class="">
                            <font-awesome-icon icon="location"/> <span class="ml-2"> Kigali Rwanda, KN 123 Str </span>
                        </p>
                        <p class="mt-5">
                            <font-awesome-icon icon="phone"/> <span class="ml-2"> +250 783 793 095 </span>
                        </p>

                        <p class="mt-5">
                            <font-awesome-icon icon="envelope"/> <span class="ml-2"> philippetsongo90@gmail.com </span>
                        </p>

                        <h2 class="mt-5">Social media</h2>
                        <div class="flex gap-10 mt-5">
                            <div class="bg-white text-center rounded-full w-7 h-7 ">
                                <a class="mt-3" href="https://www.linkedin.com/in/philippe-tsongo-701838228" target="_blank"> <i class="fa fa-linkedin"></i></a>
                            </div>
                            <div class="bg-white text-center rounded-full w-7 h-7 ">
                                <a class="mt-3" href="https://www.github.com/philippetsongo" target="_blank"> <i class="fa fa-github"> </i></a>
                            </div>
                            <div class="bg-white text-center rounded-full w-7 h-7 ">
                                <a class="mt-3" href="https://www.instagram.com/philippetsongo/" target="_blank"> <i class="fa fa-instagram"></i> </a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div>
        <p class="mt-5 text-center py-5 pb-10 bg-white text-gray-600">Copy right 2024 Philippe Tahakava Tsongo</p>
    </div>
</template>

<script>

    export default {
        name: 'FooterComponent',

        data(){
            return{

            }
        },

    }
</script>