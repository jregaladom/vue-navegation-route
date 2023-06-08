<template>
    <div>
        <div v-for="message in messagesFiltered" :ket="message.id">
            {{ message.text  }}
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            messages : [
                 {id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum', author: 1},
                 {id: 2, text: 'Lore lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',  author: 2},
                 {id: 3, text: 'Dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',  author: 3},
                 {id: 4, text: 'Quisquam, voluptatum',  author: 4},
                 {id: 5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum do ',  author: 5},
                 {id: 6, text: 'Quisquam, voluptatum lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum',  author: 6},  
            ]
        }
    },
    computed:{
        messagesFiltered(){
            return this.messages.filter(message => `${message.author}` === this.$route.params.chatId)
        }
    }
}
</script>