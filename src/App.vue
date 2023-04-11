<template>
  <div>
    <HeaderComp class="w-full fixed top-0 z-50" v-bind:links="['Home', 'About', 'Contact']" />
    <LoginComp />
    <FooterComp class="w-full fixed bottom-0 z-50" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import LoginComp from "./components/LoginComp.vue"
</script>
