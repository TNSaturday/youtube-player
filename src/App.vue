<template>
  <div>
    <h1>Youtube player</h1>

    <SearchBar @termChange="onTermChange"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';

export default {
  name: 'App',
  components: {
    SearchBar,
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
};
</script>
