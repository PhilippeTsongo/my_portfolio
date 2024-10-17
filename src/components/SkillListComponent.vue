<template>
    
    <div class="flex justify-between bg-gray-100 rounded-md py-3 px-3">

        <div class="w-1/3">
            <div class="">
                <img class="bg-white rounded-full w-10 h-10 px-2 py-2 text-center" :src="`images/skills/${skillImage}`" alt="Skill image">
                <!-- <font-awesome-icon icon="code" class="bg-gray-100 rounded-full w-8 h-8 px-4 py-4 text-center" /> -->
            </div>
        </div>
        <div class="w-2/3">
            <div class="flex justify-between">
                <div>{{ skillName }}</div>
                <div class="bg-yellow-100 h-6 text-yellow-500 px-2 text-center rounded-full"> {{skillLevel}}/100</div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="rounded-full mt-5 h-2.5 bg-gray-300 flex justify-center items-center" :style="{ width: skillLevel + '%'}">
                    <span class="text-xs text-white">{{ skillLevel }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "SkillListComponent",

    data() {
        return {
            baseURL: "",
        }
    },

    mounted(){
        this.baseURL = this.$baseURL;
    },

    props: {
        skillName: {
            type: String,
            required: true
        },

        skillLevel: {
            type: String,
            required: true
        },

        skillImage: {
            type: String,
            required: true
        }
    },

    methods: {

    }
}
</script>