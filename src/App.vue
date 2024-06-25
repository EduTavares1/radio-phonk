<script setup> 
import { ref } from 'vue'
const iframeUrl = ref('https://www.youtube.com/embed/Z7BByo2V-HA')
const yt = ref(null)
let player = null
const videosSet1 = [
  "BPQFoF2exKA",
]

const onStateChange = (event) => {
  if (event.getPlayerState() === 1) {
    yt.value.forEach((video) => {
      if (video.getVideoUrl() !== event.getVideoUrl()) {
        video.pauseVideo()
        player = video
      }
    })
  }
}

const pauseVideo = () => {
  yt.value.forEach((video) => {
    video.pauseVideo()
  })
}
</script>

<template>
  <section class="home">
    <div>
      <h1 class="title">
        Radio Phonk
      </h1>
    </div>
    
    <div class="player">
      <div class="player">
        <div class="player-page">
          <VueYtframe
            v-for="video in videosSet1"
            :key="video" ref="yt"
            :video-id="video"
            height="300" width="600"
            :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
            @state-change="onStateChange"
          />
        </div>
        <button
          @click="pauseVideo"
        >
          CI UFPB
        </button>
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
  border: 2px solid #646cff;
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
</style>