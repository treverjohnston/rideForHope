<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  /*
   * Root component
   */
  export default {}
</script>

<style>
  .q-item{
    font-size: 2rem;
    color: black;
    text-align: center;
    padding: 0;
    font-weight: 400;
    text-align: left;
  }
  .q-item-link:hover {
    background: transparent;
}
  .q-list-highlight{
    background: transparent;
    color: black;
    font-weight: 400;
  }
  .q-tabs-head {
    background-color: rgba(17, 17, 17, 0.88);
  }

  .bg-grey-2 {
    background: rgba(255,255,255, .85) !important;
  }
</style>