<template>
    
    <div class="flex justify-between pb-2 border-b border-gray-200">

        <div class="w-1/3 mt-5">
            <div class="">
                <font-awesome-icon icon="code" class="bg-gray-100 rounded-full w-8 h-8 px-4 py-4 text-center" />
            </div>
        </div>
        <div class="w-2/3">
            <div class="flex justify-between py-5">
                <div>{{ skillName }}</div>
                <div class="bg-yellow-100 ml-5 h-6 text-yellow-500 px-2 text-center rounded-full"> {{skillLevel}}/100</div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="rounded-full h-2.5 bg-gray-300 flex justify-center items-center" :style="{ width: skillLevel + '%'}">
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

        }
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
    },

    methods: {

    }
}
</script>