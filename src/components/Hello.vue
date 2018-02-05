<template>
  <q-layout ref="layout" class="back" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar class="head">
      <q-btn class="mobile-only" flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-btn @click="$router.push('/')">
        <img src="statics/RFHIdahoLogo.png" alt="logo" class="mini">
      </q-btn>
      <q-toolbar-title class="desktop-only">
        Ride For Hope Idaho
      </q-toolbar-title>
      <q-transition class="desktop-only" appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn class="desktop-only" @click="launch('//www.meridian-cycles.com/')">
          <img class="meridian desktop-only" src="statics/meridian.png" alt="Meridian Cycles logo">
        </q-btn>
      </q-transition>
      <q-transition appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn outline color="red" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventStore.aspx%3FfEID%3D67623%26mSource%3DimAOverview')">Just Donate
        </q-btn>
      </q-transition>
      <q-transition class="mobile-only" appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn class="mobile-only" outline @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D67623%26fNew%3D1%26fsource%3DimAEOverview')"
          color="red">Register
        </q-btn>
      </q-transition>
      <q-btn class="mobile-only">
        <img class="meridian-mobile" @click="launch('//www.meridian-cycles.com/')" src="statics/meridian.png" alt="Meridian Cycles logo">
      </q-btn>
    </q-toolbar>
    <q-tabs slot="header" align="center" class="shadow-2 desktop-only tabs">
      <q-route-tab class="tab" slot="title" label="Home" name="home" to="/" />
      <q-tab class="tab" slot="title" color="red" label="Register" name="reg" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D67623%26fNew%3D1%26fsource%3DimAEOverview')"
      />
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
            <q-tab @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D67623%26fNew%3D1%26fsource%3DimAEOverview')"
              name="home" class="tab" slot="title" color="red" label="Register" />
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
      <q-route-tab class="tab" slot="title" label="Gallery" name="gallery" to="gallery" />
      <q-route-tab class="tab" slot="title" label="About" name="about" to="about" />
      <q-route-tab class="tab" slot="title" label="Contact" name="contact" to="contact" />
    </q-tabs>

    <div class="mobile-only left-tab" slot="left">
      <q-list class="mobile-only" no-border link inset-delimiter>
        <q-side-link to="/">
          <q-item-main class="side" label="Home" />
          <hr class="tabhr">
        </q-side-link>
        <!-- <q-side-link> -->
        <q-item-main @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D67623%26fNew%3D1%26fsource%3DimAEOverview')"
          class="side register" label="Register" />
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
          <q-item-main @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D67623%26fNew%3D1%26fsource%3DimAEOverview')"
            class="small-side register" label="Register" />
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
        <q-side-link to="gallery">
          <q-item-main class="side" label="Gallery" />
          <hr class="tabhr">
        </q-side-link>
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
    <div v-if="home">
      <q-parallax :speed="1" :height="500" src="./statics/cover.jpg">
        <div slot="loading">Loading...</div>
        <q-transition appear enter="slideInUp" leave="fadeOut">
          <div class="text-center">
            <div class="promo text-center desktop-only">
              <h5 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h5>
              <h2 class="text-bold">2018 Event Date: Saturday, June 23</h2>
              <h2 class="text-bold">Kuna, ID</h2>
            </div>
            <q-btn @click="$router.push('ride')" class="cbtnm shadow-24 text-center desktop-only">Ride Day Information</q-btn>
          </div>
        </q-transition>
        <div class="promo text-center mobile-only">
          <h6 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h6>
          <h4 class="text-bold">2018 Event Date: Saturday, June 23</h4>
          <h4 class="text-bold">Kuna, ID</h4>
        </div>
        <q-btn @click="$router.push('ride')" class="cbtnm shadow-24 text-center mobile-only">Ride Day Information</q-btn>
      </q-parallax>


      <!-- <div class="row wrap justify-center gen">
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          This year we are proud to support Genesis Community Health and Boise Rescue Mission. Genesis Community Health is an integrated
          healthcare facility providing primary medical care, basic dental, mental health, specialty referral and medication
          to the low-income and uninsured.
        </h6>
        <div class="text-center col-xs-12 col-md-4 self-center">
          <q-btn @click="launch('https://genesiscommunityhealth.com/about-us/')" flat>
            <img class="gch" src="statics/gch.png" alt="genesis community health logo">
          </q-btn>
        </div>
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          To learn more about Genesis Community Health, please watch the videos below.

        </h6>
        <div class="col-xs-10">
        </div>
      </div>
      <div class="row justify-center xs-gutter video">
        <div class="col-xs-10">
          <hr>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <q-btn @click="$refs.vid1.open()" class="shadow-24 container desktop-only">
            <img src="~statics/gen1.jpg" alt="Genesis Info Video" class="responsive">
            <div class="overlay desktop-only">
              <h5> Patient Perspective on Genesis Community Healthcare</h5>
            </div>
          </q-btn>
          <div class="q-video mobile-only">
            <h6> Patient Perspective on Genesis Community Healthcare</h6>
            <iframe src="https://player.vimeo.com/video/214745227" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 text-center">
          <q-btn @click="$refs.vid2.open()" class="shadow-24 two desktop-only">
            <img src="~statics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
            <div class="otwo desktop-only">
              <h5>Genesis Community Healthcare Overview</h5>
            </div>
          </q-btn>
          <div class="q-video mobile-only">
            <h6>Genesis Community Healthcare Overview</h6>
            <iframe class="mid" width="640" height="360" style="border-width:0" src="http://interactive.tegna-media.com/video/embed/embed.html?id=2758268&type=video&title=Low-income health clinic seeks new patients&site=277&playerid=6918249996585&dfpid=32805352&dfpposition=embed_preroll§ion=home"></iframe>

          </div>
        </div>
        <div class="col-xs-12 col-sm-4 text-center">
          <q-btn @click="$refs.vid3.open()" class="shadow-24 three desktop-only">
            <img src="~statics/gen2.jpg" alt="Genesis Info Video" class="responsive">
            <div class="othree desktop-only">
              <h5>Volunteer Perspective On Genesis Community Healthcare</h5>
            </div>
          </q-btn>
          <div class="q-video mobile-only">
            <h6>Volunteer Perspective On Genesis Community Healthcare</h6>
            <iframe src="https://player.vimeo.com/video/217763499" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
          </div>

        </div>
        <div class="col-xs-10">
          <hr>
        </div>
      </div> -->

      <!-- <q-modal ref="vid1" class="vid">
        <div class="row justify-center">
          <div class="col-xs-12">
            <iframe src="https://player.vimeo.com/video/214745227" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
          </div>
        </div>
      </q-modal>

      </q-modal>
      <q-modal ref="vid2" class="vid">
        <div class="row justify-center">
          <div class="col-xs-12">
            <iframe width="640" height="360" style="border-width:0" src="http://interactive.tegna-media.com/video/embed/embed.html?id=2758268&type=video&title=Low-income health clinic seeks new patients&site=277&playerid=6918249996585&dfpid=32805352&dfpposition=embed_preroll§ion=home"></iframe>
          </div>
        </div>
      </q-modal>
      <q-modal ref="vid3" class="vid">
        <div class="row justify-center">
          <div class="col-xs-12">
            <iframe src="https://player.vimeo.com/video/217763499" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
          </div>
        </div>
      </q-modal> -->

      <div class="spacer row wrap">
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          <b>Ride For Hope Idaho</b> is a charity bicycle event with the firm belief that quality healthcare should be accessible
          to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms, but
          the underlying root cause of disease.
        </h6>
        <div class="text-center col-xs-12 col-md-4">
          <img class="ride self-center xs-gutter" src="statics/RFHIdahoLogo.png" alt="ride for hope logo">
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
            <q-parallax class="desktop-only" :speed=".7" :height="500" src="./statics/zoomout.jpg">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black">
                </div>
              </q-transition>
            </q-parallax>
            <q-parallax class="mobile-only" :speed=".7" :height="200" src="./statics/zoomout.jpg">
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
                    <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
                      <div slot="loading">Loading...</div>
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
                    <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
                      <div slot="loading">Loading...</div>
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
                    <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
                      <div slot="loading">Loading...</div>
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
                    <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
                      <div slot="loading">Loading...</div>
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
            <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
              <div slot="loading">Loading...</div>
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
            <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
              <div slot="loading">Loading...</div>
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
            <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
              <div slot="loading">Loading...</div>
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
            <q-parallax :speed="1" :height="260" src="./statics/subtle.png">
              <div slot="loading">Loading...</div>
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
                  <!-- The course has a little of everything including short climbs, rolling hills, and flats -->
                </span>
              </q-card-title>
            </div>
          </q-card-media>
        </div>
      </div>
      <div class="row wrap justify-center gen">
        <div class="text-center col-xs-12 col-md-4 self-center">
          <q-btn @click="launch('https://genesiscommunityhealth.com/about-us/')" flat>
            <img class="gch responsive" src="statics/gch.png" alt="genesis community health logo">
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
            <img class="responsive check" src="statics/brm.png" alt="Boise Rescue Mission Logo">
          </q-btn>
        </div>
        <div class="col-xs-10">
        </div>
      </div>
      <div class="row justify-center xs-gutter video">
        <div class="col-xs-10 text-center">
          <hr>
          <big>Genesis Community Health Videos</big>
          <hr>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <div class="q-video">
            <h6> Patient Perspective on Genesis Community Healthcare</h6>
            <iframe src="https://player.vimeo.com/video/214745227" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 text-center self-center">
  
            <q-card-media @click="launch('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')" class="mobile-only" overlay-postion="full">
                <img src="~statics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
                <div slot="overlay" >
                  <q-card-title>
                    <h5>Genesis Community Healthcare Overview</h5>
                  </q-card-title>  
                </div>
              </q-card-media>
              <q-btn @click="launch('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')" class="shadow-24 two desktop-only">
                <img src="~statics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
                <div class="otwo desktop-only">
                  <h5>Genesis Community Healthcare Overview</h5>
                </div>
              </q-btn>
        </div>
        <div class="col-xs-12 col-sm-4 text-center">
          <div class="q-video ">
            <h6>Volunteer Perspective On Genesis Community Healthcare</h6>
            <iframe src="https://player.vimeo.com/video/217763499" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
          </div>

        </div>
        <div class="col-xs-10">
          <hr>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer text-center text-bold" slot="footer">
      <div class="row justify-center">
        <div class="col-xs-12">
          <h3 class="text-center desktop-only">
            Thank you for supporting Ride for Hope!
          </h3>
          <h6 class="text-center mobile-only">
            Thank you for supporting Ride for Hope!
          </h6>
        </div>
        <div class="col-xs-12">
          <div class="row justify-center">
            <div class="col-xs-12">
              <hr class="hr">
            </div>
            <div class="col-xs-6 col-md-3">
              <q-btn flat @click="launch('https://www.strava.com/clubs/302822')" flat>
                <img class="strava" src="statics/strava.png" alt="strava logo">
              </q-btn>
            </div>
            <div class="col-xs-6 col-md-3 mobile-only">
              <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fa-facebook-square" />
              </q-btn>
            </div>
            <div v-scroll-fire="animate" class="col-md-3" id="bar">
              <!-- <hr class="hr"> -->
              <!-- <h5 class="text-bold text-italic">Veni Vidi Vici Sponsors</h5> -->
              <q-btn flat data-x="360" class="el" @click="launch('http://www.meridian-cycles.com/')">
                <img class="meridian-big" src="statics/meridian.png" alt="Meridian Cycles logo">
              </q-btn>
            </div>
            <div class="col-md-3 desktop-only">
              <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fa-facebook-square" />
              </q-btn>
            </div>
            <div class="col-xs-12">
              <hr class="hr">
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-scroll-fire="animate" class="row justify-center">
        <div class="col-xs-12 col-md-12">
          <div class="row justify-center">
            <div class="col-xs-12">
              <hr class="hr">
              <h5 class="text-bold text-italic">Semper Fidelis Sponsors</h5>
            </div>
            <div class="col-xs-6 col-md-3">
              <q-btn flat @click="launch('https://10barrel.com/pub/boise/')">
                <img @click="launch('https://10barrel.com/pub/boise/')" class="responsive silver" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                  alt="10 Barrel BrewingCo.">
              </q-btn>
            </div>
            <hr class="hr">
          </div>
        </div>
      </div> -->
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
    },
    data() {
      return {};
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
        // this.$refs.popoverReg.close();
        // this.$refs.routePopA.close();
        this.$refs.routePopB.close();
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
      }
    },
    directives: {
      BackToTop,
      Ripple,
      ScrollFire
    },
    mounted() {
      this.$refs.layout.hideLeft();
    },
    beforeDestroy() { }
  };
</script>

<style scoped>
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
    background-color: rgba(150, 0, 0, 0.699);
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
    background-color: rgba(150, 0, 0, 0.699);
  }

  .vid {
    width: 100vw;
    height: 100vh;
  }

  .vid-mobile {
    width: 100vw;
    /* height: 100vh; */
  }

  .video {
    background-color: black;
  }

  .gch {
    width: 20rem;
  }

  .register {
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
    background-color: rgb(17, 17, 17);
    color: rgb(180, 0, 0);
    padding-bottom: 3rem;
  }

  .spacer {
    padding: 0.5rem 0 0.5rem 0;
    background-color: black;
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
    background-color: rgba(0, 128, 128, 0.6);
    color: black;
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
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>