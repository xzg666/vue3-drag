<template>
    <div class="w-full h-full bg-green-100 relative"
        @dragover="handleDragOver"
        @dragenter="handleDragEnter"
        @drop="handleDrop"
    >
        <component
            class="absolute"
            v-for="item in data"
            :key="item.key"
            :style="item.style"
            :is="materials.materialMap[item.index]"
            @click="handleClick($event,item.key)"
        ></component>
    </div>
</template>

<script setup>
import _ from 'lodash'
import { defineEmits, defineProps,computed,nextTick } from 'vue'

import { materials } from '@/utils/options';


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

// html5 中的 ondrop 事件，必须要给同一个元素添加 ondragover 事件
// 并阻止 ondragover 事件的默认行为，才能看到 ondrop 事件的效果
const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const index = event.dataTransfer.getData('key');
    console.log(index)
    //我们需要在drop的时候，把数据放到这个data中
    data.value = [
        ...data.value,
        {
            index,
            key:index+ Math.random(),
            style:{
                left:event.offsetX+'px',
                top:event.offsetY+'px'
            }
        }
    ]
   
    
}

const handleDragOver = (event) => {
    event.preventDefault();
}
const handleDragEnter = (event) => {
    event.dataTransfer.dropEffect = 'move'
}

const handleClick = (event,key) => {
    data.value = data.value.map(item => item.key === key ? {
        ...item,selected:true
    }:{
        ...item,selected:false
    })
     nextTick(()=>{
        console.log(data.value)
    })
}
</script>
