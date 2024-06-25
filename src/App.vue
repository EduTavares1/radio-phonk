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
import albumArt from 'assets/pictures/album-cover.jpg'
import previusArt from 'assets/pictures/previus.png'
import pauseArt from 'assets/pictures/pause.png'
import nextArt from 'assets/pictures/next.png'
</script>

<template>
  <section class="home">
    <div>
      <h1 class="title">
        Radio Phonk
      </h1>
    </div>


    <div class="music-card">
        <div class="album-section">
          <img :src="albumArt"/>
        </div>
        <div class="info-section">
            <div class="controls">
                <button class="control-btn">
                  <img :src="previusArt"/>
                </button>
                <button class="control-btn">
                  <img :src="pauseArt"/>
                </button>
                <button class="control-btn">
                  <img :src="nextArt"/>
                </button>
            </div>
            <div class="volume-info">
                <span class="volume-percentage">72%</span>
                <div class="volume-icon">
                    <i class="fas fa-volume-up"></i>
                </div>
                <div class="volume-bar">
                    <div class="volume-level"></div>
                </div>
            </div>
            <div class="song-info">
                Listening now : Montagem Coral
            </div>
        </div>
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

.music-card {
    display: flex;
    background-color: #1f1f1f;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 600px;
}

.album-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.album-art {
    width: 200px;
    border-radius: 10px;
}

.info-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}

.controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
}

.control-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
}

.control-btn img {
    width: 30px;
    height: 30px;
}

.volume-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.volume-percentage {
    font-size: 1.2em;
    margin-right: 10px;
}

.volume-icon {
    font-size: 1.5em;
    margin-right: 10px;
}

.volume-bar {
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
    width: 150px;
    height: 10px;
    display: flex;
    align-items: center;
}

.volume-level {
    background-color: #1e90ff;
    width: 72%;
    height: 100%;
}

.song-info {
    font-size: 1em;
}

</style>