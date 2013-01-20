'use strict';

/* App Module */
angular.module('playground', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/pascal', {templateUrl: 'partials/pascal.html',   controller: FirstCtrl}).
        when('/index', {templateUrl: 'partials/index.html', controller: FirstCtrl}).
        otherwise({redirectTo: '/index'});
}]);