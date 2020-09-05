<template>
  <div>
    <h1>Youtube player</h1>

    <SearchBar />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';

export default {
  name: 'App',
  components: {
    SearchBar,
  }
};
</script>
