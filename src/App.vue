<template>
  <div class="w-full h-screen flex flex-row">
    <div class="w-48 flex-none bg-gray-300"><Materials/></div>
     <div class="flex-1 flex flex-col bg-gray-200">
       <div class="flex-none h-20 bg-gray-400">标题栏</div>
       <div class="flex-1"><play-ground v-model="refData" /></div>
     </div>
     <div class="w-48 flex-none bg-gray-300"><options v-model="refData"></options></div>
  </div>
</template>

<script setup >
import { ref } from 'vue';

import Materials from './components/Materials.vue';
import PlayGround from './components/PlayGround.vue';
import Options from './components/Options.vue';

import globalData from '@/utils/data';

const refData = ref(globalData)
</script>
