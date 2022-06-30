<template>
  <div class="h-full bg-gray-100 flrx flrx-col items-center">
    <div id="title" class="text-center font-bold">物料库</div>
    <div class="my-4 p-8 w-full border flex justify-center"
         v-for="mt in materials.materialList"
         :key="mt.key"
    >
        <div 
            draggable="true"
            @dragstart="handleDragestart($event,mt.key)"
        >
            <component :is="mt.preRender()"></component>
        </div>
    </div>
  </div>
</template>

<script setup>
import { materials } from "@/utils/options";
const handleDragestart = (event,key)=>{
    // 我们需要告诉画布，用户当前拖拽的是哪个组件，方便画布去渲染。
    // 这不是唯一的方式，你可以用 vuex ,
    // console.log(event,key,event.dataTransfer.setData)
    event.dataTransfer.setData('key', key);
}
</script>
