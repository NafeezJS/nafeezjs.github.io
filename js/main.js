var app = angular.module('portfolio', ['ngRoute', 'ngMap', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })
    .when("/portfolio", { templateUrl: "partials/portfolio.html", controller: "PageCtrl" })
    .when("/resume", { templateUrl: "partials/resume.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
    } ]);


app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
    console.log("Let's get this started...");
    $scope.pageClass = 'page-effect';

});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 1, category: 'frontend', src: "rgb/rgb1.PNG", description: 'Color picker game', url_details: "details/rgb_details.html" },
          { num: 2, category: 'frontend', src: "keyboardsounds/1.png", description: 'Animation and sound events', url_details: "details/keyboardsounds_details.html" },
          { num: 3, category: 'frontend', src: "thingstodo/thingstodo1.PNG", description: 'To-do list in jQuery', url_details: "details/thingstodo_details.html" },
          { num: 4, category: 'frontend', src: "portfolio/1.PNG", description: 'Portfolio in AngularJS', url_details: "details/portfolio_details.html" },
          { num: 5, category: 'frontend', src: "moviesales/moviesales1.PNG", description: 'Book movie tickets', url_details: "details/moviesales_details.html" },
          { num: 6, category: 'fullstack', src: "readinglist/readinglist1.PNG", description: 'Reading list web app', url_details: "details/readinglist_details.html" },
          { num: 7, category: 'fullstack', src: "cabinhub/5.PNG", description: 'Cabin rentals rating site', url_details: "details/cabinhub_details.html" }];
});


//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);