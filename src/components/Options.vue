<template>
    <div class="h-full bg-gray-100 flex flex-col items-center">
        <div id="title">设置区</div>
        <div class="my-8 p-8 w-full border flex justify-center">
            left:<el-input v-if="selectedData.style" v-model="selectedData.style.left"></el-input>
        </div>
        <div class="my-8 p-8 w-full border flex justify-center">
            top:<el-input v-if="selectedData.style" v-model="selectedData.style.top"></el-input>
        </div>
    </div>
</template>

<script setup>
import _ from 'lodash'
import { defineEmits, defineProps,computed } from 'vue'
import { ElInput } from 'element-plus';

const props = defineProps({
    modelValue:{
        type:Array
    }
})

const emit = defineEmits(['update:modelValue'])

const data = computed({
    get(){
        return props.modelValue
    },
    set(newValue){
        emit('update:modelValue',_.cloneDeep(newValue))
    }
})

const selectedData = computed({
    get(){
        return data.value.find(item => item.selected) || {}
    },
    set(newValue){
        data.value = data.value.map(item => item.key === newValue.key ? selectedData:item)
    }
})
</script>
