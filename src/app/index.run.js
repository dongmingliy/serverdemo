(function() {
  'use strict';

  angular
    .module('mesosphereDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
