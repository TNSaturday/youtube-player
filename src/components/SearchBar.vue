<template>
  <div>
    <input type="text" @keyup.enter="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event) {
      this.$emit('termChange', event.target.value);
    }
  },
}
</script>

<style>

</style>
