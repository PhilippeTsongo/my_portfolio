<template>
    
    <div class="px-8 md:px-24 pt-24 bg-black pb-20 ransition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn">
        <div class="text-center w-full">
            <div class="relative h-24 text-center w-full z-10">
                <h1 class="absolute z-50 text-center w-full text-white font-bold text-4xl">Projects</h1>
                <h1 class="absolute z-10 text-center w-full mt-2 text-[#878684] font-bold text-6xl">Projects</h1>
            </div>
            
            <p class="text-[#878684] mt-5">
                As an experienced full-stack developer, I have played a key role in delivering successful projects 
                that provide impactful solutions to real-world problems, utilizing programming languages such as Python,
                PHP, Java, and JavaScript, along with frameworks like React.js, Vue.js, Django, Laravel, Nest.js, Node.js and Spring Boot.
            </p>
        </div>

        <div class="md:grid md:grid-cols-3 md:justify-between gap-5 mt-14">
            <div class="py-8 px-7 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white hover:cursor-pointer">
                <h2 class="font-bold text-yellow-500 mt-2">March 2020 </h2>
                <h3 class="text-black text-2xl mt-5">Master Degree of Design</h3>
            </div>

            <div class="py-8 px-7 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white mt-5 md:mt-0 hover:cursor-pointer">
                <h2 class="font-bold text-yellow-500 mt-2">March 2020 </h2>
                <h3 class="text-black text-2xl mt-5">Master Degree of Design</h3>
            </div>

            <div class="py-8 px-7 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white mt-5 md:mt-0 hover:cursor-pointer">
                <h2 class="font-bold text-yellow-500 mt-2">March 2020 </h2>
                <h3 class="text-black text-2xl mt-5">Master Degree of Design</h3>
            </div>

            <div class="py-8 px-7 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white mt-5 md:mt-0 hover:cursor-pointer">
                <h2 class="font-bold text-yellow-500 mt-2">March 2020 </h2>
                <h3 class="text-black text-2xl mt-5">Master Degree of Design</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectComponent",
    }

</script>