var settingApp = angular.module('settingApp', ['CommonAppUtility'])

settingApp.controller('settingController', function ($scope, $http, CommonAppUtilityService) {
    $scope.NoticeData = [];
    $scope.ArticleData = [];
    $scope.EventData = [];
    $scope.SliderData = [];
    $scope.AwardData = [];
    $scope.GalleryData = [];

    var noticeDoc = {};

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

    $("#global-loader").fadeIn("slow");
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
                $('#NoticeDataTable').DataTable().clear();
                $('#NoticeDataTable').DataTable().destroy();
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
                $('#EventDataTable').DataTable().clear();
                $('#EventDataTable').DataTable().destroy();
                setTimeout(function () {
                    $scope.$apply();
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
                $('#SliderDataTable').DataTable().clear();
                $('#SliderDataTable').DataTable().destroy();
                setTimeout(function () {
                    $scope.$apply();
                    bindDataTable('SliderDataTable');
                    $("#global-loader").fadeOut("slow");
                }, 500);

            }
            console.log(response);
        });
    }

    function getGallery() {
        // $("#global-loader").fadeIn("slow");
        CommonAppUtilityService.CreateItem("/INT_Setting/getGalleryData", '').then(function (response) {
            if (response.status == 200) {
                $scope.GalleryData = response.data;
                $('#GalleryDataTable').DataTable().clear();
                $('#GalleryDataTable').DataTable().destroy();
                setTimeout(function () {
                    $scope.$apply();
                    bindDataTable('GalleryDataTable');
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
                console.log($scope.AwardData);
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
        } else if ($(this).attr('data-title') == "Photo Gallery") {
            getGallery();
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
        } else if ($(this).attr('data-saveType') == "Event") {
            if ($(this).attr('data-operation') == "Save") {
                saveEvent('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveEvent('edit');
            }  
        } else if ($(this).attr('data-saveType') == "Notice") {
            if ($(this).attr('data-operation') == "Save") {
                saveNotice('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveNotice('edit');
            }
        } else if ($(this).attr('data-saveType') == "Slider") {
            if ($(this).attr('data-operation') == "Save") {
                saveSlider('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveSlider('edit');
            }
        } else if ($(this).attr('data-saveType') == "Gallery") {
            if ($(this).attr('data-operation') == "Save") {
                saveGallery('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveGallery('edit');
            }
        }

    });

    function saveGallery(processType) {
        var articleValidateArray = [
            { 'id': 'Gallery_Title', 'message': 'Please Enter Album Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
        ]
        if (validateSave(articleValidateArray)) {
            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");
            callGallerySave(processType);

        }
       
    }

    function callGallerySave(type) {
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Album_Title': $('#Gallery_Title').val(),
            'Pinned_Album': pinnedData,
            'Active': activeData,
        }

        if (type == "edit") {
            data.ID = parseInt($('#saveActionData').attr('data-updateId'));

            var slectedFiles = getSelectedUploadFile();
            console.log(slectedFiles);
            var fileDataNew = new FormData();
            for (var i = 0; i < slectedFiles.length; i++) {
                fileDataNew.append(slectedFiles[i].fileData.uploadName, slectedFiles[i].fileData);
            }
            var objArr = [];
            objArr.push(data);

            fileDataNew.append('ParentData', JSON.stringify(objArr));

            CommonAppUtilityService.DataWithFile("/INT_Setting/UpdateGallery", fileDataNew).then(function (data) {
                if (data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getGallery();
                }
            });

        } else {
            var slectedFiles = getSelectedUploadFile();
            console.log(slectedFiles);
            var fileDataNew = new FormData();
            for (var i = 0; i < slectedFiles.length; i++) {
                fileDataNew.append(slectedFiles[i].fileData.uploadName, slectedFiles[i].fileData);
            }
            var objArr = [];
            objArr.push(data);

            fileDataNew.append('ParentData', JSON.stringify(objArr));

            CommonAppUtilityService.DataWithFile("/INT_Setting/SaveGallery", fileDataNew).then(function (data) {
                if (data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getGallery();
                }
            });
        }
    }

    $(document).on('click', '#deleteGalleryImage', function () {
        var Id = $(this).attr("data-Id");
        var currentEl = this;
        $('#exampleModalRight').modal('hide');
        swal({
            title: "File Delete",
            text: "Are you sure do you really want to delete this File?",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function () {
                $(currentEl).closest(".col-md-6").remove();
                deleteGalleryImageFile(Id);
        });
    })

    function deleteGalleryImageFile(Id) {
       // $("#global-loader").fadeIn("slow");
        var data = {
            Id: Id
        }
        CommonAppUtilityService.CreateItem("/INT_Setting/DeleteGalleryImg", data).then(function (response) {
            if (response.data[0] == "OK") {
                swal({
                    title: "Success!",
                    text: "Your file deleted successfully!",
                    type: "success",
                    timer: 2000,
                })
                    $('#exampleModalRight').modal('show');

                
                
            }

        });
    }

    $(document).on('change', '#customFile', function (e) {
        noticeDoc = e.currentTarget.files[0]
        console.log(noticeDoc);
        $("#attachedFile").empty().append("<li>"+noticeDoc.name+"</li>")
    })

    $(document).on('click', '#attachDoc', function () {
        if ($(this).hasClass('on')) {
            $(".noticeDocDiv").show();
        } else {
            $(".noticeDocDiv").hide();
        }
    })

    function saveSlider(processType) {
        var articleValidateArray = [
            { 'id': 'Slider_Title', 'message': 'Please Enter Slider Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
            { 'id': 'Slider_Subject', 'message': 'Please Enter Slider Subject', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
            { 'id': 'note-editable', 'message': 'Please Enter Slider Content', 'type': 'richtextbox', 'selector_Type': 'class', 'parent_Id': 'note-editor' },
        ]
        if (validateSave(articleValidateArray)) {

            if ($("#silderFiles").parent().find('.dropify-preview:visible').length == 0) {
                $(".dropify-wrapper").parent().append("<label class='error'>Add Slider Image</label>");
                    //$("#end_End_Div").addClass('errorBorderRichText');
                    // $("#end_End_Div").focus();
                    return false;
                }

           $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");

            if ($("#silderFiles").parent().find('.dropify-preview:visible').length != 0) {
                if ($("#silderFiles")[0].files.length != 0) {
                    saveFile($("#silderFiles")[0].files[0], '/INT_Setting/SaveImages').then(function (data) {
                        console.log('ImageSave');
                        console.log(data);
                        callSliderSave(data, processType);
                    })
                } else {
                    callSliderSave(null, processType);
                }
            }

             

        }
    }

    function callSliderSave(docUrl, type) {
        var activeData = $('#active_Check').hasClass('on');
        var data = {
            'Slider_Subject': $('#Slider_Title').val(),
            'Description': $('.note-editable').html(),
            'Slider_Title': $('#Slider_Subject').val(),
            'Active': activeData,
        }
        if (docUrl != null && docUrl != "") {
            data.Slider_Image_Url = docUrl;
        }

        if (type == "edit") {
            data.ID = parseInt($('#saveActionData').attr('data-updateId'));

            CommonAppUtilityService.CreateItem("/INT_Setting/UpdateSliderData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getSlider();
                }

            });
        } else {
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveSliderData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getSlider();
                }

            });
        }
    }


    function saveNotice(processType) {
        var articleValidateArray = [
            { 'id': 'Notice_Title', 'message': 'Please Enter Article Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
            { 'id': 'note-editable', 'message': 'Please Enter Article Content', 'type': 'richtextbox', 'selector_Type': 'class', 'parent_Id': 'note-editor' },
        ]
        if (validateSave(articleValidateArray)) {

            if ($('#attachDoc').hasClass('on')) {
                if ($("#attachedFile").find("li").length == 0) {
                    $(".noticeDocDiv :first").append("<label class='error'>Add documents</label>");
                    //$("#end_End_Div").addClass('errorBorderRichText');
                   // $("#end_End_Div").focus();
                    return false;
                }
            }

            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");

            if ($('#attachDoc').hasClass('on')) {
                var fileType = (noticeDoc.type).split("/")[1];

                if ((fileType).toLowerCase() == "jpeg" || (fileType).toLowerCase() == "jpg" || (fileType).toLowerCase() == "png" || (fileType).toLowerCase() == "gif") {
                    saveFile(noticeDoc, '/INT_Setting/SaveImages').then(function (data) {
                        console.log('ImageSave');
                        console.log(data);
                        callNoticeSave(data, fileType, processType);
                    })
                } else {
                    saveFile(noticeDoc, '/INT_Setting/SaveDocument').then(function (data) {
                        console.log('ImageSave');
                        console.log(data);
                        callNoticeSave(data, fileType, processType);
                    })
                }

            } else {
                callNoticeSave('', 'Text', processType);
            }

        }
    }

    function callNoticeSave(docUrl,docType,type) {
        var attachDocData = $('#attachDoc').hasClass('on');
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Notice_Title': $('#Notice_Title').val(),
            'Description': $('.note-editable').html(),
            'Notice_Type': docType,
            'DocUrl': docUrl,
            'Pinned_Notice': pinnedData,
            'Active': activeData,
        }

        if (type == "edit") {
            data.ID = parseInt($('#saveActionData').attr('data-updateId'));

            CommonAppUtilityService.CreateItem("/INT_Setting/UpdateNoticeData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    //$("#global-loader").fadeOut("slow");
                    $('#SuccessModelProject').modal('show');
                    getNotice();
                }
                // $('#SuccessModelProject').modal('show');

            });
        } else {
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveNoticeData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    //$("#global-loader").fadeOut("slow");
                    $('#SuccessModelProject').modal('show');
                    getNotice();
                }
                // $('#SuccessModelProject').modal('show');

            });
        } 
    }

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
                callArticleUpdate();

        }
    }

    $(document).on('click', '#Event_AllDay', function () {
        if ($(this).hasClass('on')) {
            $(".endDateDiv").hide();
        } else {
            $(".endDateDiv").show();
        }
    })

    function saveEvent(processType) {
        var eventValidateArray = [
            { 'id': 'Event_Title', 'message': 'Please Enter Event Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
            { 'id': 'dateTimePickerStart', 'message': 'Please Select Start Date', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': 'start_Date_Div' },
            //{ 'id': 'dateTimePickerEnd', 'message': 'Please Select End Date', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': 'end_End_Div' },
            { 'id': 'note-editable', 'message': 'Please Enter Event Content', 'type': 'richtextbox', 'selector_Type': 'class', 'parent_Id': 'note-editor' },
        ]
        if (validateSave(eventValidateArray)) {

            if (!$('#Event_AllDay').hasClass('on')) {
                if ($("#dateTimePickerEnd").val() == "" || $("#dateTimePickerEnd").val() == null) {
                    $("#end_End_Div").parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                    $("#end_End_Div").addClass('errorBorderRichText');
                    $("#end_End_Div").focus();
                    return false;
                } else if (moment($("#dateTimePickerEnd").val(), 'DD-MM-YYYY')._d < moment($("#dateTimePickerStart").val(), 'DD-MM-YYYY')._d) {
                    $("#end_End_Div").parent().append("<label class='error'>Start Date must be less than End Date</label>");
                    $("#end_End_Div").addClass('errorBorderRichText');
                    $("#end_End_Div").focus();
                    return false;
                }
            }

            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");

            if (processType == 'save')
                callEventSave();
            else if (processType == 'edit')
                callEventUpdate();

        }
    }


    function callEventSave() {
        var allDaysData = $('#Event_AllDay').hasClass('on');
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Event_Name': $('#Event_Title').val(),
            'Description': $('.note-editable').html(),
            'Start_Date': moment($('#dateTimePickerStart').val(),'DD-MM-YYYY').format('MM/DD/YYYY'),
            'End_Date': $('#Event_AllDay').hasClass('on') == true?'':moment($('#dateTimePickerEnd').val(), 'DD-MM-YYYY').format('MM/DD/YYYY'),
            'All_Day_Event': allDaysData,
            'Pinned_Event': pinnedData,
            'Active': activeData,
        }
        CommonAppUtilityService.CreateItem("/INT_Setting/SaveEventData", data).then(function (response) {
            if (response.data[0] == "OK") {
                //$("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');
                getEvent();
            }
            // $('#SuccessModelProject').modal('show');

        });
    }

    function callEventUpdate() {
        var allDaysData = $('#Event_AllDay').hasClass('on');
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Event_Name': $('#Event_Title').val(),
            'Description': $('.note-editable').html(),
            'Start_Date': moment($('#dateTimePickerStart').val(), 'DD-MM-YYYY').format('MM/DD/YYYY'),
            'End_Date': $('#Event_AllDay').hasClass('on') == true ? '' : moment($('#dateTimePickerEnd').val(), 'DD-MM-YYYY').format('MM/DD/YYYY'),
            'All_Day_Event': allDaysData,
            'Pinned_Event': pinnedData,
            'Active': activeData,
            'ID': parseInt($('#saveActionData').attr('data-updateId'))
        }
        CommonAppUtilityService.CreateItem("/INT_Setting/UpdateEventData", data).then(function (response) {
            if (response.data[0] == "OK") {
                //$("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');
                getEvent();
            }
            // $('#SuccessModelProject').modal('show');

        });
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

    function callArticleUpdate() {
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

                    if (arrayData[i].parent_Id != "") {
                        if ($("#" + arrayData[i].id).val() == "" || $("#" + arrayData[i].id).val() == null) {
                            $("#" + arrayData[i].parent_Id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                            $("#" + arrayData[i].parent_Id).addClass('errorBorderRichText');
                            $("#" + arrayData[i].parent_Id).focus();
                            returnResult = false;
                            return false;
                        }
                    } else {
                        if ($("#" + arrayData[i].id).val() == "" || $("#" + arrayData[i].id).val() == null) {
                            $("#" + arrayData[i].id).parent().append("<label class='error'>" + arrayData[i].message + "</label>");
                            $("#" + arrayData[i].id).addClass('errorBorderRichText');
                            $("#" + arrayData[i].id).focus();
                            returnResult = false;
                            return false;
                        }
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

    $scope.editPopUp = function (a, openFor) {
        if (openFor == "Gallery") {
            $("#global-loader").fadeIn("slow");
            var data = {
                Id : a.ID
            }
            CommonAppUtilityService.CreateItem("/INT_Setting/getGalleryDataByID", data).then(function (response) {
                if (response.status == 200) {
                    if (response.data.length > 0) {
                        var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
                        var htmlString = "";
                        for (var i = 0; i < response.data.length; i++) {
                            var urlFinal = urlD + response.data[i].Image_Url;
                                htmlString += '<div class="col-md-6 col-lg-6"><div class="card"><div class="card-body pd-8-f"><div class="row"><div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">' + response.data[i].Photo_Title + '</div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div class="d-flex flex-row justify-content-end"><i class="si si-trash text-danger mr-2" data-Id="' + response.data[i].ID + '" Id="deleteGalleryImage" data-toggle="tooltip" title="Delete" data-placement="top" data-original-title="Delete"></i></div></div></div></div><img alt="Image" class="img-fluid card-img-top" src="'+ urlFinal +'" /></div></div> '
                        }
                        a.htmlData = htmlString;
                        $("#global-loader").fadeOut("slow");
                        inilizeEditpopUp(a, openFor);
                    }
                    //$scope.GalleryData = response.data;
                }
                console.log(response);
            });
        } else {
        inilizeEditpopUp(a,openFor);
            console.log(a);
        }
    }

    $scope.formatDate = function (date, formatRec, formatGet) {
        return date == "" ? "":moment(date, formatRec).format(formatGet)

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