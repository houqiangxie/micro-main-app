<template>
    <div>
        我是index
         <div id="child"></div>
        
    </div>
</template>

<script setup>
import { start } from 'qiankun'
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
</script>