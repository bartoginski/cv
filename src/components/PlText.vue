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
      <h2 class="text-3xl text-header text-fire font-bold">O mnie</h2>
      <p>
        Jestem bardzo ambitną osobą, znaczną część wolnego czasu przeznaczam na
        rozwój. Programowaniem zajawiłem się na początku 2019 roku. Po dwóch
        latach nauki podjąłem się pracy jako Frontend developer, głównie tworząc
        strony przy użyciu Wordpress'a. Ze stron typu CMS, przeskoczyłem na
        JamStack, pisząc w technolgii Nuxtjs. W tej technologii aktualnie
        prowadzę projekt społeczny
        <a href="https://www.depressout.pl">Depressout</a> mający na celu pomoc
        ludziom dotkniętym depresją. Planuje dalej rozwijać się "na froncie",
        ale bacznie obserwuje również świat aplikacji mobilnych.
      </p>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">Edukacja</h2>
      <p>
        Aktualnie uczęszczam do trzeciej klasy technikum, o kierunku technik
        informatyk. Pierwszą, jak i drugą klasę ukończyłem z wyróznieniem,
        ponadto otrzymałem stypendium naukowe. Jestem absolwentem Szkoły
        Mistrzostwa Sporotowego w Bytomiu, którą równieć zdałem, z wyróżnieniem
        za wyniki w nauce. Ukończyłem także praktyki w firmie
        <span class="text-fire">Devesoft</span>, z oceną celującą. Oprócz szkoły
        poświęcam dużą część czasu na samorozwój.
      </p>
    </div>

    <div data-aos="fade-left" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">Umiejętności</h2>
      <div>
        <ul class="list-disc ml-4">
          <li>JavaScript - Vuejs</li>
          <li>Wordpress</li>
          <li>Scss</li>
          <li>Tailwindcss</li>
          <li>Flutter (początek przygody)</li>
        </ul>
      </div>
    </div>
    <div data-aos="fade-right" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">
        Doświadczenie zawodowe
      </h2>
      <p>
        Pracowałem przez 9 miesięcy na stanowisku Wordpress developer w firmie
        <a href="https://nolimitplan.pl/">FitGenerator</a>. Byłem odpowiedzialny
        m. in. za stworzenie platformy
        <a href="https://smacznepapu.pl/">SmacznePapu</a>. Później podjąłem się
        pracy na pdoobnym stanowisku w <a href="https://imado.co">IMADO</a>.
        Aktualnie pracuje jako FrontEnd Developer w
        <a href="https://www.softgorillas.com/">Soft Gorillas</a>.
      </p>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <h2 class="text-3xl text-header text-fire font-bold">Kontakt</h2>
      <p>
        <span class="flex items-center gap-2">
          <b>Email:</b>
          <a :href="'mailto:' + data['email']">{{ data['email'] }}</a>
        </span>
        <span class="flex items-center gap-2">
          <b>Github:</b>
          <a :href="data['githubLink']">{{ data['githubNick'] }}</a>
        </span>
        <span class="flex items-center gap-2">
          <b>Numer telefonu:</b> {{ data['phone'] }}
        </span>
        <span class="flex items-center gap-2">
          <b>Data urodzenia:</b> {{ data['birthday'] }}
        </span>
        <span class="flex items-center gap-2">
          <b>Miasto:</b> {{ data['city'] }}</span
        >
      </p>
    </div>
  </section>
</template>

<script>
import contactInfo from '../data/contactInfo';
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
  transition: opacity 0.5s;
}
</style>
