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
export default {};
</script>

<style>
body {
  /* font-family: "Bellefair", serif; */
  font-family: 'Quattrocento', serif;

}
.red-back {
  background-color: rgba(65, 57, 57, 0.5);
  padding: 1rem;
  border-radius: 15px;
}
.r-btn {
  background-color: rgba(197, 7, 7, 0.8);
  color: white;
}
.q-item {
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
.q-list-highlight {
  background: transparent;
  color: black;
  font-weight: 400;
}
.q-tabs-head {
  background-color: rgba(17, 17, 17, 0.88);
}

.bg-grey-2 {
  background: rgba(255, 255, 255, 0.85) !important;
}
.black {
  color: black;
}
</style>