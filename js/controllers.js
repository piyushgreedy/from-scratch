angular.module('poolin.controllers', [])

    .controller("myCtrl", function ($scope, $timeout, $window, $interval) {

        $scope.linewidth = 0;
        $scope.hideline = 0;
        $scope.showtagline = 0;
        $scope.starttimerlogo=1;
        $scope.endtimerlogo=0;

        $scope.planplayfade=0;
        $scope.splitsettlefade=0;


        $scope.splittextone = 0;
        $scope.splittexttwo = 0;
        $scope.splittextthree=0;
        $scope.splittextfour=0;

        $scope.splitsettleimageonefading=0;
        $scope.splitsettleimagetwofading=0;
        $scope.splitsettleimagethreefading=0;
        $scope.splitsettleimagefourfading=0;

        $scope.splitandsettletimerone = null;

        $scope.splitsettleimageonefading=1;
        $scope.splittextone = 1;

        //Timer start function.
        $scope.StartTimerSettle = function () {
            $scope.splitsettlefade=1;
            $scope.callAtInterval();

        };


        //Timer stop function.
        $scope.StopTimerSettle = function () {

            $scope.splitsettlefade=0;

            $timeout.cancel($scope.splitandsettletimerone);
            $scope.splittextone = 1;
            $scope.splittexttwo = 0;
            $scope.splittextthree=0;
            $scope.splittextfour=0;

            $scope.splitsettleimageonefading=1;
            $scope.splitsettleimagetwofading=0;
            $scope.splitsettleimagethreefading=0;
            $scope.splitsettleimagefourfading=0;

        };


        $scope.callAtInterval = function () {

            $scope.splitandsettletimerone =  $timeout(function () {
                console.log(1);

                $scope.splittextone = 0;
                $scope.splittexttwo = 1;
                $scope.splittextthree = 0;
                $scope.splittextfour = 0;
                $scope.splitsettleimageonefading=0;
                $scope.splitsettleimagetwofading=1;
                $scope.splitsettleimagethreefading=0;
                $scope.splitsettleimagefourfading=0;

                $scope.splitandsettletimerone = $timeout(function () {
                    console.log(2);

                    $scope.splittextone = 0;
                    $scope.splittexttwo =0;
                    $scope.splittextthree = 1;
                    $scope.splittextfour = 0;
                    $scope.splitsettleimageonefading=0;
                    $scope.splitsettleimagetwofading=0;
                    $scope.splitsettleimagethreefading=1;
                    $scope.splitsettleimagefourfading=0;

                    $scope.splitandsettletimerone=  $timeout(function () {
                        console.log(2);

                        $scope.splittextone = 0;
                        $scope.splittexttwo = 0;
                        $scope.splittextthree = 0;
                        $scope.splittextfour = 1;
                        $scope.splitsettleimageonefading=0;
                        $scope.splitsettleimagetwofading=0;
                        $scope.splitsettleimagethreefading=0;
                        $scope.splitsettleimagefourfading=1;

                        $scope.splitandsettletimerone=  $timeout(function () {
                            console.log(2);

                            $scope.splittextone = 1;
                            $scope.splittexttwo = 0;
                            $scope.splittextthree = 0;
                            $scope.splittextfour = 0;
                            $scope.splitsettleimageonefading=1;
                            $scope.splitsettleimagetwofading=0;
                            $scope.splitsettleimagethreefading=0;
                            $scope.splitsettleimagefourfading=0;
                            $scope.callAtInterval();
                        }, 1200);
                    }, 1200);
                }, 1200);
            }, 1200);
        }



        $scope.plantextone = 0;
        $scope.plantexttwo = 0;
        $scope.plantextthree=0;
        $scope.plantextfour=0;

        $scope.planimageonefading=0;
        $scope.planimagetwofading=0;
        $scope.planimagethreefading=0;
        $scope.planimagefourfading=0;

        $scope.plantimerone = null;

        $scope.planimageonefading=1;
        $scope.plantextone = 1;

        //Timer start function.
        $scope.StartTimerPlay = function () {
            $scope.planplayfade=1;

            $scope.callAtIntervalPlay();

        };


        //Timer stop function.
        $scope.StopTimerPlay = function () {

            $scope.planplayfade=0;

            $timeout.cancel($scope.plantimerone);
            $scope.plantextone = 1;
            $scope.plantexttwo = 0;
            $scope.plantextthree=0;
            $scope.plantextfour=0;

            $scope.planimageonefading=1;
            $scope.planimagetwofading=0;
            $scope.planimagethreefading=0;
            $scope.planimagefourfading=0;

        };


        $scope.callAtIntervalPlay = function () {

            $scope.plantimerone =  $timeout(function () {
                console.log(1);

                $scope.plantextone = 0;
                $scope.plantexttwo = 1;
                $scope.plantextthree = 0;
                $scope.plantextfour = 0;
                $scope.planimageonefading=0;
                $scope.planimagetwofading=1;
                $scope.planimagethreefading=0;
                $scope.planimagefourfading=0;

                $scope.plantimerone = $timeout(function () {
                    console.log(2);

                    $scope.plantextone = 0;
                    $scope.plantexttwo =0;
                    $scope.plantextthree = 1;
                    $scope.plantextfour = 0;
                    $scope.planimageonefading=0;
                    $scope.planimagetwofading=0;
                    $scope.planimagethreefading=1;
                    $scope.planimagefourfading=0;

                    $scope.plantimerone=  $timeout(function () {
                        console.log(2);

                        $scope.plantextone = 0;
                        $scope.plantexttwo = 0;
                        $scope.plantextthree = 0;
                        $scope.plantextfour = 1;
                        $scope.planimageonefading=0;
                        $scope.planimagetwofading=0;
                        $scope.planimagethreefading=0;
                        $scope.planimagefourfading=1;

                        $scope.plantimerone=  $timeout(function () {
                            console.log(2);

                            $scope.plantextone = 1;
                            $scope.plantexttwo = 0;
                            $scope.plantextthree = 0;
                            $scope.plantextfour = 0;
                            $scope.planimageonefading=1;
                            $scope.planimagetwofading=0;
                            $scope.planimagethreefading=0;
                            $scope.planimagefourfading=0;
                            $scope.callAtIntervalPlay();
                        }, 1200);
                    }, 1200);
                }, 1200);
            }, 1200);
        }




        $timeout(function () {
            $scope.linewidth = !$scope.linewidth;
            $scope.hideline = !$scope.hideline;
        }, 500);

        $timeout(function () {
            $scope.showlogo = 1;

        }, 3000);

        $timeout(function () {
            $scope.showtagline = 1;
            $scope.lightbackground=1;
            $scope.navcolour=1;
            $scope.iconbarchange=1;

        },1000);

        $scope.firstDivHide = 0;
        $scope.secondDivHide = 0;
        $scope.firstDivShow = 1;
        $scope.secondDivShow = 1;

        $scope.showline = 1;
        $scope.hideline = 0;

        $scope.fadeRight = function () {
            $scope.secondDivHide = 1;
            $scope.firstDivShow = 1;
            $scope.firstDivHide = 0;
        }

        $scope.fadeLeft = function () {
            $scope.firstDivHide = 1;
            $scope.secondDivShow = 1;
            $scope.secondDivHide = 0;
        }

        $scope.iconbarchange=0;

        $(document).ready(function () {
            $(window).scroll(function () { // check if scroll event happened
                if ($(document).scrollTop() > 350) { // check if user scrolled more than 50 from top of the browser window
                    $(".navbar-fixed-top").css("background-color", "#5585B5"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".hidelogo").css("opacity", "1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".starttimerlogo").css("display", "none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".endtimerlogo").css("display", "initial"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

                } else {
                    $(".navbar-fixed-top").css("background-color", "#FFFFFF"); // if not, change it back to transparent
                    $(".hidelogo").css("opacity", "0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".starttimerlogo").css("display","initial"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".endtimerlogo").css("display","none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

                }
            });
        });

    });
