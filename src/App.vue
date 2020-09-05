<template>
  <div>
    <h1>Youtube player</h1>

    <SearchBar @termChange="onTermChange"/>
    <VideoList />
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyAWoIq4zXcPkI1Dsz-6qIhGcerTT2L6tes';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => console.log(response));
    }
  }
};
</script>
