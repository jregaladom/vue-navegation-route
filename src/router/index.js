import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/home', redirect: { name: "home" }
    // },
    {
      path: "/", component: HomeView, name: "home", alias: ["/home"]
    },
    {
      path: '/session', component: () => import('../views/SessionView.vue'), name: "session",
      children: [
        {
          path: '',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue')
          },
        }
      ]
    },
    {
      path: '/chats', component: () => import('../views/ChatsView.vue'), name: "chats",
      children: [
        {
          path: ':chatId', component: () => import('../views/ChatView.vue'), props: (route) => {
            return {
              chatId: route.params.chatId
            }
          }
        }
      ],
    },
    { path: '/about', component: () => import('../views/AboutView.vue'), name: "about" },
  ]
});

export default router;