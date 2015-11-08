(function () {
  'use strict';

  angular
  .module('mesosphereDemo')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdSidenav) {
    var vm = this;
    vm.addServer = addServer;
    vm.servers = [[],[],[],[]];
    vm.canDestroy = true;
    vm.destroyServer = destroyServer;
    vm.addApp = addApp;
    vm.removeApp = removeApp;
    vm.toggleMenu = toggleMenu;
    //store every server index that is running the app
    vm.appsRunning = {
      ha: [],
      ra: [],
      ch: [],
      st: [],
      sp: []
    };
    //uiID is used to determine the background css of the canvas: bg-1-1 for ha, bg-1-2 for ha and ra, etc
    var data = {
      ha: {
        name: 'Hadoop',
        title: 'Ha',
        uiID: 1
      },
      ra: {
        name: 'Rails',
        title: 'Ra',
        uiID: 2
      },
      ch: {
        name: 'Chronos',
        title: 'Ch',
        uiID: 3
      },
      st: {
        name: 'Storm',
        title: 'St',
        uiID: 4
      },
      sp: {
        name: 'Spark',
        title: 'Sp',
        uiID: 5
      }
    };

    function addServer() {
      vm.servers.push([]);
      vm.canDestroy = true;
    }

    function destroyServer() {
      var size = vm.servers.length;
      if (size > 0) {
        var app1 = vm.servers[size - 1][1];
        var app0 = vm.servers[size - 1][0];
        vm.servers.splice(size - 1, 1);
        if (app1) {
          addApp(app1.title.toLowerCase());
        }
        if (app0) {
          addApp(app0.title.toLowerCase());
        }
      }
      if (vm.servers.length === 0) {
        vm.canDestroy = false;
      }
    }

    function addApp(app) {
      if (vm.servers.length === 0) {
        return;
      }
      var inserted = false;
      for (var i = 0; i < vm.servers.length; i++) {
        if (!vm.servers[i][0]) {
          pushApp(i, app);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        for (var j = 0; j < vm.servers.length; j++) {
          if (!vm.servers[j][1]) {
            pushApp(j, app);
            break;
          }
        }
      }
    }

    function pushApp(i, app) {
      data[app].time = Date.now();
      vm.servers[i].push(data[app]);
      vm.appsRunning[app].push(i);
    }

    function removeApp(app) {
      //go to the last server index that runs the app
      var size = vm.appsRunning[app].length;
      if (size === 0) {
        return;
      }
      var index = vm.appsRunning[app][size - 1];
      vm.appsRunning[app].splice(size - 1, 1);
      //remove from second array index if exists
      if (vm.servers[index][1] && vm.servers[index][1].title.toLowerCase() === app) {
        vm.servers[index].splice(1, 1);
      } else if (vm.servers[index][0] && vm.servers[index][0].title.toLowerCase() === app) {
        vm.servers[index].splice(0, 1);
      }
    }

    function toggleMenu() {
      $mdSidenav('sideMenu').toggle();
    }
  }

})();
