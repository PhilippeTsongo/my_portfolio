<template>
    <div class="px-4 md:px-24 pt-24 bg-black pb-20 ransition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn">
        <div class="text-center w-full">
            <div class="relative h-24 text-center w-full z-10">
                <h1 class="absolute z-50 text-center w-full text-white font-bold text-4xl">Contact</h1>
                <h1 class="absolute z-10 text-center w-full mt-2 text-[#878684] font-bold text-6xl">Contact</h1>
            </div>
            
            <p class="text-[#878684] mt-5">
                Make a connection by reaching out through:
            </p>

            <div class="grid grid-cols-2 md:grid-cols-3 mt-10">
                
                <div class="mt-14">
                    <a href="https://www.linkedin.com/in/philippe-tsongo-701838228" target="_blank" class="flex">
                        <div class="mx-auto w-24 h-24 px-8 py-8  rounded-full bg-gray-200 border-4 border-yellow-500"> <font-awesome-icon icon="linkedin"/>In</div>
                    </a>
                    <div class="text-gray-400 mt-2">
                        <a href="https://www.linkedin.com/in/philippe-tsongo-701838228" target="_blank">Linkedin</a>
                    </div>
                </div>

                <div class="mt-14">
                    <div class="flex">
                        <a href="https://github.com/philippetsongo" target="_blank"class="mx-auto w-24 h-24 px-8 py-8 rounded-full bg-gray-200 border-4 border-yellow-500"> <i class="fa fa-github"></i> </a>
                    </div>
                    <div class="text-gray-400 mt-2">
                        <a href="https://github.com/philippetsongo" target="_blank">github</a>
                    </div>
                </div>

                <div class="mt-14">
                    <div class="flex">
                        <div class="mx-auto w-24 h-24 px-8 py-8  rounded-full bg-gray-200 border-4 border-yellow-500"> <font-awesome-icon icon="globe"/></div>
                    </div>
                    <div class="text-gray-400 mt-2">
                        <a href="#" target="_blank">Web site</a>
                    </div>
                </div>
                
                <div class="mt-14">
                    <div class="flex">
                        <div class="mx-auto w-24 h-24  px-8 py-8  rounded-full bg-gray-200 border-4 border-yellow-500"> <font-awesome-icon icon="phone"/></div>
                    </div>
                    <div class="text-gray-400 mt-2">+250 783 793 095</div>
                </div>


                <div class="mt-14">
                    <div class="flex">
                        <div class="mx-auto w-24 h-24 px-8 py-8  rounded-full bg-gray-200 border-4 border-yellow-500"> <font-awesome-icon icon="envelope"/></div>
                    </div>
                    <div class="text-gray-400 mt-2">philippetsongo90@gmail.com</div>
                </div>

                <div class="mt-14">
                    <div class="flex">
                        <div class="mx-auto w-24 h-24  px-8 py-8  rounded-full bg-gray-200 border-4 border-yellow-500"> <font-awesome-icon icon="location"/></div>
                    </div>
                    <div class="text-gray-400 mt-2">Rwanda Kigali, KN 123 Str</div>
                </div>

            </div>
        </div>

        <div class="mt-24 border-t-2 border-white">
            <div class="text-gray-300 mt-14" >Leave a message here to reach out</div>
            <form action="" class="mt-14">
                <input type="text" class="w-full rounded-md py-4 px-2 mt-5 border-l-4 border-yellow-500" placeholder="Full names">
                <input type="email" class="w-full block rounded-md py-4 px-2 border-l-4 border-yellow-500 mt-5" placeholder="Email">
                <textarea class="w-full block rounded-md h-44 py-3 px-3 border-l-4 border-yellow-500 mt-5" placeholder="Your message"></textarea>

                <button class="bg-yellow-500 text-white px-2 py-3 rounded-md mt-5 w-48 border-l-4 border-white"> <font-awesome-icon icon="send"/> Submit</button>
            </form>
        </div>
        
    </div>
</template>

<script>
    
    export default{
        name: "ContactComponent",
    }

</script>


<style>


</style>