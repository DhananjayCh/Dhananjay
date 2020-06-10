var settingApp = angular.module('settingApp', ['CommonAppUtility'])

settingApp.controller('settingController', function ($scope, $http, CommonAppUtilityService) {
    $scope.NoticeData = [];
    $scope.ArticleData = [];

    CommonAppUtilityService.CreateItem("/INT_Setting/getArticleData", '').then(function (response) {
        if (response.status == 200) {
            $scope.ArticleData = response.data;
            setTimeout(function () { bindDataTable('ArticleDataTable'); }, 2000);
        }
        console.log(response);
    });
    CommonAppUtilityService.CreateItem("/INT_Setting/getNoticeData", '').then(function (response) {
        if (response.status == 200) {
            $scope.NoticeData = response.data;
            setTimeout(function () { bindDataTable('NoticeDataTable'); }, 2000);
            
        }
        console.log(response);
    });

    $scope.getTextFromHtml = function (data) {
        return $(data).text();
    }
});