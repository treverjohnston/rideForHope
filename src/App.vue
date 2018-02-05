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
  .swal-modal {
    background-color: rgba(0, 0, 0, 0.767);

  }

  .swal-button {
    background-color: rgb(77, 75, 75);
    font-family: 'Bellefair', serif;

  }

  .swal-title{
    color: white;
    font-family: 'Bellefair', serif;
  }
  .swal-text{
    color: white;
    font-family: 'Bellefair', serif;

  }
  .rest{
        max-height: 3rem;
    }
  .header{
    height: 200px;
  }
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