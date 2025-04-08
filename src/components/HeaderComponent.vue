<template>
    <div class="fixed w-full z-50">
        <div class="w-full flex justify-between bg-black text-white py-8 px-8 md:px-24">
            <div class="font-bold text-2xl uppercase">Philippe <span class="hidden md:inline ml-2">Tahakava Tsongo</span></div>
            
            <div class="hidden md:flex md:justify-between md:gap-14">
                <div>  <router-link :to="{name: 'home'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Home</router-link> </div>
                <!-- <div>  <router-link :to="{name: 'projects'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Projects</router-link> </div> -->
                <div>  <router-link :to="{name: 'skills'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Skills</router-link> </div>
                <div>  <router-link :to="{name: 'contact'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Contact</router-link> </div>
                <div>  <router-link :to="{name: 'about'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> About</router-link> </div>
            </div>
            <div v-if="!menu" @click="showMenu" class="md:hidden uppercase text-gray-300 transition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn hover:cursor:pointer"><font-awesome-icon icon="bars"/> <span class="ml-1">Menu</span></div>
            <div v-if="menu" @click="showMenu" class="md:hidden uppercase text-red-500 transition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn hover:cursor-pointer"><font-awesome-icon icon="close"/> <span class="ml-1">Menu</span></div>
        </div>
        <div v-if="menu" class="bg-black text-white pt-24 py-8 px-8 md:px-8 ">
            <div class="transition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn">
                <div class="mt-5">  <router-link :to="{name: 'home'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Home</router-link> </div>
                <!-- <div class="mt-5">  <router-link :to="{name: 'projects'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Projects</router-link> </div> -->
                <div class="mt-5">  <router-link :to="{name: 'skills'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Skills</router-link> </div>
                <div class="mt-5">  <router-link :to="{name: 'contact'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> Contact</router-link> </div>        
                <div class="mt-5">  <router-link :to="{name: 'about'}" class="font-bold hover:underline hover:text-yellow-500 transition duration-700 ease-in transform hover:scale-105"> About</router-link> </div>        
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "HeaderComponent",


    data(){
        return{
            menu: false,        
        }
    },

    methods: {
        showMenu(){
            this.menu = !this.menu;
        }
    },

    }


</script>


<style>


</style>