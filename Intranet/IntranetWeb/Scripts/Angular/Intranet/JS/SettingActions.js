var settingApp = angular.module('settingApp', ['CommonAppUtility'])

settingApp.controller('settingController', function ($scope, $http, CommonAppUtilityService) {
    $scope.NoticeData = [];
    $scope.ArticleData = [];
    $scope.EventData = [];
    $scope.SliderData = [];
    $scope.AwardData = [];

    $scope.urlfix = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];    

    //var scriptBase = getParameterByName("SPHostUrl") + "/_layouts/15/";
    //$.getScript(scriptBase + "MicrosoftAjax.js").then(function (data) {
    //    return $.getScript(scriptbase + "SP.Runtime.js");
    //}).then(function (data) {
    //    return $.getScript(scriptbase + "SP.js");
    //}).then(function (data) {
    //    return $.getScript(scriptbase + "SP.UI.Dialog.js");
    //}).then(function (data) {
    //    $.getScript(scriptBase + "SP.RequestExecutor.js");
    //        }).then(function (data) {

    //        });


    getArticle();
    console.log(getParameterByName('SPHostUrl'));
    function getArticle() {
      //  $("#global-loader").fadeIn("slow");
        CommonAppUtilityService.CreateItem("/INT_Setting/getArticleData", '').then(function (response) {
            if (response.status == 200) {
                $scope.ArticleData = response.data;
                $('#ArticleDataTable').DataTable().clear();
                $('#ArticleDataTable').DataTable().destroy();
                setTimeout(function () {
                    $scope.$apply();

                    bindDataTable('ArticleDataTable');
                    $("#global-loader").fadeOut("slow");
                }, 500);
            }
            console.log(response);
        });
    }

    function getNotice() {
        //$("#global-loader").fadeIn("slow");
        CommonAppUtilityService.CreateItem("/INT_Setting/getNoticeData", '').then(function (response) {
            if (response.status == 200) {
                $scope.NoticeData = response.data;
                setTimeout(function () {
                    bindDataTable('NoticeDataTable');
                    $("#global-loader").fadeOut("slow");
                }, 500);
            
            }
            console.log(response);
        });
    }

    function getEvent() {
       // $("#global-loader").fadeIn("slow");
        CommonAppUtilityService.CreateItem("/INT_Setting/getEventData", '').then(function (response) {
            if (response.status == 200) {
                $scope.EventData = response.data;
                setTimeout(function () {
                    bindDataTable('EventDataTable');
                    $("#global-loader").fadeOut("slow");
                }, 500);

            }
            console.log(response);
        });
    }

    function getSlider() {
       // $("#global-loader").fadeIn("slow");
        CommonAppUtilityService.CreateItem("/INT_Setting/getSiderData", '').then(function (response) {
            if (response.status == 200) {
                $scope.SliderData = response.data;
                setTimeout(function () {
                    bindDataTable('SliderDataTable');
                    $("#global-loader").fadeOut("slow");
                }, 500);

            }
            console.log(response);
        });
    }

    function getAward() {
        //$("#global-loader").fadeIn("slow");
        CommonAppUtilityService.CreateItem("/INT_Setting/getAwardsData", '').then(function (response) {
            if (response.status == 200) {
                $scope.AwardData = response.data;
                setTimeout(function () {
                    bindDataTable('AwardDataTable');
                    $("#global-loader").fadeOut("slow");
                }, 500);

            }
            console.log(response);
        });
    }

    $scope.getTextFromHtml = function (data) {
        return $(data).text();
    }

    $(function () {
        $("#myDiv").click(function () {
           // function openModelDialogPopup(strPageURL) {
                var dialogOptions = {
                    url: 'https://ascenworktech.sharepoint.com/sites/Wizrr-Development/Lists/INT_QuickLink/AllItems.aspx',
                    title: 'ModalDialog',
                    allowMaximize: false,
                    showClose: true,
                    width: 800,
                    height: 330
                };
                SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', dialogOptions);
                return false;
           // }
        });
    }); 

    $(document).on('click', '.tabClick li', function () {
        $("#global-loader").fadeIn("slow");
        if ($(this).attr('data-title') == "Article") {
            getArticle();
        } else if ($(this).attr('data-title') == "Notice") {
            getNotice();
        } else if ($(this).attr('data-title') == "Event") {
            getEvent();
        } else if ($(this).attr('data-title') == "Slider") {
            getSlider();
        } else if ($(this).attr('data-title') == "Awards") {
            getAward();
        } else {
            $("#global-loader").fadeOut("slow");
        }

    })

    $(document).on('click', '#saveActionData', function () {
        if ($(this).attr('data-saveType') == "Article") {
            if ($(this).attr('data-operation') == "Save") {
                saveArticle('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveArticle('edit');
            }
            
        }
    });

    function saveArticle(processType) {
        var articleValidateArray = [
            { 'id': 'Article_Title', 'message': 'Please Enter Article Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id':'' },
            { 'id': 'note-editable', 'message': 'Please Enter Article Content', 'type': 'richtextbox', 'selector_Type': 'class', 'parent_Id': 'note-editor' },
        ]
        if (validateSave(articleValidateArray)) {


            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");
            
            if (processType == 'save')
                callArticleSave();
            else if (processType == 'edit')
                callrticleUpdate();

        }
    }

    function callArticleSave() {
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Article_Title': $('#Article_Title').val(),
            'Description': $('.note-editable').html(),
            'Pinned_Article': pinnedData,
            'Active': activeData,
           

        }
        CommonAppUtilityService.CreateItem("/INT_Setting/SaveArticleData", data).then(function (response) {
            if (response.data[0] == "OK") {
                //$("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');
                getArticle();
            }
            // $('#SuccessModelProject').modal('show');

        });
    }

    function callrticleUpdate() {
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Article_Title': $('#Article_Title').val(),
            'Description': $('.note-editable').html(),
            'Pinned_Article': pinnedData,
            'Active': activeData,
            'ID': parseInt($('#saveActionData').attr('data-updateId'))

        }
        CommonAppUtilityService.CreateItem("/INT_Setting/UpdateArticleData", data).then(function (response) {
            if (response.data[0] == "OK") {
                //$("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');
                getArticle();
            }
            // $('#SuccessModelProject').modal('show');

        });
    }

    function validateSave(arrayData) {
        var returnResult = true;
        for (var i = 0; i < arrayData.length; i++) {
            if (arrayData[i].selector_Type == "id") {
                if (arrayData[i].type == "textbox") {
                    if ($("#" + arrayData[i].id).val() == "" || $("#" + arrayData[i].id).val() == null) {
                        $("#" + arrayData[i].id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                        $("#" + arrayData[i].id).addClass('errorClass');
                        $("#" + arrayData[i].id).focus();
                        returnResult = false;
                        return false;
                    }


                } else if (arrayData[i].type == "richtextbox") {
                    if ($("#" + arrayData[i].id).text() == "" || $("#" + arrayData[i].id).text() == null) {
                        $("#" + arrayData[i].id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                        $("#" + arrayData[i].id).addClass('errorBorderRichText');
                        $("#" + arrayData[i].id).focus();
                        returnResult = false;
                        return false;
                    }

                }

            } else if (arrayData[i].selector_Type == "class") {
                if (arrayData[i].type == "textbox") {
                    if ($("." + arrayData[i].id).val() == "" || $("." + arrayData[i].id).val() == null) {
                        $("." + arrayData[i].id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                        $("." + arrayData[i].id).addClass('errorClass');
                        $("." + arrayData[i].id).focus();
                        returnResult = false;
                        return false;
                    }

                } else if (arrayData[i].type == "richtextbox") {
                    if (arrayData[i].parent_Id != "") {
                        if ($("." + arrayData[i].id).text() == "" || $("." + arrayData[i].id).text() == null) {
                            $("." + arrayData[i].parent_Id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                            $("." + arrayData[i].parent_Id).addClass('errorBorderRichText');
                            $("." + arrayData[i].parent_Id).focus();
                            returnResult = false;
                            return false;
                        }
                    } else {
                        if ($("." + arrayData[i].id).text() == "" || $("." + arrayData[i].id).text() == null) {
                            $("." + arrayData[i].id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                            $("." + arrayData[i].id).addClass('errorBorderRichText');
                            $("." + arrayData[i].id).focus();
                            returnResult = false;
                            return false;
                        }
                    }


                }
            }
        }

        return returnResult;
    }

    $scope.editPopUp = function (a,openFor) {
        inilizeEditpopUp(a,openFor);
        console.log(a);
    }


    function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

});