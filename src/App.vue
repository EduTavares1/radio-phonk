<template>
  <section class="home">
    <div>
      <h1 class="title">
        Radio Phonk
        <v-icon name="ri-play-fill" scale="2.5" fill="#ffff" aria-hidden="false"/>
      </h1>
    </div>
    
    <CardMusic />

    <div class="player">
      <div class="player"> 
        <div class="player-page">
          <VueYtframe
            v-for="video in videosSet1"
            :key="video" ref="yt"
            :video-id="video"
            height="300" width="600"
            :player-vars="{
              controls: 0,
              autoplay: 0,
              rel: 0,
              showinfo: 0,
              listType: 'user_uploads' 
            }"
            @state-change="onStateChange"
          />
        </div>
        
        <div class="controls">
          <button
          >
            <v-icon name="io-play-skip-back-sharp" />
          </button>


          <button @click="pausePlay">
            <v-icon :name="isPlaying ? 'io-pause-sharp' : 'io-play-sharp'" />
          </button>


          <button
          >
            <v-icon name="io-play-skip-forward-sharp" />
          </button>

          <button
          >
            <v-icon name="md-loop" />
          </button>

        </div>
      
      </div>
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
import CardMusic from './components/CardMusic.vue';

const iframeUrl = ref('https://www.youtube.com/embed/Z7BByo2V-HA');
const yt = ref(null);
const isPlaying = ref(false);
let player = null;

const videosSet1 = [
  "BPQFoF2exKA",
];

const onStateChange = (event) => {
  if (event.getPlayerState() === 1) {
    yt.value.forEach((video) => {
      if (video.getVideoUrl() !== event.getVideoUrl()) {
        video.pauseVideo();
        player = video;
      }
    });
  }
};

const pausePlay = () => {
  yt.value.forEach((video) => {
    if (video.getPlayerState() === -1 || video.getPlayerState() === 0 || video.getPlayerState() === 2 || video.getPlayerState() === 5) {
      video.playVideo();
      isPlaying.value = true;
    } else if (video.getPlayerState() === 1 || video.getPlayerState() === 3) {
      video.pauseVideo();
      isPlaying.value = false;
    }
  });
};
</script>

<style scoped>
@keyframes pulseShadow {
  0% {
    box-shadow: 0 0 1em #646cff;
  }
  50% {
    box-shadow: 0 0 2em #646cff;
  }
  100% {
    box-shadow: 0 0 1em #646cff;
  }
}
.home {
  border: 0.5em solid #646cff;
  border-radius: 1em;
  padding: 8em;
  background: #1b1b1b;
  box-shadow: 0 0 1em #646cff;
  animation: pulseShadow 2s infinite ease-in-out;
}
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
.player {
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
}
.player {
  height: 400px;
  min-width: 600px;
  max-width: 600px;
}
button {
  border: 2px solid #a100c5;
  border-radius: 0.5em;
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
body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.controls{
  display:flex;
  gap:10px;
  justify-content: center;
}
</style>