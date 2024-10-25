<template>
    
    <div class="md:flex md:justify-between px-5 md:px-24 md:pt-24 bg-black text-white ransition-opacity duration-3000 ease-in transform translate-y-4 opacity-0 animate-fadeIn">
        <div class="w-full md:w-2/4 mt-14 md:0"> 
            <img src="../../public/image.png" class="grayscale hover:filter hover:grayscale-0 transition duration-500" alt="Philippe Tsongo Tahakava">
        </div>
        
        <div class="w-full md:w-2/4 left-0 mt-14 pb-10 md:pb-0">
            <p class="uppercase text-yellow-500 font-bold text-">About Me</p>
            
            <p class="mt-10 text-gray-400">
                I am a Full-stack Software Engineer with almost 4 years of experience building, implementing and deploying 
                robust web applications,
                I have contributed to the development of successful projects as backend and frontend developer using various programming
                languages such as Python, Php, and javascript and frameworks such as React js, Vue js, Django, Laravel, and node js.
            </p>

            <div class="mt-10">
                <div class="flex justify-between mt-8 border-b border-gray-400 pb-2">
                    <div class="">Names: </div> <div>Philippe Tsongo Tahakava</div>
                </div>
                <div class="flex justify-between mt-8 border-b border-gray-400 pb-2">
                    <div class="">Date of Birth: </div> <div>1999-11-23</div>
                </div>
                <div class="flex justify-between mt-8 border-b border-gray-400 pb-2">
                    <div class="">Address: </div> <div>Rwanda kigali KN 123 Str</div>
                </div>
                <div class="flex justify-between mt-8 border-b border-gray-400 pb-2">
                    <div class="">Email: </div> <div>philippetsongo90@gmail.com</div>
                </div>
                <a href="tel:+250783793095" target="_blank" class="flex justify-between mt-8 pb-2">
                    <div class="">Phone: </div> <div>+250 783 793 095</div>
                </a>
            </div>
            <div class="mt-14">
                <div class="bg-yellow-500 text-white px-3 py-2 rounded-full w-36 text-center">
                    <a target="_blank" href="https://drive.google.com/file/d/1slbrGJMNzr64AKAtLLtGHVKa__KObCv8/view?usp=sharing" ><font-awesome-icon icon="download"/> Download CV </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutComponent",
    }

</script>