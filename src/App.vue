<template>
  <div class="container">
    <h1>Youtube player</h1>

    <SearchBar 
      @termChange="onTermChange"
    />

    <VideoDetail 
      :video="selectedVideo"
    />

    <VideoList
      @onVideoSelect="onVideoSelect" 
      :videos="videos"
    />
  </div>
</template>

<script>
// The 'App' component acts like a brain of the application
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// Right now access is restricted to my IP, in production
// API key should not be stored like this.
const API_KEY = 'AIzaSyA7ZqIn2iiV6xTKR-RJwgzef-1lA6UhgCk';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      // V-bind in the template ensures that every time videos are updated here
      // the new array is also passed to the VideoList component
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    // searchTerm is the event.target.value from the SearchBar component
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items;
      });
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>
