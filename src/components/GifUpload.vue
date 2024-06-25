<template>
  <div>
    <input type="file" @change="uploadGif" />
    <img :src="gifUrl" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const gifUrl = ref('')

    const uploadGif = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        gifUrl.value = e.target.result
      }
      reader.readAsDataURL(file)
    }

    return { gifUrl, uploadGif }
  },
}
</script>