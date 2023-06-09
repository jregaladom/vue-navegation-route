<script setup>
const isDev = import.meta.env.VITE_STAGE === 'dev';
</script>

<template>
  <div>
    <router-link :to="{ name : 'home' }" >Home</router-link>
    <router-link :to="{ name : 'session' }" >Sesion</router-link>
    <router-link to="chats" >Chats</router-link>
    <router-link :to="{name : 'about'}" >About</router-link>
    <router-link v-if="isDev" :to="{name : 'profile'}" >Profile</router-link>
    
  </div>
 <router-view /> 
</template>

<style scoped>

</style>
