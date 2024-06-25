<script>
import albumArt from '../assets/pictures/album-cover.jpg'
import previousArt from '../assets/pictures/previous.png'
import pauseArt from '../assets/pictures/pause.png'
import nextArt from '../assets/pictures/next.png'

export default {
  data: function () {
    return {
      albumArt: albumArt,
      previousArt: previousArt,
      pauseArt: pauseArt,
      nextArt: nextArt
    }
  }
}
</script>

<template>
  <div class="music-card">
    <div class="album-section">
      <img 
        :src="albumArt"
        class="album-art"
      />
    </div>
    <div class="info-section">
      <div class="controls">
        <button class="control-btn">
          <img :src="previousArt"/>
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
</template>

<style scoped>

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
  width: 200px;
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