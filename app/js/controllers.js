'use strict';

/* Controllers */

function FirstCtrl($scope) {
    $scope.test = function (i, j) {
        if (i > 0 && j > 0) {
            return $scope.test(i, j - 1) + $scope.test(i - 1, j);
        }
        return i + j;
    }
}
