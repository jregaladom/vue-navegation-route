<!-- <script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    iniciarSesion() {
      this.$router.push({ path: 'chats', query: { variable1:1}, replace: true})
    }
  }
}
</script> -->

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref('');

const router = useRouter();
const iniciarSesion = () => {
  router.push({ path: 'chats', query: { variable1:1}, replace: true})
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario {{ username }}</h3>
    <input placeholder="username" v-model="username" />
    <button @click="iniciarSesion">Iniciar Sesión</button>
  </main>
</template>
