<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Gifted Software </q-toolbar-title>

        <q-btn stretch flat label="Home" to="/" />
        <q-btn stretch flat label="Portfolio" to="/portfolio" />
        <q-btn stretch flat label="Services" to="/services" />
        <q-btn stretch flat label="About" to="/about" />
        <q-btn stretch flat label="Contact" to="/contact" />
      </q-toolbar>
    </q-header>

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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
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
      socialLinks,
    };
  },
});
</script>
