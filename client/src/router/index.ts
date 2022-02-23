import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Landing from '../views/landing/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard/:id',
    name: 'Dashboard',
    component: () => import('../views/dashboard/index.vue'),
  },
  {
    path: '/hackathon/:serverId',
    name: 'Hackathons',
    component: () => import('../views/hackathon/hackathons.vue'),
  },
  {
    path: '/hackathon/:serverId/:hackathonId',
    name: 'Hackathon',
    component: () => import('../views/hackathon/hackathon.vue'),
  },
  {
    path: '/hackathon/:serverId/:hackathonId/edit',
    name: 'EditHackathon',
    component: () => import('../views/hackathon/edit-hackathon.vue'),
  },
  {
    path: '/member/:serverId',
    name: 'Members',
    component: () => import('../views/member/members.vue'),
  },
  {
    path: '/member/:serverId/:memberId',
    name: 'Member',
    component: () => import('../views/member/member.vue'),
  },
  {
    path: '/channel/:serverId',
    name: 'Channels',
    component: () => import('../views/channel/channels.vue'),
  },
  {
    path: '/channel/:serverId/:channelId',
    name: 'Channel',
    component: () => import('../views/channel/channel.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
