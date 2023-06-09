<script setup>
const isProduction = import.meta.env.VITE_STAGE;
</script>

<template>
  <div>
    <router-link :to="{ name : 'home' }" >Home</router-link>
    <router-link :to="{ name : 'session' }" >Sesion</router-link>
    <router-link to="chats" >Chats</router-link>
    <router-link :to="{name : 'about'}" >About</router-link>
    <router-link v-if="isProduction" :to="{name : 'profile'}" >Profile</router-link>
    
  </div>
 <router-view /> 
</template>

<style scoped>

</style>
