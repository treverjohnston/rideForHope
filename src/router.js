import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`);
}

export default new VueRouter({
  /*
   * NOTE! VueRouter 'history' mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with 'history' mode, please also open /config/index.js
   * and set 'build.publicPath' to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default 'hash' mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/',
      component: load('Hello'),
      children: [
        {
          path: 'about',
          component: load('About')
        },
        {
          path: 'register',
          component: load('Register')
        },
        {
          path: 'routes',
          component: load('Routes')
        },
        {
          path: 'fundraising',
          component: load('Fundraising')
        },
        {
          path: '9-Mile',
          component: load('Nine')
        },
        {
          path: '19-Mile',
          component: load('Eighteen')
        },
        {
          path: '35-Mile',
          component: load('Thirty')
        },
        {
          path: 'Metric',
          component: load('Metric')
        },
        {
          path: 'Century',
          component: load('Century')
        },
        {
          path: 'donate',
          component: load('Donate')
        },
        {
          path: 'raffle',
          component: load('Raffle')
        },
        {
          path: 'involved',
          component: load('Involved')
        },
        {
          path: 'gallery',
          component: load('Gallery')
        },
        {
          path: '2018-gallery',
          component: load('2018-gallery')
        },
        {
          path: 'merchandise',
          component: load('Merch')
        },
        // {
        //   path: 'volunteers',
        //   component: load('Volunteers')
        // },
        {
          path: 'sponsors',
          component: load('Sponsors')
        },
        {
          path: 'contact',
          component: load('Contact')
        },
        {
          path: 'ride',
          component: load('Ride')
        },
        {
          path: 'rules',
          component: load('Rules')
        },
        {
          path: 'climbs',
          component: load('Climbs')
        },
        {
          path: 'packet',
          component: load('Packet')
        },
        {
          path: 'team',
          component: load('Team')
        },
        {
          path: 'charities',
          component: load('Charities')
        }
      ]
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
});
