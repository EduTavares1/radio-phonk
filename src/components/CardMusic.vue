<script>
export default {
  data: function () {
    return {
      albumArt: 'https://cdns-images.dzcdn.net/images/cover/7d72b262a8575fc3eba402c044005273/1900x1900-000000-80-0-0.jpg', 
      songTitle: 'Nome da música',
      duration: 'Duração total',
      category: 'Categoria',
      bandName: 'Nome da banda',
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
      <div class="song-details">
        <div><strong>Nome da banda:</strong> {{ bandName }}</div>
        <div><strong>Categoria:</strong> {{ category }}</div>
        <div><strong>Duração total:</strong> {{ duration }}</div>
      </div>
      <div class="song-info">
        <strong>Listening now:</strong> {{ songTitle }}
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

.song-details {
  margin-bottom: 10px;
}

.song-info {
  font-size: 1em;
}
</style>
