var settingApp = angular.module('settingApp', ['CommonAppUtility','widgetapp'])

settingApp.controller('settingController', function ($scope, $http, $compile, CommonAppUtilityService) {
    $scope.NoticeData = [];
    $scope.ArticleData = [];
    $scope.EventData = [];
    $scope.SliderData = [];
    $scope.AwardData = [];
    $scope.GalleryData = [];
    $scope.QuickLinkData = [];
    $scope.allEmpData = [];
    $scope.awardType = [];
    $scope.PageData = [];
    $scope.SettingData = [];
    $scope.SelectPinnedData = [];
    $scope.widgetCollection = [];
    $scope.PagesData = [];

    var noticeDoc = {};

    $scope.urlfix = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];


    $("#global-loader").fadeIn("slow");
    getArticle(true);
    console.log(getParameterByName('SPHostUrl'));

    /*var datam = [
        { ID: 1 },
        { ID: 2 },
        { ID: 3 },
        { ID: 4 },
        { ID: 5 },
    ]
    CommonAppUtilityService.CreateItem("/INT_Setting/getQuicklink", datam).then(function (response) {
        console.log(response);
    });*/


    function getQuickLink(loadFresh) {
        console.log(new Date());
        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getQuicklink", '').then(function (response) {
                console.log(new Date());
                if (response.status == 200) {
                    resolve(response.data);
                    if (loadFresh) {
                        $scope.QuickLinkData = response.data;
                        $('#QuickLinkDataTable').DataTable().clear();
                        $('#QuickLinkDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('QuickLinkDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }
                }

            });

        })

    }

    function getArticle(loadFresh) {
        console.log(new Date());
        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getArticleData", '').then(function (response) {
                console.log(new Date());
                if (response.status == 200) {
                    resolve(response.data);
                    if (loadFresh) {
                        $scope.ArticleData = response.data;
                        $('#ArticleDataTable').DataTable().clear();
                        $('#ArticleDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('ArticleDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }
                }

            });

        })

    }


    function getNotice(loadFresh) {
        //$("#global-loader").fadeIn("slow");
        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getNoticeData", '').then(function (response) {
                if (response.status == 200) {
                    resolve(response.data);
                    if (loadFresh) {
                        $scope.NoticeData = response.data;
                        $('#NoticeDataTable').DataTable().clear();
                        $('#NoticeDataTable').DataTable().destroy();
                        setTimeout(function () {
                            bindDataTable('NoticeDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }

                }
                console.log(response);
            });

        })

       
    }

    function getEvent(loadFresh) {
        // $("#global-loader").fadeIn("slow");

        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getEventData", '').then(function (response) {
                if (response.status == 200) {

                    resolve(response.data);
                    if (loadFresh) {
                        $scope.EventData = response.data;
                        $('#EventDataTable').DataTable().clear();
                        $('#EventDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('EventDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }

                }
                console.log(response);
            });

        })


    }

    function getSlider(loadFresh) {
        // $("#global-loader").fadeIn("slow");

        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getSiderData", '').then(function (response) {
                if (response.status == 200) {

                    resolve(response.data);
                    if (loadFresh) {
                        $scope.SliderData = response.data;
                        $('#SliderDataTable').DataTable().clear();
                        $('#SliderDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('SliderDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }

                }
                console.log(response);
            });

        })


    }

    function getGallery(loadFresh) {
        // $("#global-loader").fadeIn("slow");

        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getGalleryData", '').then(function (response) {
                if (response.status == 200) {
                    resolve(response.data);
                    if (loadFresh) {
                        $scope.GalleryData = response.data;
                        $('#GalleryDataTable').DataTable().clear();
                        $('#GalleryDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('GalleryDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }

                }
                console.log(response);
            });

        })


    }

    function getAward() {
        //$("#global-loader").fadeIn("slow");

        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getEmployee", '').then(function (response) {
                if (response.status == 200) {
                    $scope.allEmpData = response.data
                    getAwardType();
                    CommonAppUtilityService.CreateItem("/INT_Setting/getAwardsData", '').then(function (response) {
                        if (response.status == 200) {
                            $scope.AwardData = response.data;
                            resolve(response.data);
                            $('#AwardDataTable').DataTable().clear();
                            $('#AwardDataTable').DataTable().destroy();
                            console.log($scope.AwardData);
                            setTimeout(function () {
                                bindDataTable('AwardDataTable');
                                $("#global-loader").fadeOut("slow");
                            }, 500);

                        }
                        console.log(response);
                    });

                }
            });

        })



    }

    function getAwardType() {

        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getAwardsTypeData", '').then(function (response) {
                if (response.status == 200) {
                    $scope.awardType = response.data;
                    resolve(response.data);
                    /*console.log($scope.AwardData);
                    setTimeout(function () {
                        bindDataTable('AwardTypeDataTable');
                        $("#global-loader").fadeOut("slow");
                    }, 500);*/

                }
                console.log(response);
            });

        })
    }

    function getPagesData(loadFresh) {
        console.log(new Date());
        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getPagesData", '').then(function (response) {
                console.log(new Date());
                if (response.status == 200) {
                    resolve(response.data);
                    if (loadFresh) {
                        $scope.PagesData = response.data;
                        $('#PageDataTable').DataTable().clear();
                        $('#PageDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('PageDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }
                }

            });

        })
    }

    function getNavigationMenuData(loadFresh) {
        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getNavigationMenuData", '').then(function (response) {
                if (response.status == 200) {
                    resolve(response.data);
                    if (loadFresh) {
                        $scope.MenuData = response.data;
                        console.log($scope.MenuData)
                        $('#MenuDataTable').DataTable().clear();
                        $('#MenuDataTable').DataTable().destroy();
                        setTimeout(function () {
                            $scope.$apply();
                            bindDataTable('MenuDataTable');
                            $("#global-loader").fadeOut("slow");
                        }, 500);
                    }
                }

            });

        })
    }


    function getSettingBy(SettingFor) {
        var data;
        if (SettingFor == undefined || SettingFor == "") {
            data = {
                setting: "ALL"
            }
        } else {
            data = {
                setting: SettingFor
            }
        }
        return new Promise(function (resolve, reject) {
            CommonAppUtilityService.CreateItem("/INT_Setting/getSetting", data).then(function (response) {
                if (response.status == 200) {
                    $scope.SettingData = response.data;
                    resolve(response.data);
                    console.log(response.data);
                }
            });

        })

    }

    
    $(document).on('click', '#previewBtn', function () {
        if ($("#Page_Type").val() != "") {
            if ($("#Page_Type").val() == "Full Page Content") {
                $(".rightPageDiv").hide();
                $(".leftPageDiv").hide();
                $(".fullPageDiv").show();
                $("#TitlePageDivCol").empty().append($("#Page_Title").val());
                $("#fullPageDivCol").empty().append($('.note-editable').html());
            } else if ($("#Page_Type").val() == "Right Page Content") {
                $(".fullPageDiv").hide();
                $(".leftPageDiv").hide();
                $(".rightPageDiv").show();
                $("#TitlePageDivCol").empty().append($("#Page_Title").val());
                $("#rightPageDivCol").empty().append($('.note-editable').html());
                $("#rightpWidget").empty();
                $("#leftWidget").empty();
                $scope.testdemoRight($scope.widgetCollection);
            } else if ($("#Page_Type").val() == "Left Page Content") {
                $(".fullPageDiv").hide();
                $(".rightPageDiv").hide();
                $(".leftPageDiv").show();
                $("#TitlePageDivCol").empty().append($("#Page_Title").val());
                $("#lefttPageDivCol").empty().append($('.note-editable').html());
                $("#rightpWidget").empty();
                $("#leftWidget").empty();
                $scope.testdemoLeft($scope.widgetCollection);
            }
            //$scope.testdemoFull($("#Widget_Name").val(), $("#Pinned_Content").val());
            $("#exampleModalFull").modal('show');
        }
        
    });
    $(document).on('click', '#lightgallery', function () {

        $(this).lightGallery();

    });

    $(document).on('keyup', '.squencetxtWidget', function () {
        $scope.widgetCollection[parseInt($(this).attr("data-Id"))].Squence = parseInt($(this).val());
        console.log($scope.widgetCollection);

    });

    $(document).on('keyup', '#Page_Name', function () {
        $("#url_Created").empty().append($(this).val());
    });

    $(document).on('change', '#Page_Type', function () {
        if ($(this).val() == "" || $(this).val() == "Full Page Content") {
            $("#Widget_Div").hide();
            $("#Pinned_Content_Div").hide();
            $("#widgetAddRow").hide();
        } else {
            $("#Widget_Div").show();
            $("#widgetAddRow").show();
        }
    });

    $(document).on('click', '#RemoveWidget', function () {
        var id = $(this).attr("data-Id");
       
        $scope.widgetCollection = $scope.widgetCollection.filter(function (item) {
                return item.PinnedId != id
            
        })
        console.log($scope.widgetCollection);
        var tbody = createTableBodyW($scope.widgetCollection);

        $("#widgetTrBody").empty().append(tbody);
        $("#widgetTable").show();
    });

    $(document).on('click', '#widgetAddClick', function () {
        if ($("#Widget_Name").val() == "Quick Link") {
            var idArray = [];
            $("#Pinned_Content option:selected").each(function (index) {
                var $this = $(this);
                idArray.push({
                    ID: $this.val(),
                })
            });

            $scope.widgetCollection.push({
                "widgetName": $("#Widget_Name").val(),
                "PinnedId": "qw" + ($scope.widgetCollection.length + 1),
                "PiinedData": '',
                "Squence": ($scope.widgetCollection.length + 1),
                "idArray": idArray,
            })

        } else if ($("#Widget_Name").val() == "Event" || $("#Widget_Name").val() == "Awards" || $("#Widget_Name").val() == "Birthday" || $("#Widget_Name").val() == "Anniversary" || $("#Widget_Name").val() == "Holiday List") {
            $scope.widgetCollection.push({
                "widgetName": $("#Widget_Name").val(),
                "PinnedId": "e" + ($scope.widgetCollection.length + 1),
                "PiinedData": '',
                "Squence": ($scope.widgetCollection.length + 1),
                "idArray": [],
            })
        }else {

            $("#Pinned_Content option:selected").each(function (index) {
                var $this = $(this);

                $scope.widgetCollection.push({
                    "widgetName": $("#Widget_Name").val(),
                    "PinnedId": $this.val(),
                    "PiinedData": $this.text(),
                    "Squence": ($scope.widgetCollection.length + 1),
                    "idArray": [],
                })
            });
        }
        
        var tbody = createTableBodyW($scope.widgetCollection);

        $("#widgetTrBody").empty().append(tbody);
        $("#widgetTable").show();
        console.log($scope.widgetCollection);
        
    });

    function createTableBodyW(data) {
        var tbody = "";
        for (var i = 0; i < data.length; i++) {
            tbody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + data[i].widgetName + '</td><td><input type="text" data-Id="' + i + '" class="form-control squencetxtWidget" value="' + data[i].Squence+'"/></td><td>' + data[i].PiinedData + '</td><td><i class="si si-trash text-danger mr-2 pointerCursor" data-Id="' + data[i].PinnedId + '" Id="RemoveWidget" title="Delete"></i></td></tr>'
        }
        return tbody;
    }

    $(document).on('change', '#Widget_Name', function () {
        var d = $(this).val();
        if (d != undefined && d != null) {
            if (d == "Article") {
                $("#Pinned_Content_Div").hide();
                getArticle(false).then(function (response) {
                    var dData = createDropdownData(response, "ID", "Article_Title", "", true, false);
                    $('#Pinned_Content').empty().append(dData);
                    $("#Pinned_Content_Div").show();
                    $('.multiSelectDrop').multiselect('rebuild');
                })
            } else if (d == "Notice") {
                $("#Pinned_Content_Div").hide();
                getNotice(false).then(function (response) {
                    var dData = createDropdownData(response, "ID", "Notice_Title", "", true, false);
                    $('#Pinned_Content').empty().append(dData);
                    $("#Pinned_Content_Div").show();
                    $('.multiSelectDrop').multiselect('rebuild');
                })
            } else if (d == "Gallery") {
                $("#Pinned_Content_Div").hide();
                getGallery(false).then(function (response) {
                    var dData = createDropdownData(response, "ID", "Album_Title", "", true, false);
                    $('#Pinned_Content').empty().append(dData);
                    $("#Pinned_Content_Div").show();
                    $('.multiSelectDrop').multiselect('rebuild');
                })
            } else if (d == "Quick Link") {
                $("#Pinned_Content_Div").hide();
                getQuickLink(false).then(function (response) {
                    var dData = createDropdownData(response, "ID", "Quick_Link_Title", "", true, false);
                    $('#Pinned_Content').empty().append(dData);
                    $("#Pinned_Content_Div").show();
                    $('.multiSelectDrop').multiselect('rebuild');
                })
            } else {
                $("#Pinned_Content_Div").hide();
            }
        }
    });

   // getQuickLink(loadFresh)

    function getEmpData() {
        console.log("EmpData");
    }

    $scope.getTextFromHtml = function (data) {
        return $(data).text();
    }



    $(document).on('click', '.tabClick li', function () {

        $("#global-loader").fadeIn("slow");
        if ($(this).attr('data-title') == "Article") {
            getArticle(true);
        } else if ($(this).attr('data-title') == "Notice") {
            getNotice(true);
        } else if ($(this).attr('data-title') == "Event") {
            getEvent(true);
        } else if ($(this).attr('data-title') == "Slider") {
            getSlider(true);
        } else if ($(this).attr('data-title') == "Awards") {
            getAward(true);
        } else if ($(this).attr('data-title') == "Photo Gallery") {
            getGallery(true);
        } else if ($(this).attr('data-title') == "Pages") {
            getPagesData(true);
        } else if ($(this).attr('data-title') == "Menu") {
            getNavigationMenuData(true);
        } else {
            $("#global-loader").fadeOut("slow"); 
        }
    })

    $(document).on('click', '.add_Click', function () {
        var tab_Clicked = $(this).attr('data-Tab');
        if (tab_Clicked == "Award") {
            oprnPopupByClick(tab_Clicked, createDropdownData($scope.allEmpData, 'ID', 'FullName', 'EmpCode', false, true), createDropdownData($scope.awardType, 'Award_type', 'Award_type', '', false, true));
        } else if (tab_Clicked == "Pages") {
            $scope.widgetCollection = [];
            getSettingBy().then(function (response) {
                var dropData = createDropdownData(response, 'Setting_For', 'Setting_For', '', true, true);
                oprnPopupByClick(tab_Clicked, dropData);
            });
        } else if (tab_Clicked == "Menu") {
            $scope.widgetCollection = [];
            getPagesData(false).then(function (response) {
                var dropData = createDropdownData(response, 'Page_Name', 'Page_Name', '', true, true);
                var dropData1 = createDropdownData($scope.MenuData, 'ID', 'MenuName', '', true, true);
                oprnPopupByClick(tab_Clicked, dropData, dropData1);
            });
        } else {
            oprnPopupByClick(tab_Clicked);
        }
    });

    $(document).on('change', '.colorpicker', function () {
        if ($(this).attr("data-for") == "bg") {
            $("#cardStructure").attr('style', 'background-image:unset!important;background-color:' + $(this).val() + '!important');
            // $("#cardStructure").css('background-color', $(this).val()+'!important');
        } else {
            $("#cardStructureFont").attr('style', 'color:' + $(this).val() + '!important');

        }
    });

    $(document).on('click', '#show_card_Title', function () {
        if ($(this).hasClass('on')) {
            $(".card_Title_Div").show();
            $("#cardStructure").addClass("ribbon ribbon-clip ribbon-left");
            $("#card_ribbion").show();
        } else {
            $(".card_Title_Div").hide();
            $("#cardStructure").removeClass("ribbon ribbon-clip ribbon-left");
            $("#card_ribbion").hide();
        }
    })

    $(document).on('keyup', '#Card_Title', function () {
        // alert('test');
        $(".ribbion_Ti").empty().append($(this).val());
    });

    function createDropdownData(data, dataId, datatext, concateData, cond, defaultS) {
        var html = "";
        if (defaultS) {
            html = '<option label="Choose one"></option>';
        }
        for (var i = 0; i < data.length; i++) {
            var concateD = concateData == "" || null ? data[i][datatext] : data[i][concateData] + ' - ' + data[i][datatext];
            if (cond) {
                if (data[i].Active) {
                    html += '<option value="' + data[i][dataId] + '">' + concateD + '</option>';
                }
            } else {
                html += '<option value="' + data[i][dataId] + '">' + concateD + '</option>';
            }
        }
        return html;
    }

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
        } else if ($(this).attr('data-saveType') == "Award") {
            if ($(this).attr('data-operation') == "Save") {
                saveAwards('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveAwards('edit');
            }
        } else if ($(this).attr('data-saveType') == "Birthday_SettingPop") {
            saveBirthdaySetting('edit');
        }
        else if ($(this).attr('data-saveType') == "Anniversary_SettingPop") {
            saveAnniversarySetting('edit');
        } else if ($(this).attr('data-saveType') == "Card_SettingPop") {
            saveCardSetting('edit');
        } else if ($(this).attr('data-saveType') == "Award_SettingPop") {
            saveAwardetting('edit');
        } else if ($(this).attr('data-saveType') == "Pages") {
            if ($(this).attr('data-operation') == "Save") {
                savePages('save');
            } else if ($(this).attr('data-operation') == "edit") {
                savePages('edit');
            }
        } else if ($(this).attr('data-saveType') == "Menu") {
            if ($(this).attr('data-operation') == "Save") {
                saveMenu('save');
            } else if ($(this).attr('data-operation') == "edit") {
                saveMenu('edit');
            }
        }

    });

/**********************Menu Operation start***************************/
    $(document).on('click', '#IsInternalUrl', function () {
        if ($(this).hasClass('on')) {
            $("#Internal_Pages_Div").show();
            $("#Menu_Url_Div").hide();
        } else {
            $("#Internal_Pages_Div").hide();
            $("#Menu_Url_Div").show();
        }
    })

    $(document).on('click', '#IsChildMenu', function () {
        if ($(this).hasClass('on')) {
            $("#Parent_Menu_Div").show();
        } else {
            $("#Parent_Menu_Div").hide();
        }
    })

    function saveMenu(processType) {

        var articleValidateArray = [
            { 'id': 'Menu_Title', 'message': 'Please Enter Menu Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },


        ]
        if (validateSave(articleValidateArray)) {
            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");
            callMenu(processType);

        }

    }

    function callMenu(type) {
        var IsInternalUrl = $('#IsInternalUrl').hasClass('on');
        var IsChildMenu = $('#IsChildMenu').hasClass('on');
        var Next_Tab = $('#Next_Tab').hasClass('on');
        var activeData = $('#active_Check').hasClass('on');
        var finalUrl = "#";
        if (IsInternalUrl) {
            finalUrl = "/SitePages/ViewAllNotice.aspx?" + $("#Internal_Pages").val();
        } else {
            finalUrl = $("#Menu_URL").val()
        }
        var Pid = 0;
        if (IsChildMenu) {
            Pid = parseInt($("#ParentMenuSelect").val());
        }

        var data = {
            'MenuName': $("#Menu_Title").val(),
            'URL': finalUrl,
            'OrderNo': parseInt($("#Menu_Order").val()),
            'External_Url': !IsInternalUrl,
            'Next_Tab': Next_Tab,
            'ParentMenuIdId': Pid,
            'Active': activeData,
        }

        if (type == "edit") {
            data.ID = parseInt($('#saveActionData').attr('data-updateId'));
            console.log("PageData");
            console.log(data);
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveNavigationMenuData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getNavigationMenuData(true);
                }

            });
        } else {
            console.log("PageData");
            console.log(data);
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveNavigationMenuData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getNavigationMenuData(true);
                }

            });
        }
    }

/**********************Menu Operation end***************************/

    function savePages(processType) {

        var articleValidateArray = [
            { 'id': 'Page_Name', 'message': 'Please Enter Page Name', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
            { 'id': 'Page_Title', 'message': 'Please Enter Page Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
            { 'id': 'note-editable', 'message': 'Please Enter Page Content', 'type': 'richtextbox', 'selector_Type': 'class', 'parent_Id': 'note-editor' },

        ]
        if (validateSave(articleValidateArray)) {
            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");
            callPages(processType);

        }

    }

    function callPages(type) {
        var activeData = $('#active_Check').hasClass('on');
        var data = {
            'Page_Name': $("#Page_Name").val(),
            'Page_Title': $("#Page_Title").val(),
            'Page_Type': $("#Page_Type").val(),
            'Page_Content': $('.note-editable').html(),
            'Widget_Configuration': JSON.stringify($scope.widgetCollection) ,
            'Active': activeData,
        }

        if (type == "edit") {
            data.ID = parseInt($('#saveActionData').attr('data-updateId'));
            console.log("PageData");
            console.log(data);
            CommonAppUtilityService.CreateItem("/INT_Setting/UpdatePages", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getPagesData(true);
                }

            });
        } else {
            console.log("PageData");
            console.log(data);
            CommonAppUtilityService.CreateItem("/INT_Setting/SavePages", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getPagesData(true);
                }

            });
        }
    }


    function saveAwardetting() {

        $("#exampleModalRight").modal('hide');
        $("#global-loader").fadeIn("slow");

        var data = {
            'Background_Color': $("#colorpicker1").val(),
            'Font_Color': $("#colorpicker2").val(),
        }
        data.ID = parseInt($('#saveActionData').attr('data-updateId'));

        CommonAppUtilityService.CreateItem("/INT_Setting/updateAwardSet", data).then(function (response) {
            if (response.data[0] == "OK") {
                $("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');

            }

        });
    }

    function saveCardSetting() {
        $("#card_Tbody tr").each(function () {
            //console.log(this);
            if ($(this).find("input").val() == null || $(this).find("input").val() == "" || $(this).find("input").val() == "0") {
                $(this).find("input").parent().append("<label class='error'>Enter card sequence</label>");
                return false;
            }
        });

        var objectData = [];
        $("#card_Tbody tr").each(function () {
            //console.log(this);
            objectData.push({
                ID: $(this).attr("data-id"),
                Squence: parseInt($(this).find("input").val()),
                Active: $(this).find(".main-toggle").hasClass("on"),
            })
        });

        console.log(objectData);


        $("#exampleModalRight").modal('hide');
        $("#global-loader").fadeIn("slow");

        CommonAppUtilityService.CreateItem("/INT_Setting/updateCardSet", objectData).then(function (response) {
            if (response.data[0] == "OK") {
                $("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');

            }

        });
    }

    function saveBirthdaySetting() {
        if ($("#Start_Before").val() == null || $("#Start_Before").val() == "" || $("#Start_Before").val() == "0") {
            $("#Start_Before").parent().append("<label class='error'>Enter Before Date (In Days)</label>");
            return false;
        } else if ($("#Start_After").val() == null || $("#Start_After").val() == "" || $("#Start_After").val() == "0") {
            $("#Start_After").parent().append("<label class='error'>Enter After Date (In Days)</label>");
            return false;
        } else if ($('#show_card_Title').hasClass('on')) {
            if ($("#Card_Title").val() == null || $("#Card_Title").val() == "" || $("#Card_Title").val() == "0") {
                $("#Card_Title").parent().append("<label class='error'>Enter Card Title</label>");
                return false;
            }
        }
        $("#exampleModalRight").modal('hide');
        $("#global-loader").fadeIn("slow");

        var data = {
            'Before_Event': parseInt($("#Start_Before").val()),
            'After_Event': parseInt($("#Start_After").val()),
            'Show_Card_Title': $('#show_card_Title').hasClass('on'),
            'Card_Title': $("#Card_Title").val(),
            'Background_Color': $("#colorpicker1").val(),
            'Font_Color': $("#colorpicker2").val(),
        }
        data.ID = parseInt($('#saveActionData').attr('data-updateId'));

        CommonAppUtilityService.CreateItem("/INT_Setting/updateBirthdaySet", data).then(function (response) {
            if (response.data[0] == "OK") {
                $("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');
               
            }

        });
    }

    function saveAnniversarySetting() {
        if ($("#Start_Before").val() == null || $("#Start_Before").val() == "" || $("#Start_Before").val() == "0") {
            $("#Start_Before").parent().append("<label class='error'>Enter Before Date (In Days)</label>");
            return false;
        } else if ($("#Start_After").val() == null || $("#Start_After").val() == "" || $("#Start_After").val() == "0") {
            $("#Start_After").parent().append("<label class='error'>Enter After Date (In Days)</label>");
            return false;
        } else if ($('#show_card_Title').hasClass('on')) {
            if ($("#Card_Title").val() == null || $("#Card_Title").val() == "" || $("#Card_Title").val() == "0") {
                $("#Card_Title").parent().append("<label class='error'>Enter Card Title</label>");
                return false;
            }
        }
        $("#exampleModalRight").modal('hide');
        $("#global-loader").fadeIn("slow");
        var data = {
            'Before_Event': parseInt($("#Start_Before").val()),
            'After_Event': parseInt($("#Start_After").val()),
            'Show_Card_Title': $('#show_card_Title').hasClass('on'),
            'Card_Title': $("#Card_Title").val(),
            'Background_Color': $("#colorpicker1").val(),
            'Font_Color': $("#colorpicker2").val(),
        }
        data.ID = parseInt($('#saveActionData').attr('data-updateId'));

        CommonAppUtilityService.CreateItem("/INT_Setting/updateAnniversarySet", data).then(function (response) {
            if (response.data[0] == "OK") {
                $("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');

            }

        });
    }




    function saveAwards(processType) {

        if ($("#Award_Type").val() == "" || $("#Award_Type").val() == null) {
            $("#Award_Type").parent().append("<label class='error'>Please select award type</label>");
            //$("#end_End_Div").addClass('errorBorderRichText');
            // $("#end_End_Div").focus();
            return false;
        } else if ($("#AllEmployee").val() == "" || $("#AllEmployee").val() == null) {
            $("#AllEmployee").parent().append("<label class='error'>Please select employee</label>");
            //$("#end_End_Div").addClass('errorBorderRichText');
            // $("#end_End_Div").focus();
            return false;
        }

        var articleValidateArray = [
            { 'id': 'Reason_For_Award', 'message': 'Please Enter Reason', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },

        ]
        if (validateSave(articleValidateArray)) {
            $("#exampleModalRight").modal('hide');
            $("#global-loader").fadeIn("slow");
            callAwards(processType);

        }

    }

    function callAwards(type) {
        var activeData = $('#active_Check').hasClass('on');
        var pinnedData = $('#pinned_Check').hasClass('on');
        var data = {
            'Award_type': $("#Award_Type").val(),
            'Emp_Code': ($("#AllEmployee option:selected").text()).split(' - ')[0],
            'Emp_IdId': $("#AllEmployee").val(),
            'Reason': $("#Reason_For_Award").val(),
            'Pinned_Awards': pinnedData,
            'Active': activeData,
        }

        if (type == "edit") {
            data.ID = parseInt($('#saveActionData').attr('data-updateId'));

            CommonAppUtilityService.CreateItem("/INT_Setting/UpdateAwards", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getAward();
                }

            });
        } else {
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveAwards", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getAward();
                }

            });
        }
    }

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
                    getGallery(true);
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
                    getGallery(true);
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
        $("#attachedFile").empty().append("<li>" + noticeDoc.name + "</li>")
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
                    getSlider(true);
                }

            });
        } else {
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveSliderData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    $('#SuccessModelProject').modal('show');
                    getSlider(true);
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


    function callNoticeSave(docUrl, docType, type) {
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
                    getNotice(true);
                }
                // $('#SuccessModelProject').modal('show');

            });
        } else {
            CommonAppUtilityService.CreateItem("/INT_Setting/SaveNoticeData", data).then(function (response) {
                if (response.data[0] == "OK") {
                    //$("#global-loader").fadeOut("slow");
                    $('#SuccessModelProject').modal('show');
                    getNotice(true);
                }
                // $('#SuccessModelProject').modal('show');

            });
        }
    }

    function saveArticle(processType) {
        var articleValidateArray = [
            { 'id': 'Article_Title', 'message': 'Please Enter Article Title', 'type': 'textbox', 'selector_Type': 'id', 'parent_Id': '' },
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
            'Start_Date': moment($('#dateTimePickerStart').val(), 'DD-MM-YYYY').format('MM/DD/YYYY'),
            'End_Date': $('#Event_AllDay').hasClass('on') == true ? '' : moment($('#dateTimePickerEnd').val(), 'DD-MM-YYYY').format('MM/DD/YYYY'),
            'All_Day_Event': allDaysData,
            'Pinned_Event': pinnedData,
            'Active': activeData,
        }
        CommonAppUtilityService.CreateItem("/INT_Setting/SaveEventData", data).then(function (response) {
            if (response.data[0] == "OK") {
                //$("#global-loader").fadeOut("slow");
                $('#SuccessModelProject').modal('show');
                getEvent(true);
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
                getEvent(true);
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
                getArticle(true);
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
                getArticle(true);
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
                Id: a.ID
            }
            CommonAppUtilityService.CreateItem("/INT_Setting/getGalleryDataByID", data).then(function (response) {
                if (response.status == 200) {
                    if (response.data.length > 0) {
                        var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
                        var htmlString = "";
                        for (var i = 0; i < response.data.length; i++) {
                            var urlFinal = urlD + response.data[i].Image_Url;
                            htmlString += '<div class="col-md-6 col-lg-6"><div class="card"><div class="card-body pd-8-f"><div class="row"><div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">' + response.data[i].Photo_Title + '</div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div class="d-flex flex-row justify-content-end"><i class="si si-trash text-danger mr-2" data-Id="' + response.data[i].ID + '" Id="deleteGalleryImage" data-toggle="tooltip" title="Delete" data-placement="top" data-original-title="Delete"></i></div></div></div></div><img alt="Image" class="img-fluid card-img-top" src="' + urlFinal + '" /></div></div> '
                        }
                        a.htmlData = htmlString;
                        $("#global-loader").fadeOut("slow");
                        inilizeEditpopUp(a, openFor);
                    }
                    //$scope.GalleryData = response.data;
                }
                console.log(response);
            });
        } else if (openFor == "Award") {
            a.awardHtml = createDropdownData($scope.awardType, 'Award_type', 'Award_type', '', false, true);
            a.empData = createDropdownData($scope.allEmpData, 'ID', 'FullName', 'EmpCode', false, true);
            inilizeEditpopUp(a, openFor);
        } else if (openFor == "Card_SettingPop") {
            getSettingBy().then(function (response) {
                var a = {};
                a.tbody = createTableBody(response);
                inilizeEditpopUp(a, openFor);
            });

        } else if (openFor == "Birthday_SettingPop") {
            getSettingBy('Birthday').then(function (response) {
                var a = response[0];
                inilizeEditpopUp(a, openFor);
            });

        } else if (openFor == "Anniversary_SettingPop") {
            getSettingBy('Anniversary').then(function (response) {
                var a = response[0];
                inilizeEditpopUp(a, openFor);
            });

        } else if (openFor == "Award_SettingPop") {
            getSettingBy('Awards').then(function (response) {
                var a = response[0];
                inilizeEditpopUp(a, openFor);
            });

        } else if (openFor == "Event_SettingPop") {
            getSettingBy('Event').then(function (response) {
                var a = response[0];
                inilizeEditpopUp(a, openFor);
            });

        } else if (openFor == "Pages") {
            $("#global-loader").fadeIn("slow");
            getSettingBy().then(function (response) {
                $("#global-loader").fadeOut("slow");
                a.SettDropData = createDropdownData(response, 'Setting_For', 'Setting_For', '', true, true);
                $scope.widgetCollection = [];
                var widgetData = JSON.parse(a.Widget_Configuration);
                if (widgetData.length > 0) {
                    $scope.widgetCollection = $scope.widgetCollection.concat(widgetData);
                    a.widgetBody = createTableBodyW(widgetData);
                }
                inilizeEditpopUp(a, openFor);
            });
        } else {
            inilizeEditpopUp(a, openFor);
            console.log(a);
        }
    }

    $scope.formatDate = function (date, formatRec, formatGet) {
        return date == "" ? "" : moment(date, formatRec).format(formatGet)

    }

    function createTableBody(data) {
        var returnHtml = "";

        for (var i = 0; i < data.length; i++) {
            var activeDiv = "";
            if (data[i].Active) {
                activeDiv = "on";
            }
            returnHtml += '<tr data-Id="' + data[i].ID + '"><th scope="row">' + (i + 1) + '</th><td>' + data[i].Setting_For + '</td><td><input type="text" class="form-control" value="' + data[i].Squence + '" id="card_Sequnece' + i + '" /></td><td><div class="main-toggle mg-l-20 ' + activeDiv + '" id="show_card_Title' + i + '"><span></span></div></td></tr>';
        }
        return returnHtml;
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