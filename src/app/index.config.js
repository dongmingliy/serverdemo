(function() {
  'use strict';

  angular
    .module('mesosphereDemo')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('grey',{
      'default': '900',
      'hue-1': '300', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '800' // use shade A100 for the <code>md-hue-3</code> class
    })
    .accentPalette('orange')
    .dark();
  }
})();
