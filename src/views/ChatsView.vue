<template>
  <div>
    <aside>
     <div v-for="chat in chats" :key="chat.id">
      <router-link :to="`/chats/${chat.id}`">{{chat.name}}</router-link>
     </div>
    </aside>
    <article>
     <router-view></router-view>
    </article>
  </div>
</template>

<script>

export default{
  data(){
    return {
      chats : [
        {id: 1, name: 'Ximena'},
        {id: 2, name: 'Alberto'},
        {id: 3, name: 'Laura'},
        {id: 4, name: 'Luis'},
        {id: 5, name: 'Pedro'},
        {id: 6, name: 'Ana'},
      ]
    }
  }
}
</script>