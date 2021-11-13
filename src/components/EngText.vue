<template>
  <section
    class="
      grid grid-cols-1
      md:grid-cols-2
      gap-x-10 gap-y-5
      fill-current
      text-black
      dark:text-white
    "
  >
    <div data-aos="fade-right" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">About me</h2>
      <p>
        I am a very ambitious person, much of my free time is spent on
        development. I got into programming at the beginning of 2019. After two
        years of learning I took up a job as a Frontend developer, mainly
        creating websites using Wordpress. I plan to continue developing "on the
        frontend", but I am also keeping a close eye on the world of mobile
        applications.
      </p>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">Education</h2>
      <p>
        I am currently attending the third year of technical school, majoring in
        IT specialist. I graduated first and second class with honors, moreover
        I received a scholarship. I am a graduate of the SMS (junior high school) in Bytom, which I also passed with distinction for academic achievement.
      </p>
    </div>

    <div data-aos="fade-left" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">Skills</h2>
      <div>
        <ul class="list-disc ml-4">
          <li>JavaScript - Vuejs</li>
          <li>Wordpress</li>
          <li>Scss</li>
          <li>Tailwindcss</li>
          <li>Flutter (adventure begin)</li>
        </ul>
      </div>
    </div>
    <div data-aos="fade-right" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">
        Professional experience
      </h2>
      <p>
        I worked for 9 months as a wordpress developer at a company
        <a href="https://nolimitplan.pl/">FitGenerator</a>. I was responsible
        for creation of
        <a href="https://smacznepapu.pl/">SmacznePapu</a> platform. Currently, I
        am working on a similar position at
        <a href="https://imado.co">IMADO</a>.
      </p>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">Contact</h2>
      <p>
        <span class="flex items-center gap-2">
          <b>Email:</b>
          <a :href="'mailto:' + data['email']">{{ data["email"] }}</a>
        </span>
        <span class="flex items-center gap-2">
          <b>Github:</b>
          <a :href="data['githubLink']">{{ data["githubNick"] }}</a>
        </span>
        <span class="flex items-center gap-2">
          <b>Phone:</b> {{ data["phone"] }}
        </span>
        <span class="flex items-center gap-2">
          <b>Birthday:</b> {{ data["birthday"] }}
        </span>
        <span class="flex items-center gap-2">
          <b>City:</b> {{ data["city"] }}, Poland</span
        >
      </p>
    </div>
  </section>
</template>

<script>
import contactInfo from "../data/contactInfo";
export default {
  data() {
    return {
      data: contactInfo,
    };
  },
};
</script>

<style scoped>
a {
  color: #f54748;
}
</style>
