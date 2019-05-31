import vue from 'vue';
import axios from 'axios';
import $ from 'jquery';
import vuex from 'vuex';
import router from '../router';
import { Toast } from 'quasar';
import { Notify } from 'quasar';

// var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//inspireq.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex);
import VueAnalytics from 'vue-analytics';

vue.use(VueAnalytics, {
  id: 'UA-120904325-1',
  checkDuplicatedScript: true,
  router
});

var store = new vuex.Store({
  state: {
    openRegistration: false,
    earlyRegistration: false,
    lvl1: [
    ],
    lvl2: [
      {
        name: 'Lyle Pearson',
        logo: './statics/sponsors/lyle.jpg',
        link: 'https://www.lylepearson.com/'
      },
      {
        name: 'Imago Caeli LLC',
        logo: './statics/sponsors/imago.jpg',
        link: 'https://www.imagocaeli.com/'
      },
      {
        name: 'Ebenezer Websites LLC',
        logo: './statics/sponsors/ebenezer.png',
        link: 'https://www.ebenezerwebsites.com/'
      }
    ],
    lvl3: [
      {
        name: '10 Barrel Brewing Co.',
        logo: './statics/sponsors/10barrel.png',
        link: 'https://10barrel.com/'
      },
      {
        name: '1st Interstate Bank',
        logo: './statics/sponsors/1stInterstate.png',
        link: 'https://www.firstinterstatebank.com/'
      },
      {
        name: 'Meridian Cycles',
        logo: './statics/sponsors/meridian.png',
        link: 'http://www.meridian-cycles.com/'
      },
      {
        name: 'R__B Ranch',
        logo: '',
        link: ''
      },
      {
        name: 'Villager Creative',
        logo: './statics/sponsors/villager.png',
        link: 'https://www.villagercreative.com/'
      },
      {
        name: 'Big K BBQ',
        logo: './statics/sponsors/bigk.jpg',
        link: 'https://bigkbbqidaho.com'
      }
    ],
    lvl4: [
      {
        name: 'Idaho Urologic Institute',
        logo: './statics/sponsors/iui.png',
        link: 'https://www.idurology.com/'
      },
      {
        name: 'Idaho Power',
        logo: './statics/sponsors/power.png',
        link: 'https://www.idahopower.com/'
      },
      {
        name: 'WestMark Credit Union',
        logo: './statics/sponsors/westmark.jpg',
        link: 'https://www.westmark.org/'
      },
      {
        name: 'DaVita Kidney Care',
        logo: './statics/sponsors/davita.png',
        link: 'https://www.davita.com/'
      },
      {
        name: 'McDonough Real Estate Group',
        logo: './statics/sponsors/mcdonough.jpg',
        link: '//www.mcdrealestategroup.com/'
      },
      {
        name: 'Coffee Studio',
        logo: './statics/sponsors/CoffeeStudio.png',
        link: 'https://www.mycoffeestudios.com/'
      }
    ],
    lvl5: [
      {
        name: 'Boise Bike Wrench'
      },
      {
        name: 'Porta Pro'
      },
      {
        name: 'Idaho Tents and Events'
      },
      {
        name: 'Valley Wide REACT'
      },
      {
        name: 'Blue Sky Bagels'
      },
      {
        name: 'Resers'
      },
      {
        name: 'Albertsons'
      },
      {
        name: 'Aqua Tech - Dave Coburn'
      },
      {
        name: 'Georges Cycles'
      },
      {
        name: 'J&M Sanitation'
      },
      {
        name: 'Kuna City'
      },
      {
        name: 'Idaho State University Physician Assistant Program'
      }
    ],
    routes: [
      {
        earlyReg: '$50',
        reg: '$60',
        url: '/9-mile',
        length: '9 Mile',
        pic: '',
        mapLink: '//www.mapmyride.com/routes/view/2264365960',
        restStops: ['East Kuna Mora Road -  4.6 Miles'],
        btnClass: 'btn color',
        headline: 'Virtutem Spei - "Hope and Strength"',
        frame: '//snippets.mapmycdn.com/routes/view/embedded/2264365960?width=600&height=400&elevation=true&line_color=E6d90d8e&rgbhex=8e0dd9&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-09-28T15:24:15-05:00',
        frameMobile: '//snippets.mapmycdn.com/routes/view/embedded/2264365960?width=300&height=450&elevation=true&line_color=E6d90d8e&rgbhex=8e0dd9&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-09-28T15:24:15-05:00',
        startTime: '11:00 AM*',
        otherMaps: [
          {
            title: 'Print Map',
            link: './statics/pdfs/2019_9_MILE_PRINTABLE_MAP.pdf'
          },
          {
            title: 'Map My Ride',
            link: '//www.mapmyride.com/routes/view/2264365960'
          },
          {
            title: 'Strava',
            link: '//www.strava.com/routes/15657759'
          },
          {
            title: 'Garmin',
            link: '//connect.garmin.com/modern/course/20996632'
          },
          {
            title: 'Ride with GPS',
            link: '//ridewithgps.com/routes/27968740'
          }
        ],
        shortDescription:
          'New route for 2019 for those who felt that 19 miles was just a bit too far!  Gentle flat and fun route though farmland and along canals with one rest stop at half way point.  This route is for everyone: road bike, no problem; cruiser bike, no issue; mountain bike, ditto; unicycle, check…….(provided your balance is good enough) !',
        description:
          'New route for 2019 for those who felt that 19 miles was just a bit too far!  Gentle flat and fun route though farmland and along canals with one rest stop at half way point.  This route is for everyone: road bike, no problem; cruiser bike, no issue; mountain bike, ditto; unicycle, check…….(provided your balance is good enough) !'
      },
      {
        earlyReg: '$65',
        reg: '$75',
        url: '/19-mile',
        length: '19 Mile',
        pic: '',
        mapLink: '//www.mapmyride.com/routes/view/996049745',
        restStops: [
          'North Stewart Road – 7.6 Miles',
          'East Kuna Mora Road – 15 Miles'
        ],
        btnClass: 'btn color',
        headline: 'Virtutem Spei - "Hope and Strength"',
        frame: '//snippets.mapmycdn.com/routes/view/embedded/996049745?width=600&height=400&elevation=true&line_color=E60400ff&rgbhex=ff0004&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-09-28T15:24:15-05:00',
        frameMobile: '//snippets.mapmycdn.com/routes/view/embedded/996049745?width=300&height=450&elevation=true&line_color=E60400ff&rgbhex=ff0004&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-09-28T15:24:15-05:00',
        startTime: '11:00 AM*',
        otherMaps: [
          {
            title: 'Print Map',
            link: './statics/pdfs/2019_19_MILE_PRINTABLE_MAP.pdf'
          },
          {
            title: 'Map My Ride',
            link: '//www.mapmyride.com/routes/view/996049745'
          },
          {
            title: 'Strava',
            link: '//www.strava.com/routes/4176344'
          },
          {
            title: 'Garmin',
            link: '//connect.garmin.com/modern/course/20996477'
          },
          {
            title: 'Ride with GPS',
            link: '//ridewithgps.com/routes/28660668'
          }
        ],
        shortDescription:
          'Completely redesigned route for 2019.  Unlike previous years this route takes riders eastward through scenic rolling farmland and returns along winding canals with two rest stops along the way. Every effort was made to add some greater scenic variety to this route for 2019 while maintaining a flat and mellow course.',
        description:
          'Completely redesigned route for 2019.  Unlike previous years this route takes riders eastward through scenic rolling farmland and returns along winding canals with two rest stops along the way. Every effort was made to add some greater scenic variety to this route for 2019 while maintaining a flat and mellow course.'
      },
      {
        earlyReg: '$65',
        reg: '$75',
        url: '/35-mile',
        length: '35 Mile',
        pic:
          '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/31_lst8ag.jpg',
        mapLink: '//www.mapmyride.com/routes/view/1478990992',
        restStops: [
          'Bowmont - 14.2 miles',
          'Melba - 20.9 Miles',
          'W. Dickman 25.3 Miles'
        ],
        btnClass: 'btn color',
        headline: 'Carpe Diem - "Seize The Day"',
        frame: '//snippets.mapmycdn.com/routes/view/embedded/1478990992?width=600&height=400&elevation=true&line_color=E6d9430d&rgbhex=0d43d9&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-09-21T10:32:52-05:00&show_marker_every=3',
        frameMobile: '//snippets.mapmycdn.com/routes/view/embedded/1478990992?width=300&height=450&elevation=true&line_color=E6d9430d&rgbhex=0d43d9&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-09-21T10:32:52-05:00&show_marker_every=3',
        startTime: '10:30 AM*',
        otherMaps: [
          {
            title: 'Print Map',
            link: './statics/pdfs/2019_35_MILE_PRINTABLE_MAP.pdf'
          },
          {
            title: 'Map My Ride',
            link: '//www.mapmyride.com/routes/view/1478990992'
          },
          {
            title: 'Strava',
            link: '//www.strava.com/routes/3647308'
          },
          {
            title: 'Garmin',
            link: '//connect.garmin.com/modern/course/23705949'
          },
          {
            title: 'Ride with GPS',
            link: '//ridewithgps.com/routes/26451284'
          }
        ],
        shortDescription:
          'Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland. This is a course that will delight those who want to establish a new 40k personal best.',
        description:
          'Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland. This is a course that will delight those who want to establish a new 40k personal best. But you surely didn’t train all that time to come to Ride For Hope Idaho just to get it over with as fast as you can; did you?! Stop and smell the roses, converse with your riding partners, and don’t forget to experience a fancy porta-john at one of the three rest stops you will encounter along the route!'
      },
      {
        earlyReg: '$75',
        reg: '$85',
        url: '/metric',
        length: 'Metric Century',
        pic:
          '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/62.8_obydkx.jpg',
        mapLink: '//www.mapmyride.com/routes/view/981667107',
        restStops: [
          'Bowmont - 14.2 Miles',
          'Gun Range- 29.5 Miles',
          'Lake Shore Dr. - 46.6 Miles',
          'Bowmont - 58.5 Miles'
        ],
        btnClass: 'btn color',
        headline: 'Semper Fidelis - "Always Faithful"',
        frame: '//snippets.mapmycdn.com/routes/view/embedded/981667107?width=600&height=400&elevation=true&line_color=E60d5ed9&rgbhex=d95e0d&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-12-16T22:22:58-06:00&show_marker_every=6"',
        frameMobile: '//snippets.mapmycdn.com/routes/view/embedded/981667107?width=300&height=450&elevation=true&line_color=E60d5ed9&rgbhex=d95e0d&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-12-16T22:22:58-06:00&show_marker_every=6"',
        startTime: '9:00 AM*',
        otherMaps: [
          {
            title: 'Print Map',
            link: './statics/pdfs/2019_METRIC_PRINTABLE_MAP.pdf'
          },
          {
            title: 'Map My Ride',
            link: '//www.mapmyride.com/routes/view/981667107'
          },
          {
            title: 'Strava',
            link: '//www.strava.com/routes/4093800'
          },
          {
            title: 'Garmin',
            link: '//connect.garmin.com/modern/course/23734369'
          },
          {
            title: 'Ride with GPS',
            link: '//ridewithgps.com/routes/26451173'
          }],
        shortDescription:
          'Completely redesigned course for 2018. This is a ride for true bikers (i.e., no longer embarrassed to wear spandex). The route Includes rolling hills, scenic overlooks, vineyards and 4 rest stops.',
        description:
          'At 67 miles long, this is a ride for true bikers (i.e. no longer embarrassed to wear spandex and know that STRAVA isn’t a new type of  pasta). The route Includes rolling hills, scenic overlooks, vineyards and 4 rest stops. The course meets up with the last half of the Century route (so you will have additional riders to share your challenge with along the way). You will continue northwest toward Marsing and then turn back toward Kuna and pedal, pedal, pedal, to Lake Shore Drive skirting Lake Lowell on your way back to the finish line where festivities and food await.  Just remember, no matter how slow you go, you are still lapping everybody on the couch!'
      },
      {
        earlyReg: '$75',
        reg: '$85',
        url: '/Century',
        length: 'Century',
        pic:
          '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/100_wi51xj.jpg',
        mapLink: '//www.mapmyride.com/routes/view/1462908562',
        restStops: [
          'W. Dickman - 20.3 Miles',
          'Melba - 34 Miles',
          'Bowmont - 49.6 Miles',
          'Gun Range - 65 Miles',
          'Lake Shore Dr. - 82 Miles',
          'Bowmont - 94 Miles'
        ],
        btnClass: 'btn color',
        headline: 'Veni Vidi Vici - "I Came. I Saw. I Conquered."',
        frame: '//snippets.mapmycdn.com/routes/view/embedded/1462908562?width=600&height=400&elevation=true&line_color=E636d90d&rgbhex=0dd936&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-12-16T22:25:01-06:00&show_marker_every=10',
        frameMobile: '//snippets.mapmycdn.com/routes/view/embedded/1462908562?width=600&height=400&elevation=true&line_color=E636d90d&rgbhex=0dd936&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-12-16T22:25:01-06:00&show_marker_every=10',
        startTime: '7:00 AM*',
        otherMaps: [
          {
            title: 'Print Map',
            link: './statics/pdfs/2019_CENTURY_PRINTABLE_MAP.pdf'
          },
          {
            title: 'Map My Ride',
            link: '//www.mapmyride.com/routes/view/1462908562'
          },
          {
            title: 'Strava',
            link: '//www.strava.com/routes/7741956'
          },
          {
            title: 'Garmin',
            link: '//connect.garmin.com/modern/course/24163088'
          },
          {
            title: 'Ride with GPS',
            link: '//ridewithgps.com/routes/26451231'
          }
        ],
        shortDescription:
          'Over hill, over dale while avoiding the dusty mountain bike trail. This route is for those who believe toenails are for sissys and blisters are braille for success.',
        description:
          '100 mile course. This route is for those who believe toenails are for sissys and blisters are braille for success. There are 6 rest stops with ample opportunity to visit your favorite porta-john. The course has a little of everything including short climbs, rolling hills, and flats. You will trek southward and dip onto the Snake River Scenic Byway before returning to Melba and then on toward Marsing. With your fat cells crying (aka sweating) you will ride through vineyards, orchards and past scenic overlooks. You will skirt Lake Lowell as you head toward the finish line with your riding buddies; who will know more about your bodily functions than your significant other by the time you reach Kuna.'
      }
    ],
    raffles: [
      {
        link: './statics/raffle/IMG_1576.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1671.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1672.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1673.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1674.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1675.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1676.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1677.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1678.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1679.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1680.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1681.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1682.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1683.png',
        donator: '',
        description: ''
      },
      {
        link: './statics/raffle/IMG_1684.png',
        donator: '',
        description: ''
      }
    ],
    pictures: [
      'statics/ride/IMG_8884.JPG.jpg',
      'statics/ride/IMG_8882.JPG.jpg',
      'statics/ride/IMG_8818.JPG.jpg',
      'statics/ride/IMG_8894.JPG.jpg'
    ],
    gallery: [],
    newGallery: [],
    merchandise: [
      {
        src: 'statics/merch/cuore.jpg',
        title: '2019 Ride For Hope Idaho Jersey',
        description: '',
        btn: ''
      },
      {
        src: 'statics/merch/caps.jpg',
        title: '2019 Ride For Hope Idaho Cap',
        description: '',
        btn: ''
      },
      {
        src: 'statics/merch/recbibs.jpg',
        title: '2019 Ride For Hope Idaho Rec Bib',
        description: '',
        btn: ''
      },
      {
        src: 'statics/merch/shorts.jpg',
        title: '2019 Ride For Hope Idaho Shorts',
        description: '',
        btn: ''
      },
      {
        src: 'statics/merch/socks.jpg',
        title: '2019 Ride For Hope Idaho Socks',
        description: '',
        btn: ''
      }
    ]
  },
  mutations: {
    addToNewGallery(state) {
      for (let i = 1; i < 23; i++) {
        state.newGallery.push(`./statics/2018_gallery/${i}.jpg`);
      }
    },
    handleError(state, err) {
      console.error(err);
      // state.error = err
    },
    setPics(state, pics) {
      var arr = [];
      for (let i = 0; i < pics.length; i++) {
        const pic = pics[i];
        var url = `//res.cloudinary.com/treverscloud/image/upload/c_crop/v${
          pic.version
          }/${pic.public_id}.${pic.format}`;
        arr.unshift(url);
      }
      state.gallery = arr;
    }
  },
  actions: {
    getPictures({ commit, dispatch }) {
      // cl.imageTag('rfh.json', { type: 'list' }).toHtml();
      axios
        .get('https://res.cloudinary.com/treverscloud/image/list/rfh.json')
        .then(res => {
          var pics = res.data.resources;
          commit('setPics', pics);
        })
        .catch(err => {
          commit('handleError', err);
        });
    },
    sendEmail({ commit, dispatch }, obj) {
      console.log('email obj', obj);
      $.ajax({
        url: 'https://formspree.io/rideforhopeidaho@gmail.com',
        method: 'POST',
        data: {
          name: obj.name,
          _email: obj.email,
          phone: obj.phone,
          _subject: obj._subject,
          message: obj.message
        },
        dataType: 'json'
      });
      Toast.create('Message Sent');
    }
  }
});

export default store;
