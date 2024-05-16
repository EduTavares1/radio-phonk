<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1 class="title">
      Radio Phonk
    </h1>
    <audio controls>
      <source 
        src="/music/SE_BATER_DE_FRENTE-kauanzwp.mp3"
        type="audio/mpeg"
      >
      Your browser does not support the audio element.
    </audio>
  </div>
  <!-- Footer -->
  <footer>
    <a
      href="https://github.com/romhenri/radio-phonk"
      target="_blank"
      rel="noopener noreferrer"
    >
      Projeto de Rádio Phonk Open-source (2024)
    </a>
  </footer>
</template>

<style scoped>
.title {
  font-size: 3em;
  color: #fff;
  text-align: center;

  text-shadow: 
  0 0 0.5em #646cff,
  0 0 2em #646cff,
  0 0 0.5em #646cff;

  transition: text-shadow 300ms;
}
.title:hover {
  text-shadow: 
  0 0 0.5em #42b883,
  0 0 2em #42b883,
  0 0 0.5em #42b883;
}
.title:active {
  text-shadow:
  0 0 0.5em #ff0000,
  0 0 2em #ff0000,
  0 0 0.5em #ff0000;
}
footer {
  text-align: center;
  padding: 1em;
  color: #fff;
  font-size: 0.8em;
}
footer a {
  color: #dddddd;
}
</style>