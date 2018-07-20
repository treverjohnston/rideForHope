<template>
  <q-layout ref="layout" class="back ride-back" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar class="head">
      <q-btn class="mobile-only" flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-btn @click="$router.push('/')">
        <img src="statics/logos/RFHIdahoLogo.png" alt="logo" class="mini">
      </q-btn>
      <q-toolbar-title class="desktop-only">
        Ride For Hope Idaho
      </q-toolbar-title>
      <q-transition class="desktop-only" appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn class="desktop-only" @click="launch('http://www.meridian-cycles.com/')">
          <img class="meridian desktop-only" src="statics/logos/meridian.png" alt="Meridian Cycles logo">
        </q-btn>
      </q-transition>
      <q-transition appear enter="lightSpeedIn" leave="fadeOut">
        <!-- LIVE REGISTRATION -->
        <q-btn outline color="red" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventStore.aspx%3FfEID%3D67623%26mSource%3DimAOverview')">Just Donate
        </q-btn>
      </q-transition>
      <q-transition class="mobile-only" appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn class="mobile-only" outline @click="$router.push('/register')" color="red">Register
        </q-btn>
        <!-- LIVE REGISTRATION -->
        <!-- <q-btn class="mobile-only" outline @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')"
          color="red">Register
        </q-btn> -->
      </q-transition>
      <q-btn class="mobile-only">
        <img class="meridian-mobile" @click="launch('http://www.meridian-cycles.com/')" src="statics/logos/meridian.png" alt="Meridian Cycles logo">
      </q-btn>
    </q-toolbar>
    <q-tabs slot="header" align="center" class="shadow-2 desktop-only tabs">
      <q-route-tab class="tab" slot="title" label="Home" name="home" to="/" />
      <q-route-tab class="tab" slot="title" color="red" label="Register" name="register" to="register" />
      <!-- LIVE REGISTRATION -->
      <!-- <q-tab class="tab" slot="title" color="red" label="Register" name="reg" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')"
      /> -->
      <q-tab class="tab" slot="title" label="Rider Fundraising" name="fundraising" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fdonate%2FRideForHopeIdaho%3Fz%3D1517453663070')"
      />
      <q-tab class="tab involved" align="left" slot="title" label="Rider Info" name="rider">
        <q-popover fit ref="popoverRoutes">
          <q-item-main>
            <q-tab class="tab" slot="title" label="Routes" name="rider">
              <q-popover fit anchor="top left" ref="routePopB">
                <q-item-main>
                  <q-route-tab class="tab" @click="collapse" slot="title" label="18 Mile" name="routes" to="18-mile" />
                </q-item-main>
                <q-item-main>
                  <q-route-tab class="tab" @click="collapse" slot="title" label="31 Mile" name="routes" to="31-mile" />
                </q-item-main>
                <q-item-main>
                  <q-route-tab class="tab" @click="collapse" slot="title" label="Metric Century" name="routes" to="metric" />
                </q-item-main>
                <q-item-main>
                  <q-route-tab class="tab" @click="collapse" slot="title" label="Century" name="routes" to="Century" />
                </q-item-main>
              </q-popover>
            </q-tab>
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" name="register" class="tab" slot="title" color="red" label="Register" to="register" />
            <!-- LIVE REGISTRATION -->
            <!-- <q-tab @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')" name="home"
              class="tab" slot="title" color="red" label="Register" /> -->
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Packet Pick Up" name="rider" to="packet" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Rules Of The Road" name="rider" to="rules" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Start Times And Directions" name="rider" to="ride" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="How Climbs Are Categorized" name="rider" to="climbs" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Team Ride For Hope Idaho Information" name="rider" to="team"
            />
          </q-item-main>
        </q-popover>
      </q-tab>
      <q-tab class="tab involved" slot="title" label="Merchandise" name="marchandise">
        <q-popover fit ref="popover" class="involved">
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Raffle Items" name="raffle" to="raffle" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Jerseys" name="merchandise" to="merchandise" />
          </q-item-main>
        </q-popover>
      </q-tab>
      <q-route-tab class="tab" slot="title" label="Volunteer" name="volunteers" to="volunteers" />
      <q-route-tab class="tab" slot="title" label="Sponsors" name="sponsors" to="sponsors" />
      <q-tab class="tab involved" slot="title" label="Galleries" name="gallery">
        <q-popover fit ref="popover" class="involved">
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="2018 Gallery" name="gallery" to="2018-gallery" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Past Rides" name="gallery" to="gallery" />
          </q-item-main>
        </q-popover>
      </q-tab>
      <q-route-tab class="tab" slot="title" label="About" name="about" to="about" />
      <q-route-tab class="tab" slot="title" label="Contact" name="contact" to="contact" />
    </q-tabs>

    <div class="mobile-only left-tab" slot="left">
      <q-list class="mobile-only" no-border link inset-delimiter>
        <q-side-link to="/">
          <q-item-main class="side" label="Home" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="register">
          <q-item-main class="side register" label="Register" />
          <!-- <hr class="tabhr"> -->
        </q-side-link>
        <!-- LIVE REGISTRATION -->
        <!-- <q-item-main @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')" class="side register"
          label="Register" /> -->
        <!-- </q-side-link> -->
        <hr class="tabhrs">
        <q-item-main @click="launch('https://www.imathlete.com/#/legacy?url=%2Fdonate%2FRideForHopeIdaho%3Fz%3D1517453663070')" class="side"
          label="Rider Fundraising" />
        <hr class="tabhr">
        </q-collapsible>
        <q-collapsible class="side-collapse" label="Rider Information">
          <q-collapsible class="side-collapse" label="Routes">
            <q-side-link to="18-mile">
              <q-item-main class="small-side" label="18 Mile" />
            </q-side-link>
            <hr class="tabhrs">
            <q-side-link to="31-mile">
              <q-item-main class="small-side" label="31 Mile" />
            </q-side-link>
            <hr class="tabhrs">
            <q-side-link to="metric">
              <q-item-main class="small-side" label="Metric Century" />
            </q-side-link>
            <hr class="tabhrs">
            <q-side-link to="Century">
              <q-item-main class="small-side" label="Century" />
            </q-side-link>
          </q-collapsible>
          <hr class="tabhrs">
          <q-side-link to="register">
            <q-item-main class="small-side register" label="Register" />
          </q-side-link>
          <!-- LIVE REGISTRATION -->
          <!-- <q-item-main @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')" class="small-side register"
            label="Register" /> -->
          <hr class="tabhrs">
          <q-side-link to="packet">
            <q-item-main class="small-side" label="Packet Pick Up" />
          </q-side-link>
          <hr class="tabhr">
          <q-side-link to="rules">
            <q-item-main class="small-side" label="Rules Of The Road" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="ride">
            <q-item-main class="small-side" label="Start Time/Directions" />
          </q-side-link>
          <hr class="tabhr">
          <q-side-link to="climbs">
            <q-item-main class="small-side" label="How Climbs Are Categorized" />
          </q-side-link>
          <hr class="tabhr">
          <q-side-link to="team">
            <q-item-main class="small-side" label="Team Ride For Hope Idaho Information" />
          </q-side-link>
        </q-collapsible>
        <hr class="tabhr">
        <q-collapsible class="side-collapse" label="Merchandise">
          <q-side-link to="raffle" class="left">
            <q-item-main class="small-side" label="Raffle Items" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="merchandise" class="left">
            <q-item-main class="small-side" label="Jerseys" />
          </q-side-link>
        </q-collapsible>
        <hr class="tabhr">
        <q-side-link to="volunteers">
          <q-item-main class="side" label="Volunteer" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="sponsors">
          <q-item-main class="side" label="Sponsors" />
          <hr class="tabhr">
        </q-side-link>
        <q-collapsible class="side-collapse" label="Galleries">
          <q-side-link to="2018-gallery">
            <q-item-main class="small-side" label="2018 Gallery" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="gallery">
            <q-item-main class="small-side" label="Past Gallery" />
          </q-side-link>
        </q-collapsible>
        <hr class="tabhr">
        <q-side-link to="about">
          <q-item-main class="side" label="About" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="contact">
          <q-item-main class="side" label="Contact" />
          <hr class="tabhr">
        </q-side-link>
      </q-list>
    </div>
    <router-view />
    <!-- <div class="row">
      <div class="col-xs-12">

      </div>
    </div> -->
    <div v-if="home">
      <div class="row justify-center">
        <div class="col-xs-12 text-center">
          <div id="video_overlays" class="absolute text-center">
            <img class="ride self-center text-center vid-logo desktop-only" src="statics/logos/RFHIdahoLogo.png" alt="RFHI Logo">
            <img class="mini self-center text-center vid-logo mobile-only" src="statics/logos/RFHIdahoLogo.png" alt="RFHI Logo">
          </div>
          <video class="fit" id="player" src="./statics/video/short.mp4" type="video/mp4" autoplay loop>Your browser does not support this streaming content.</video>
        
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-xs-12">
          <!-- <q-parallax :speed="1" :height="500" src="./statics/video/header.mp4">
            <div slot="loading">Loading...</div> -->
          <!-- <q-transition appear enter="slideInUp" leave="fadeOut"> -->
          <div class="text-center">
            <div class="promo text-center desktop-only">
              <h5 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h5>
              <hr>
              <h1 class="text-bold">Ride For Hope Idaho</h1>
              <!-- <hr> -->
              <h2 class="text-bold">2019 Event Date: Saturday, June 22</h2>
              <h2 class="text-bold">Kuna, ID</h2>
              <hr>
              <h6 class="q-title">A special thanks to
                <a class="noHighlight" href="https://10barrel.com/" target="_blank">10 Barrel Brewing Co.</a> for hosting hosting a charity night on June 5, 2018 and donating 100% of proceeds
                to Ride For Hope Idaho!</h6>
              <q-btn @click="charitySwal()" class="cbtnm shadow-24 text-center ">Payette Brewing Company Charity Day</q-btn>
            </div>
            <div>
              <!-- <q-btn @click="$refs.charityModal.open()" class="cbtnm shadow-24 text-center">Packet Pick Up Information</q-btn> -->
              <!-- <q-btn @click="$router.push('ride')" class="cbtnm shadow-24 text-center desktop-only">Ride Day Information</q-btn> -->
            </div>
          </div>
          <!-- </q-transition> -->
          <div class="promo text-center mobile-only">
            <h6 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h6>
            <hr>
            <!-- <h4 class="text-bold">Ride For Hope Idaho</h4> -->
            <h5 class="">2019 Event Date:</h5>
            <h5>Saturday, June 22</h5>
            <h5 class="">Kuna, ID</h5>
            <hr>
            <h6 class="q-title">A special thanks to
              <a class="noHighlight" href="https://10barrel.com/" target="_blank">10 Barrel Brewing Co.</a> for hosting a charity night on June 5, 2018 and donating 100% of proceeds to Ride
              For Hope Idaho!</h6>
            <q-btn @click="charitySwal()" class="cbtnm shadow-24 text-center ">Payette Brewing Company Charity Day</q-btn>
          </div>

          <!-- <q-btn @click="$router.push('ride')" class="cbtnm shadow-24 text-center">Ride Day Information</q-btn>
      <q-btn @click="packetSwal()" class="cbtnm shadow-24 text-center">Packet Pick Up Information</q-btn> -->
          </q-parallax>
        </div>
      </div>
      <div class="spacer row wrap">
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          <b>Ride For Hope Idaho</b> is a charity bicycle event with the firm belief that quality healthcare should be accessible
          to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms, but
          the underlying root cause of disease.
        </h6>
        <div class="text-center col-xs-12 col-md-4">
          <img class="ride self-center xs-gutter" src="statics/logos/RFHIdahoLogo.png" alt="ride for hope logo">
        </div>
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          <b>Ride For Hope Idaho</b> is committed to ensuring that 100% of participant fees and donations go directly to charity.
          This unique commitment is made possible by charitable contributions from local sponsors which cover the entire
          cost of the event.
        </h6>
      </div>
      <div class="row wrap">
        <div class="col-xs-12">
          <q-card-media overlay-position="full">
            <q-parallax class="desktop-only" :speed=".7" :height="500" src="./statics/backgrounds/zoomout.jpg">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black">
                </div>
              </q-transition>
            </q-parallax>
            <q-parallax class="mobile-only" :speed=".7" :height="200" src="./statics/backgrounds/zoomout.jpg">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <div class="row justify-around">
                <div class="col-xs-12 text-center">
                  <q-card-title>
                    <h2>Routes</h2>
                  </q-card-title>
                  <hr class="routeshr">
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 border desktop-only">
                  <q-card-media overlay-position="full">
                    <q-parallax :speed="1" :height="260" src="">
                      <q-transition appear enter="slideInUp" leave="fadeOut">
                        <div class="black-back">
                        </div>
                      </q-transition>
                    </q-parallax>
                    <div slot="overlay">
                      <q-card-title class="text-center">
                        <q-btn class="route-btn" @click="$router.push('18-mile')" outline color="red">
                          <h4>18 Mile</h4>
                        </q-btn>
                        <span slot="subtitle">
                          Flat and mellow ride through farmland with one rest stop half-way through course. Race with the bumble bees, fly with the
                          birds and burn up the road with human powered speed! </span>
                      </q-card-title>
                    </div>
                  </q-card-media>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 border desktop-only">
                  <q-card-media overlay-position="full">
                    <q-parallax :speed="1" :height="260" src="">
                      <q-transition appear enter="slideInUp" leave="fadeOut">
                        <div class="black-back">
                        </div>
                      </q-transition>
                    </q-parallax>
                    <div slot="overlay">
                      <q-card-title class="text-center">
                        <q-btn class="route-btn" @click="$router.push('31-mile')" outline color="red">
                          <h4>31 Mile</h4>
                        </q-btn>
                        <span slot="subtitle">
                          Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland. This is a course that will delight
                          those who want to establish a new 40k personal best.
                        </span>
                      </q-card-title>
                    </div>
                  </q-card-media>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 border desktop-only">
                  <q-card-media overlay-position="full">
                    <q-parallax :speed="1" :height="260" src="">
                      <q-transition appear enter="slideInUp" leave="fadeOut">
                        <div class="black-back">
                        </div>
                      </q-transition>
                    </q-parallax>
                    <div slot="overlay">
                      <q-card-title class="text-center">
                        <q-btn class="route-btn" @click="$router.push('metric')" outline color="red">
                          <h4>Metric Century</h4>
                        </q-btn>
                        <span slot="subtitle">
                          Completely redesigned course for 2018. This is a ride for true bikers (i.e., no longer embarrassed to wear spandex). The
                          route Includes rolling hills, scenic overlooks, vineyards and 4 rest stops.
                        </span>
                      </q-card-title>
                    </div>
                  </q-card-media>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 border desktop-only">
                  <q-card-media overlay-position="full">
                    <q-parallax :speed="1" :height="260" src="">
                      <q-transition appear enter="slideInUp" leave="fadeOut">
                        <div class="black-back">
                        </div>
                      </q-transition>
                    </q-parallax>
                    <div slot="overlay">
                      <q-card-title class="text-center">
                        <q-btn class="route-btn" @click="$router.push('Century')" outline color="red">
                          <h4>Century</h4>
                        </q-btn>
                        <span slot="subtitle">
                          Over hill, over dale while avoiding the dusty mountain bike trail. This route is for those who believe toenails are for sissys
                          and blisters are braille for success.
                        </span>
                      </q-card-title>
                    </div>
                  </q-card-media>
                </div>
              </div>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border mobile-only">
          <q-card-media overlay-position="full">
            <q-parallax :speed="1" :height="260" src="">
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <q-btn class="route-btn" @click="$router.push('18-mile')" outline color="red">
                  <h4>18 Mile</h4>
                </q-btn>
                <span slot="subtitle">
                  Flat and mellow ride through farmland with one rest stop half-way through course. Race with the bumble bees, fly with the
                  birds and burn up the road with human powered speed! </span>
              </q-card-title>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border mobile-only">
          <q-card-media overlay-position="full">
            <q-parallax :speed="1" :height="260" src="">
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <q-btn class="route-btn" @click="$router.push('31-mile')" outline color="red">
                  <h4>31 Mile</h4>
                </q-btn>
                <span slot="subtitle">
                  Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland. This is a course that will delight
                  those who want to establish a new 40k personal best.
                </span>
              </q-card-title>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border mobile-only">
          <q-card-media overlay-position="full">
            <q-parallax :speed="1" :height="260" src="">
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <q-btn class="route-btn" @click="$router.push('metric')" outline color="red">
                  <h4>Metric Century</h4>
                </q-btn>
                <span slot="subtitle">
                  Completely redesigned course for 2018. This is a ride for true bikers (i.e., no longer embarrassed to wear spandex). The
                  route Includes rolling hills, scenic overlooks, vineyards and 4 rest stops.
                </span>
              </q-card-title>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border mobile-only">
          <q-card-media overlay-position="full">
            <q-parallax :speed="1" :height="260" src="">
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <q-btn class="route-btn" @click="$router.push('Century')" outline color="red">
                  <h4>Century</h4>
                </q-btn>
                <span slot="subtitle">
                  Over hill, over dale while avoiding the dusty mountain bike trail. This route is for those who believe toenails are for sissys
                  and blisters are braille for success.
                </span>
              </q-card-title>
            </div>
          </q-card-media>
        </div>
      </div>
      <div v-scroll-fire="showVideos" class="row wrap justify-center gen">
        <div class="text-center col-xs-12 col-md-4 self-center">
          <q-btn @click="launch('https://genesiscommunityhealth.com/about-us/')" flat>
            <img class="gch responsive" src="statics/logos/gch.png" alt="genesis community health logo">
          </q-btn>
        </div>
        <h6 class="text-italic text-center light-paragraph col-xs-12 col-md-4 self-center text" data-x="80">
          This year we are proud to support Genesis Community Health and Boise Rescue Mission. Genesis Community Health is an integrated
          healthcare facility providing primary medical care, basic dental, mental health, specialty referral and medication
          to the low-income and uninsured. Boise Rescue Mission provides programs and services including addiction recovery
          and food and shelter for homeless men, women and children.
        </h6>
        <div class="text-center col-xs-12 col-md-4 self-center">
          <q-btn @click="launch('https://boiserm.org/')" flat>
            <img class="responsive check" src="statics/logos/brm.png" alt="Boise Rescue Mission Logo">
          </q-btn>
        </div>
      </div>
      <div class="row justify-center xs-gutter brm-video">
        <div class="col-xs-10 text-center">
          <big>Learn More About Genesis Community Health</big>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <iframe src="https://player.vimeo.com/video/214745227" width="100%" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>
        </div>
        <div class="col-xs-12 text-center self-center mobile-only">
          <hr class="s">
          <h6>Genesis Community</h6>
          <h6> Healthcare Overview</h6>
          <hr class="s">
        </div>
        <div class="col-xs-10 col-md-4 text-center self-center">
          <q-card-media @click="launch('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')"
            class="mobile-only" overlay-postion="full">
            <img src="~statics/video_pics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
          </q-card-media>
          <q-btn flat @click="launch('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')"
            class="shadow-24 two desktop-only ">
            <img src="~statics/video_pics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
            <div class="otwo desktop-only">
              <h5>Genesis Community Healthcare Overview</h5>
            </div>
          </q-btn>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <iframe src="https://player.vimeo.com/video/217763499" width="100%" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>
        </div>
      </div>
      <div class="row justify-center xs-gutter video">
        <div class="col-xs-10 text-center self-center">
          <big>Learn More About Boise Rescue Mission</big>
        </div>
        <div class="col-xs-12 col-md-4 text-center self-center">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/xH7_FBH2oiU?rel=0" frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </div>
        <div class="col-xs-12 col-md-4 text-center self-center">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/SQRwGpdWsRQ?rel=0" frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer text-center text-bold" slot="footer">
      <div class="row justify-center">
        <div class="col-xs-12">
          <h3 class="text-center desktop-only white">
            Thank you for supporting Ride for Hope!
          </h3>
          <h6 class="text-center mobile-only white">
            Thank you for supporting Ride for Hope!
          </h6>
        </div>
        <div class="col-xs-12">
          <div class="row justify-center">
            <div class="col-xs-12">
              <hr class="hr">
            </div>
            <div class="col-xs-6 col-md-3 self-center">
              <q-btn flat @click="launch('https://www.strava.com/clubs/302822')" flat>
                <img class="strava" src="statics/logos/strava.png" alt="strava logo">
              </q-btn>
            </div>
            <div class="col-xs-6 col-md-3 mobile-only self-center">
              <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fa-facebook-square" />
              </q-btn>
            </div>
            <div v-scroll-fire="animate" class="col-md-3 self-center" id="bar">
              <!-- <hr class="hr"> -->
              <!-- <h5 class="text-bold text-italic">Veni Vidi Vici Sponsors</h5> -->
              <q-btn flat data-x="360" class="el" @click="launch('http://www.meridian-cycles.com/')">
                <img class="meridian-big" src="statics/logos/meridian.png" alt="Meridian Cycles logo">
              </q-btn>
            </div>
            <div class="col-md-3 desktop-only self-center">
              <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fa-facebook-square" />
              </q-btn>
            </div>
            <div v-if="!home" class="col-xs-12">
              <hr class="hr">
            </div>
            <div v-if="home" class="col-xs-12">
              <hr class="hr">
              <div class="row justify-center">
                <div class="col-xs-12 pad">
                  <small class="text-center white">
                    Be sure to check out this other great charity ride!
                  </small>
                </div>
                <div class="col-xs-12">
                  <q-btn flat @click="launch('https://www.cycleforindependence.org/')">
                    <img class="meridian-big" src="statics/logos/cfi.jpg" alt="Cycle for independence logo">
                  </q-btn>
                </div>
              </div>
              <hr class="hr">
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn round v-back-to-top.animate="{offset: 200, duration: 200}" class="animate-pop back">
        <q-icon name="keyboard_arrow_up" />
      </q-btn>
    </q-fixed-position>
  </q-layout>
</template>

<script>
  import anime from "animejs";
  import {
    dom,
    event,
    openURL,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTab,
    QTabs,
    QParallax,
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QRouteTab,
    QTransition,
    QSideLink,
    QPopover,
    QCollapsible,
    BackToTop,
    Ripple,
    QFixedPosition,
    ScrollFire,
    QCardMedia,
    QCardActions,
    QVideo,
    QModal,
    date
  } from "quasar";

  export default {
    name: "index",
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      QTab,
      QTabs,
      QParallax,
      QCard,
      QCardTitle,
      QCardSeparator,
      QCardMain,
      QRouteTab,
      QTransition,
      QSideLink,
      QPopover,
      QCollapsible,
      QFixedPosition,
      QCardMedia,
      QCardActions,
      QVideo,
      QModal
    },
    data() {
      return {
        showVid: false,
        showSplash: false
      };
    },
    computed: {
      home() {
        if (this.$route.path == "/") {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      launch(url) {
        openURL(url);
      },
      collapse() {
        this.$refs.popover.close();
        this.$refs.popoverRoutes.close();
        this.$refs.routePopB.close();
      },
      showVideos() {
        this.showVid = true;
      },
      sesame() {
        this.showSplash = true;
      },
      animate() {
        anime({
          targets: "#bar .el",
          translateX: function (el) {
            return 0;
          },
          translateY: function (el, i) {
            return 0;
          },
          scale: function (el, i, l) {
            return 1.25;
          },
          duration: function () {
            return anime.random(500, 800);
          },
          duration: function () {
            return anime.random(800, 1100);
          },
          delay: function () {
            return anime.random(0, 500);
          },
          direction: "reverse"
        });
      },
      funSwal() {
        return swal({
          title: 'Rider Fundraising',
          text: 'This year, each participant has the goal of raising $250 in additional funds for Ride For Hope Idaho. If you wish to simply donate, you can either choose one of these riders to donate to, or just donate to the ride in general.',
          buttons: {
            sponsor: { text: "Sponsor a Rider", value: "sponsor" },
            give: { text: "Give to Ride For Hope Idaho", value: "give" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'sponsor':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')
                break;
              case 'give':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')
                break;
            }
          })
      },
      donSwal() {
        return swal({
          title: 'Donate',
          text: 'This year, each participant has the goal of raising $250 in additional funds for Ride For Hope Idaho. If you wish to simply donate, you can either choose one of these riders to donate to, or just donate to the ride in general.',
          buttons: {
            sponsor: { text: "Sponsor a Rider", value: "sponsor" },
            give: { text: "Give to Ride For Hope Idaho", value: "give" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'sponsor':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')
                break;
              case 'give':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623')
                break;
            }
          })
      },
      charitySwal() {
        return swal({
          title: 'Charity Day',
          text: 'Join us at Payette Brewing Company July 16th, 2018 for a charity night! Stay tuned for more information on this post-ride bash!',
          buttons: {
            // site: { text: "Payette Brewing Company", value: "site" },
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'site':
                this.launch('https://www.payettebrewing.com')
                break;
              case 'dismiss':
                break;
            }
          })
      },
      packetSwal() {
        return swal({
          title: 'Packet Pick Up',
          text: 'Friday, June 22 from 2pm-8pm at Meridian Cycles',
          buttons: {
            site: { text: "More Information", value: "site" },
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'site':
                this.$router.push('packet')
                break;
              case 'dismiss':
                break;
            }
          })
      },
      welcomeSwal() {
        return swal({
          title: 'Thank You!',
          text: 'Thank you to all of the amazing volunteers and riders who helped make the 2018 Ride For Hope Idaho the most successful ever! The fun is not over yet though! Join us July 16th at Payette Brewing Company for a charity night benefiting Ride For Hope Idaho!',
          buttons: {
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'dismiss':
                break;
            }
          })
      }
    },
    directives: {
      BackToTop,
      Ripple,
      ScrollFire
    },
    mounted() {
      this.$refs.layout.hideLeft();

      // Conditions to display swal
      // let dayPass = false;
      // let timeStamp = Date.now()
      // let m = date.formatDate(timeStamp, 'MM')
      // let d = date.formatDate(timeStamp, 'DD')
      // let y = date.formatDate(timeStamp, 'YYYY')
      // if(d == '10' || d == '11' || d == '12' || d == '13' || d == '14' || d == '15' || d == '16'){
      //   dayPass = true;
      // } 
      // if (m == '07' && dayPass && y == '2018') {
      // this.welcomeSwal();
      // }
    },

  };
</script>

<style scoped>
  .vid-logo {
    /* max-width: 20vw; */
    /* height: 100%; */
  }

  .inner {
    /* position: relative;
    left: -50%; */
  }

  .full-vid {
    width: 100%;
    /* margin: -5rem 0 -5rem 0; */
  }

  #video_box {
    /* float: left; */
  }

  #video_overlays {
    /* position: absolute; */
    float: left;
    /* left: 40%; */
    /* width: 640px; */
    /* min-height: 370px; */
    /* background-color: #000; */
    z-index: 300000;
  }

  .noHighlight {
    color: white;
  }

  .space {
    margin: 1rem 0 1rem 0
  }

  .charityModal {
    background-color: rgba(0, 0, 0, 0.479);
  }

  .pad {
    padding-bottom: 1rem;
  }

  .ride-spacer {
    height: 7rem;
  }

  .s {
    width: 70%;
  }

  .check {
    max-width: 30vw;
  }

  .mid {
    height: 35vh;
  }

  .gen {
    background-color: white;
    color: black;
    padding: 1rem 0 1rem 0;
  }

  .container:hover .overlay {
    opacity: 1;

  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(150, 0, 0, 0.699);
  }

  .two:hover .otwo {
    opacity: 1;

  }

  .otwo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(163, 163, 163, 0.699);
  }

  .three:hover .othree {
    opacity: 1;

  }

  .othree {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(70, 28, 28, 0.699);
  }

  .vid {
    width: 100vw;
    height: 100vh;
  }

  .vid-mobile {
    width: 100vw;
    /* height: 100vh; */
  }

  .brm-video {
    background-color: black;
    color: white;
  }

  .video {
    background-color: white;
    color: black;
    padding: 1rem 0 2rem 0;
  }

  .gch {
    width: 20rem;
  }

  .s {
    color: red;
  }

  .route-btn {
    margin-bottom: 1rem;
  }

  .routeshr {
    width: 90%;
    margin-bottom: 3rem;
  }

  .black {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.479);

  }

  .black-back {
    background: rgba(0, 0, 0, 0.308);
    height: 100%;
    width: 100%;
  }

  .border {
    border: 1px white solid;
  }

  .text {
    padding: 1rem;
  }

  .silver {
    padding: 1rem;
  }

  .back {
    background-color: rgba(0, 0, 0, 0.589);
    color: white;
  }

  .hr {
    width: 80%;
  }

  .route-tab-cont {
    margin-bottom: 0.75rem;
  }

  .route-tab {
    color: white;
  }

  .top-title {
    margin-left: 0.5rem;
  }

  .strava-top {
    max-width: 4.5rem;
  }

  .meridian {
    max-width: 9rem;
  }

  .meridian-mobile {
    max-height: 3rem;
    margin-top: 0.5rem;
  }

  .strava {
    width: 10rem;
  }

  .q-item-link:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  .q-list-highlight {
    background: rgba(255, 255, 255, 0.7);
    color: black;
    font-weight: 400;
  }

  .q-popover {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
  }

  .tabhr {
    border-color: black;
    width: 100%;
  }

  .tabhrs {
    border-color: black;
    width: 100%;
  }

  .left-tab {
    text-align: left;
    padding-left: 1rem;
  }

  .small-side {
    font-weight: 400;
    color: black;
    font-size: 1.5rem;
  }

  .side {
    font-weight: 400;
    color: black;
    font-size: 2rem;
  }

  .small {
    font-size: 0.7rem;
  }

  .mini {
    height: 4rem;
  }


  .q-btn {
    text-transform: none;
  }

  .fb {
    color: rgb(59, 89, 152);
    width: 10rem;
  }

  .footer {
    background-color: rgba(17, 17, 17, 0.88);
    color: rgb(180, 0, 0);
    padding-bottom: 3rem;
  }

  .spacer {
    padding: 0.5rem 0 0.5rem 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
  }

  .cbtnm {
    background-color: rgba(218, 0, 0, 0.699);
    color: white;
    padding: 0 2rem 0 2rem;
    margin-top: 1rem;
  }

  .cbtn {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
    padding: 0 2rem 0 2rem;
  }

  .card-routes {
    background-color: rgba(255, 0, 0, 0.664);
    padding: 2rem 2rem 2rem 2rem;
  }

  .card {
    background-color: rgba(197, 7, 7, 0.8);
    padding: 2rem 2rem 2rem 2rem;
  }

  .card-mobile {
    background-color: rgba(197, 7, 7, 0.8);
    /* padding: 2rem 2rem 2rem 2rem; */
  }

  .options {
    display: flex;
    justify-content: space-around;
    background-color: rgba(17, 17, 17, 0.88);
    padding: 3rem 5rem 3rem 5rem;
  }

  .ride {
    margin: 1rem 0 1rem 0;
    max-height: 13rem;
  }



  .promo {
    /* margin-top: -6rem; */
    padding: 1rem 2rem 1rem 2rem;
    /* background-color: rgba(0, 128, 128, 0.803); */
    background-color: rgba(0, 0, 0, 0.699);
    color: white;
    /* color: black; */
    border-radius: 5px;
  }


  .head {
    background-color: rgba(17, 17, 17, 0.88);
    /* color: rgba(17, 17, 17, 0.705); */
  }

  .tab {
    text-transform: none;
    /* background: rgba(8, 8, 8, 0.705); */
  }

  .logo-container {
    width: 255px;
    height: 242px;
    perspective: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .logo {
    position: absolute;
    transform-style: preserve-3d;
  }

  .back {
    /* background-image: url("~assets/cover.jpg"); */
    /* background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover; */
  }
</style>