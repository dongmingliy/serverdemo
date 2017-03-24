!function(){"use strict";angular.module("mesosphereDemo",["ngAnimate","ngTouch","ngSanitize","ngAria","ngMaterial","angularMoment"])}(),function(){"use strict";function e(e){function n(){o.servers.push([]),o.canDestroy=!0}function a(){var e=o.servers.length;if(e>0){var n=o.servers[e-1][1],a=o.servers[e-1][0];o.servers.splice(e-1,1),n&&i(n.title.toLowerCase()),a&&i(a.title.toLowerCase())}0===o.servers.length&&(o.canDestroy=!1)}function i(e){if(0!==o.servers.length){for(var n=!1,a=0;a<o.servers.length;a++)if(!o.servers[a][0]){s(a,e),n=!0;break}if(!n)for(var i=0;i<o.servers.length;i++)if(!o.servers[i][1]){s(i,e);break}}}function s(e,n){l[n].time=Date.now(),o.servers[e].push(l[n]),o.appsRunning[n].push(e)}function t(e){var n=o.appsRunning[e].length;if(0!==n){var a=o.appsRunning[e][n-1];o.appsRunning[e].splice(n-1,1),o.servers[a][1]&&o.servers[a][1].title.toLowerCase()===e?o.servers[a].splice(1,1):o.servers[a][0]&&o.servers[a][0].title.toLowerCase()===e&&o.servers[a].splice(0,1)}}function r(){e("sideMenu").toggle()}var o=this;o.addServer=n,o.servers=[[],[],[],[]],o.canDestroy=!0,o.destroyServer=a,o.addApp=i,o.removeApp=t,o.toggleMenu=r,o.appsRunning={ha:[],ra:[],ch:[],st:[],sp:[]};var l={ha:{name:"Hadoop",title:"Ha",uiID:1},ra:{name:"Rails",title:"Ra",uiID:2},ch:{name:"Chronos",title:"Ch",uiID:3},st:{name:"Storm",title:"St",uiID:4},sp:{name:"Spark",title:"Sp",uiID:5}}}e.$inject=["$mdSidenav"],angular.module("mesosphereDemo").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("mesosphereDemo").run(e)}(),function(){"use strict";angular.module("mesosphereDemo").constant("moment",moment)}(),function(){"use strict";function e(e){e.theme("default").primaryPalette("grey",{"default":"900","hue-1":"300","hue-2":"600","hue-3":"800"}).accentPalette("orange").dark()}e.$inject=["$mdThemingProvider"],angular.module("mesosphereDemo").config(e)}(),angular.module("mesosphereDemo").run(["$templateCache",function(e){e.put("app/main/main.html",'<div layout="vertical" layout-fill="" ng-controller="MainController as main"><md-sidenav class="md-sidenav-left md-whiteframe-z2 gray-bg" md-component-id="sideMenu" md-is-locked-open="$mdMedia(\'gt-sm\')" layout="column" layout-align="space-around center"><div layout="row" layout-align="center center" class="sidebar-top"><div layout="column" class="caption-small white padding center"><md-button class="md-fab outline ion-plus-round icon-big" ng-click="main.addServer()" aria-label="Plus"></md-button>Add Server</div><div layout="column" class="caption-small white padding center" ng-disabled="!main.canDestroy"><md-button class="md-fab outline ion-minus-round icon-big" ng-click="main.destroyServer()" ng-disabled="!main.canDestroy" aria-label="Minus"></md-button>Destroy</div></div><div layout="column" layout-align="center start" class="full-width"><div class="gray-light padding-left padding-bottom">Available Apps</div><div class="hadoop-app" layout="row" layout-align="space-between center">Hadoop <span><md-button class="md-fab button-mini ion-minus-round" ng-click="main.removeApp(\'ha\')" ng-disabled="!main.appsRunning.ha.length" aria-label="Minus"></md-button><md-button class="md-fab button-mini ion-plus-round" ng-click="main.addApp(\'ha\')" aria-label="Plus"></md-button></span></div><div class="rails-app" layout="row" layout-align="space-between center">Rails <span><md-button class="md-fab button-mini ion-minus-round" ng-click="main.removeApp(\'ra\')" ng-disabled="!main.appsRunning.ra.length" aria-label="Minus"></md-button><md-button class="md-fab button-mini ion-plus-round" ng-click="main.addApp(\'ra\')" aria-label="Plus"></md-button></span></div><div class="chronos-app" layout="row" layout-align="space-between center">Chronos <span><md-button class="md-fab button-mini ion-minus-round" ng-click="main.removeApp(\'ch\')" ng-disabled="!main.appsRunning.ch.length" aria-label="Minus"></md-button><md-button class="md-fab button-mini ion-plus-round" ng-click="main.addApp(\'ch\')" aria-label="Plus"></md-button></span></div><div class="storm-app" layout="row" layout-align="space-between center">Storm <span><md-button class="md-fab button-mini ion-minus-round" ng-click="main.removeApp(\'st\')" ng-disabled="!main.appsRunning.st.length" aria-label="Minus"></md-button><md-button class="md-fab button-mini ion-plus-round" ng-click="main.addApp(\'st\')" aria-label="Plus"></md-button></span></div><div class="spark-app" layout="row" layout-align="space-between center">Spark <span><md-button class="md-fab button-mini ion-minus-round" ng-click="main.removeApp(\'sp\')" ng-disabled="!main.appsRunning.sp.length" aria-label="Minus"></md-button><md-button class="md-fab button-mini ion-plus-round" ng-click="main.addApp(\'sp\')" aria-label="Plus"></md-button></span></div></div><div></div></md-sidenav><md-content layout-fill="" class="black-bg"><section class="padding-left padding-right padding-top"><md-button class="md-raised md-primary button-mini ion-navicon-round" ng-click="main.toggleMenu()" hide-gt-sm=""></md-button><div class="md-display-2 padding-bottom padding-top">Server Canvas</div><div class="padding-left"><md-grid-list md-cols-sm="1" md-cols-md="1" md-cols-gt-lg="4" md-cols-lg="3" md-row-height="5:3" md-gutter="10px"><md-grid-tile class="server-canvas" ng-repeat="server in main.servers" ng-class="\'bg\'+ server[0].uiID + \'-\' + (server[1].uiID || server[0].uiID)"><div layout="column" layout-align="center center"><div class="md-display-2">{{ server[0].title }} {{ server[1].title && \'+\'}} {{server[1].title}}</div><div>{{ server[0].name }} {{ server[1].name && \'+\'}} {{server[1].name }}</div><div class="padding-top black md-caption"><span ng-show="!(server[1].time && server[0].time)"><span ng-show="server[0].time">{{\'Added\'}}</span> <span am-time-ago="server[0].time"></span></span><div ng-show="(server[1].time && server[0].time)"><div><span ng-show="server[0].time">{{\'Added \' + server[0].title}}</span> <span am-time-ago="server[0].time"></span></div><div><span ng-show="server[1].time">{{\'Added \' + server[1].title}}</span> <span am-time-ago="server[1].time"></span></div></div></div></div></md-grid-tile></md-grid-list></div></section></md-content></div>')}]);
//# sourceMappingURL=../maps/scripts/app-a0c568ef3c.js.map
