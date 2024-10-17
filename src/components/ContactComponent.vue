<template>
    <div class="px-4 md:px-24 pt-24 bg-black pb-20 ransition-opacity duration-1000 ease-in-out transform translate-y-4 opacity-0 animate-fadeIn">
        <div class="text-center w-full">
            <div class="relative h-24 text-center w-full z-10">
                <h1 class="absolute z-50 text-center w-full text-white font-bold text-4xl">Contact</h1>
                <h1 class="absolute z-10 text-center w-full mt-2 text-[#878684] font-bold text-6xl">Contact</h1>
            </div>
            
            <p class="text-white mt-5">Leave a message here to reach out</p>
            <!-- <div class="grid grid-cols-2 md:grid-cols-3 mt-10">
                            
            </div> -->
        </div>

        <div class="md:flex md:justify-between gap-5 mt-14">
            <div class="md:w-1/2">
                
                <div class="flex rounded-md px-4 py-3 bg-white border-l-4 border-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:text-white">
                    <div href="https://www.linkedin.com/in/philippe-tsongo-701838228" target="_blank" class="">
                        <img src="/images/skills/linkedin.png" class="w-9 h-8">
                    </div>
                    <div class="ml-5 w-full">
                        <div class="text-gray-400 ">
                            <a href="https://www.linkedin.com/in/philippe-tsongo-701838228" target="_blank">Linkedin</a>
                        </div>
                        <div class="mt-2">
                            <a href="https://www.linkedin.com/in/philippe-tsongo-701838228" target="_blank">https://www.linkedin.com/in/philippe-tsongo-701838228</a>
                        </div>
                    </div>
                </div>

                <div class="flex rounded-md px-4 py-3 bg-white mt-5 border-l-4 border-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:text-white">
                    <div href="https://www.github.com/philippetsongo" target="_blank" class="">
                        <img src="/images/skills/github.png" class="w-9 h-8">
                    </div>
                    <div class="ml-5 w-full">
                        <div class="text-gray-400 ">
                            <a href="https://www.github.com/philippetsongo" target="_blank">Github</a>
                        </div>
                        <div class="mt-2">
                            <a href="https://www.github.com/philippetsongo" target="_blank">https://www.github.com/philippetsongo</a>
                        </div>
                    </div>
                </div>

                <div class="flex rounded-md px-4 py-3 bg-white mt-5 border-l-4 border-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:text-white">
                    <div href="tel:+250783793095" target="_blank" class="">
                        <img src="/images/skills/telephone.png" class="w-9 h-8">
                    </div>
                    <div class="ml-5 w-full">
                        <div class="text-gray-400 ">
                            <a href="tel:+250783793095" target="_blank">Phone Number</a>
                        </div>
                        <div class="mt-2">
                            <a href="tel:+250783793095">+250 783 793 095</a>
                        </div>
                    </div>
                </div>

                <div class="flex rounded-md px-4 py-3 bg-white mt-5 border-l-4 border-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:text-white">
                    <div href="tel:+250783793095" target="_blank" class="">
                        <img src="/images/skills/email.png" class="w-9 h-8">
                    </div>
                    <div class="ml-5 w-full">
                        <div class="text-gray-400 ">
                            <a href="" target="_blank">Email</a>
                        </div>
                        <div class="mt-2">
                            <a href="">philippetsongo90@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 mt-10 md:mt-0">
                <form action="" class="">
                    <input type="text" class="w-full rounded-md py-3 px-2 border-l-4 border-yellow-500" placeholder="Full names">
                    <input type="email" class="w-full block rounded-md py-3 px-2 border-l-4 border-yellow-500 mt-5" placeholder="Email">
                    <textarea class="w-full block rounded-md h-44 py-3 px-3 border-l-4 border-yellow-500 mt-5" placeholder="Your message"></textarea>

                    <button class="bg-yellow-500 text-white px-2 py-3 rounded-md mt-5 w-full border-l-4 border-white"> Submit</button>
                </form>
            </div>
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