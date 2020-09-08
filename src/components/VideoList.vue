<template>
  <ul class="list-group">
    <VideoListItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
    />
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: [
    // this must be equal to the left hand part of the v-bind directive,
    // e.g. :videos="videos"
    'videos',
  ]
}
</script>

<style>

</style>
