import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", component: HomeView, name: "home",
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
        { path: ':chatId', component: () => import('../views/ChatView.vue') }
      ],
    },
    { path: '/about', component: () => import('../views/AboutView.vue'), name: "about" },
  ]
});

export default router;