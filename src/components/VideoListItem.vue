<template>
  <li class="list-group-item media">
    <img 
      class="mr-3"
      :src="thumbnailUrl"
      :alt="altText">
    <div class="media-body">
      {{ videoTitle }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    altText() {
      return this.video.snippet.title;
    },
    videoTitle() {
      return this.video.snippet.title;
    }
  },
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: #eee;
  }
</style>
