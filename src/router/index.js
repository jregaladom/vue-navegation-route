import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const stage = import.meta.env.VITE_STAGE;

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/404', component: () => import('../views/404View.vue'), name: "notFound"
    },
    {
      path: '/:catchAll(.*)', redirect: { name: "notFound" }
    },
    // {
    //   path: '/home', redirect: { name: "home" }
    // },
    {
      path: "/", component: HomeView, name: "home", alias: ["/home"],
      meta: {
        requiresAuth: false,
      }
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
      meta: {
        requiresAuth: true,
        roles: ['admin']
      },
      children: [
        {
          path: ':chatId(\\d+)', component: () => import('../views/ChatView.vue'), props: (route) => {
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

if (stage === 'dev') {
  router.addRoute({
    path: '/profile', component: () => import('../views/ProfileView.vue'), name: "profile"
  });
}

router.beforeEach((to, from) => {
  // console.log(to, from);

  if (to.meta?.requiresAuth && to.meta?.roles?.includes('admin')) {
    console.log('requiresAuth', to.path);
    //return '/session';
  }
});

export default router;