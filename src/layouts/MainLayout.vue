<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Gifted Software </q-toolbar-title>

        <q-btn stretch flat label="Home" />
        <q-btn stretch flat label="Portfolio" />
        <q-btn stretch flat label="Services" />
        <q-btn stretch flat label="About" />
        <q-btn stretch flat label="Contact" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-black" position="bottom">
      <!-- Social Links -->
      <div class="q-pa-md text-center">
        <q-btn
          flat
          v-for="link in socialLinks"
          :key="link.name"
          :size="link.size"
          :class="link.class"
          :icon="link.name"
          type="a"
          :href="link.route"
          target="__blank"
        />
      </div>
      <div class="row">
        <!-- HOPE Identity -->
        <div class="col-12 text-center" style="word-spacing: 3px">
          <p>Gifted Software LLC 2021. All Rights Reserved.</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const socialLinks = ref([
      {
        name: "fab fa-facebook",
        class: "q-pa-sm",
        size: "lg",
        route: "",
      },
      {
        name: "fab fa-instagram",
        class: "q-pa-sm",
        size: "lg",
        route: "",
      },
      {
        name: "fab fa-twitter",
        class: "q-pa-sm",
        size: "lg",
        route: "",
      },
      {
        name: "fab fa-linkedin",
        class: "q-pa-sm",
        size: "lg",
        route: "https://www.linkedin.com/company/giftedsoftware",
      },
    ]);
    return {
      essentialLinks: linksList,
      socialLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
