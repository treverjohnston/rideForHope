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
  export default {
    mounted() {
      let closeDate = new Date("June 7, 2019 00:00:00")
      let openDate = new Date("January 1, 2019 00:00:00")

      let date = new Date();
      console.log(date)
      if (date > openDate && date < closeDate) {
        this.$store.state.openRegistration = true;
      }
      let startEarly = new Date("April 1 2019 01:00:00")
      let endEarly = new Date("April 30 2019 11:59:59")

      if (date > startEarly && date < endEarly) {
        this.$store.state.earlyRegistration = true;
      }
      console.log(this.$store.state.openRegistration)

    }
  };
</script>

<style>
  .route-btn {
    margin-bottom: 3rem;
  }

  .card-container {
    background-color: rgba(75, 75, 75, 0.39);
    border: 1px solid white;
  }

  .border {
    /* border: 1px white solid; */
    padding: 5em
  }

  .mobile-border {
    /* border: 1px white solid; */
    padding: 3em 0 3em 0;
  }

  .white {
    color: white;
  }

  .top-marg {
    margin-top: 5rem;
  }

  .modal-content {
    background-color: rgba(0, 0, 0, .9);
    color: white;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 5px;
  }

  .route {
    background-color: rgba(75, 75, 75, 0.39);
  }

  .ride-back {
    /* background-image: url("https://res.cloudinary.com/treverscloud/image/upload/v1517856029/bw_icaeha.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover; */
    /* text-shadow: 0 0 5px #fff; */
    color: black;

    background: url(https://res.cloudinary.com/treverscloud/image/upload/v1517856029/bw_icaeha.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }

  .black-back {
    background-color: rgba(138, 138, 138, 0.905);
  }

  .white-back {
    background-color: rgba(255, 255, 255, 0.892);
    color: black;
    height: 100%;
    width: 100%;
  }

  .bot-link {
    margin-bottom: 1rem;
  }

  .r-links {
    margin-top: 3rem;
    padding: .5rem;
    border-radius: 15px;
    /* background-color: rgba(224, 226, 226, 0.65); */
    /* background-color: rgba(75, 75, 75, 0.39); */
    color: white;
  }

  .spacers {
    margin-top: 3rem;
    padding: .5rem;
    /* border-radius: 15px; */
    border: 1px solid white;
    background-color: rgba(75, 75, 75, 0.39);
  }

  .description {
    padding: 1rem;
  }

  .swal-modal {
    background-color: rgba(255, 255, 255, 0.932);
  }

  .swal-button {
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }

  .swal-title {
    color: black;
  }

  .swal-text {
    color: black;
    text-align: center;
  }

  .rest {
    max-height: 3rem;
  }

  .header {
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
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
  }

  .hr {
    width: 30%;
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

  .color {
    border: 1px solid white;
  }
</style>