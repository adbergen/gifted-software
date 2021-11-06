<template>
  <q-layout view="hhh lpR fff">
    <q-page-container>
      <q-parallax
        :width="200"
        :height="200"
        src="https://img.freepik.com/free-photo/light-blue-gradient-abstract-banner-background_8087-1851.jpg?size=626&ext=jpg&ga=GA1.2.2080185765.1627257600"
      >
        <h3
          class="text-white text-center"
          style="line-height: 1.2; letter-spacing: 0.05em"
        >
          Services
        </h3>
      </q-parallax>

      <div class="row justify-left full-width q-pa-xl bg-grey-2">
        <q-card class="col-xl-12 col-xs-12">
          <q-card-section horizontal>
            <q-card-section class="">
              <h5>About Gifted Software</h5>
              <q-card-label class="text-subtitle1 text-weight-medium"
                >Who We Are</q-card-label
              >
              <p>
                The Collaborative Research Network on Language and Cognition in
                Aphasia, or, Gifted Software is an online, cloud-based research
                center that focuses on bringing researchers of aphasia and other
                related topics into a new generation of data sharing and
                security. Gifted Software was started in 2021 through an NIH
                grant awarded to Temple University, and now aims to operate as a
                central hub for scientists and academicians to collaborate on
                multi-site projects, share and manipulate large sets of data,
                and peruse a curated selection of resources dedicated to
                expanding the knowledge of aphasia to researchers, clinicians,
                and persons with aphasia alike.
              </p>
              <q-card-label class="text-subtitle1 text-weight-medium"
                >What We Do</q-card-label
              >
              <p>
                Gifted Software consists of three distinct “digital spaces”,
                which allow users to partake in a range of activities to
                heighten their research and educational goals.
                <a class="text-primary" href="core-talsa">CORE-TALSA</a> is a
                data repository where users can upload and download full data
                sets on a range of topics in the cognitive and communicative
                sciences.
                <a class="text-primary" href="core-treat">CORE-TREAT</a> is a
                virtual workspace where researchers can create cloud-based
                laboratories and engage with collaborators from within and
                across academic institutions to execute research protocols,
                share materials, and undertake vital research task such as
                participant recruitment and data auditing.
                <a class="text-primary" href="core-reed">CORE-REED</a> is a
                publicly accessible digital library where users and non-users
                both can access academic articles, conference presentations, and
                common assessment tools. Gifted Software is designed to very
                much be a “one-stop-shop” for aphasia research, combining the
                passion of research activity with the safety, speed, and
                efficiency of an online engine.
              </p>
              <q-card-label class="text-subtitle1 text-weight-medium"
                >How to Get Started</q-card-label
              >
              <p>
                Gifted Software relies on the activity and ingenuity of its
                members to operate at the highest level of service. You can
                click
                <a class="text-primary" href="login">here</a> to register an
                account and begin searching for data sets and virtual
                collaboratories; or, if you are already a member and are
                interested in starting your own collaboratory in CORE-TREAT, you
                can click <a class="text-primary" href="core-treat">here</a>.
              </p>
              <q-card-label class="text-subtitle1 text-weight-medium"
                >About Our Founders</q-card-label
              >
              <p>
                The idea for and development of Gifted Software has had numerous
                contributors across multiple institutions and is a result of
                international and interdisciplinary cooperation of the highest
                sort. Some of it’s primary and earliest members include
                <a class="text-primary" href="">Nadine Martin</a>...etc.
              </p>
            </q-card-section>
            <q-img
              class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-1"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="sass" scoped>
a
  color: #d3d3d3
  text-decoration: none
a:hover
  text-decoration: underline
.fab:hover
  color: #068fc6
</style>
