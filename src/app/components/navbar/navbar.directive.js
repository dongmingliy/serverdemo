(function() {
  'use strict';

  angular
    .module('mesosphereDemo')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      bindToController: true
    };

    return directive;
  }

})();
