<template>
  <q-page>
    <!-- Parallax with Header -->
    <div class="q-pb-md row">
      <q-parallax class="col-xl-12 col-xs-12" :height="600">
        <template v-slot:media>
          <video class="col-xl-12 col-xs-12" poster="" autoplay loop muted>
            <source type="video/webm" src="" />
            <source type="video/mp4" src="../assets/homeVideoBackground.mp4" />
          </video>
        </template>

        <h3 class="text-white text-weight-bolder">
          Delivering a unique software development experience.
        </h3>
      </q-parallax>
    </div>

    <!-- About Section -->
    <div class="q-pa-xl row">
      <div class="col-6 text-h4 text-center q-pa-xl">
        Imagine your project into reality.
      </div>
      <div class="col-6 text-body1">
        Utilizing next generation technologies, we deliver sophisticated webites
        and products. We build scaleable and maintainable solutions that support
        your requirements. Utilizing next generation technologies, we deliver a
        sophisticated webite or product. We build scaleable and maintainable
        solutions that support your requirements. Utilizing next generation
        technologies, we deliver a sophisticated webite or product. We build
        scaleable and maintainable solutions that support your requirements.
      </div>
    </div>

    <!-- Case Studies Section -->
    <div class="q-pa-xl row bg-grey-3">
      <div class="col-12 text-h5 q-pb-xl">Case Studies</div>
      <q-card class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 q-pa-lg">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs">Meka Alarm Systems</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>
          <q-card-section class="col-7 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-card-section>
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat> View Case Study </q-btn>
          <q-btn flat color="primary"> Reserve </q-btn>
        </q-card-actions>
      </q-card>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <q-btn class="text-black" to="core-reed" flat size="xl" label="" />
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <q-btn class="text-black" to="core-treat" flat size="xl" label="" />
      </div>
    </div>

    <!-- Services Section -->
    <div class="q-pa-xl row">
      <div class="col-12 text-h5 q-pb-xl">Services</div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <q-btn class="text-black" to="core-reed" flat size="xl" label="" />
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <q-btn class="text-black" to="core-treat" flat size="xl" label="" />
      </div>
    </div>

    <!-- Contact Section -->
    <div class="q-pa-xl row bg-grey-3">
      <div class="col-12 text-h5 q-pb-xl">Contact</div>
      <div class="col-12">
      <div class="row">
        <div class="col-4 q-pa-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quas omnis vero perspiciatis deserunt esse labore cupiditate eos doloribus, distinctio amet ipsum enim nam aut rerum eius blanditiis in harum.
        </div>
        <div class="col-8">
          <div class="row">
          <q-input class="col-6 q-pa-lg" outlined v-model="text" label="Email" />
          <q-input class="col-6 q-pa-lg" outlined v-model="text" label="Phone Number" />
          </div>
        </div>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Home",
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

<style>
.q-page-container {
  padding-top: 0 !important;
}
</style>
