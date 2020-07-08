var popupData = [
    { 'popup_For': 'Article', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Article_Title">Article Title</label><input type="text" class="form-control" id="Article_Title" placeholder="Enter Article Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Article_Pinned">Article Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Article_Description">Article Description</label><div id="summernote"></div></div></div></div>' },
    { 'popup_For': 'Notice', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Notice_Title">Notice Title</label><input type="text" class="form-control" id="Notice_Title" placeholder="Enter Notice Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Notice_Pinned">Notice Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Attached_Document">Add Document</label><div class="main-toggle mg-l-20" id="attachDoc"><span></span></div></div></div></div><div class="col-lg-12 noticeDocDiv" style="display:none"><div class="form-group"><label for="Document">Document</label><div class="custom-file"><input class="custom-file-input" id="customFile" type="file"> <label class="custom-file-label" for="customFile">Choose file</label></div></div></div><div class="col-lg-12 noticeDocDiv" style="display:none"><ul Id="attachedFile"></ul></div><div class="col-lg-12"><div class="form-group"><label for="Last_Name">Notice Description</label><div id="summernote"></div></div></div></div>' },
    { 'popup_For': 'Event', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Event_Title">Event Title</label><input type="text" class="form-control" id="Event_Title" placeholder="Enter Event Title"></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Event_AllDay">All Days Event</label><div class="main-toggle mg-l-20" id="Event_AllDay"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Event_Start_Date">Event Start Date</label><div class="input-group" id="start_Date_Div"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerStart" type="text" value=""></div></div></div><div class="col-lg-12 endDateDiv"><div class="form-group"><label for="Event_End_Date">Event End Date</label><div class="input-group" id="end_End_Div"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerEnd" type="text" value=""></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Event_Pinned">Event Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Last_Name">Event Description</label><div id="summernote"></div></div></div></div>' },
    { 'popup_For': 'Slider', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Slider_Subject">Slider Subject</label><input type="text" class="form-control" id="Slider_Subject" placeholder="Enter Slider Subject"></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Title">Slider Title</label><input type="text" class="form-control" id="Slider_Title" placeholder="Enter Slider Title"></div></div><div class="col-sm-12"><input type="file" class="dropify" id="silderFiles" data-height="200" data-allowed-file-extensions="png jpg jpeg" /></div><div class="col-lg-12 pd-t-20"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Description">Slider Description</label><div id="summernote"></div></div></div></div>' },
    { 'popup_For': 'Award', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Award_Type">Award Type</label><select class="form-control select2" id="Award_Type"><option label="Choose one"></option><option value="Employee of the Month">Employee of the Month</option><option value="Employee of the Quarter">Employee of the Quarter</option><option value="Employee of the Year">Employee of the Year</option><option value="Sales person of the year">Sales person of the year</option><option value="Add New">Add New</option></select></div></div><div class="col-lg-12"><div class="form-group"><label for="Emp_For">Employee</label><select class="form-control select2" id="AllEmployee"><option label="Choose one"></option><option value="Employee 1">Employee 1</option><option value="Employee 2">Employee 2</option><option value="Employee 3">Employee 3</option><option value="Employee 4">Employee 4</option></select></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Award_Pinned">Award Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Reason_For_Award">Reason For Award</label><textarea class="form-control" id="Reason_For_Award"></textarea></div></div></div>' },
    { 'popup_For': 'Gallery', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Gallery_Title">Gallery Title</label><input type="text" class="form-control" id="Gallery_Title" placeholder="Enter Gallery Title" /></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Reason_For_Award">Artical Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Reason_For_Award">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12 tabs-style-1"><div class=" tab-menu-heading"><div class="tabs-menu1"><ul class="nav panel-tabs main-nav-line"><li><a href="#tab1" class="nav-link active" data-toggle="tab">Drop Images</a></li><li id="Previously_Added" style="display:none"><a href="#tab2" class="nav-link" data-toggle="tab">Previously Added</a></li></ul></div></div><div class="panel-body tabs-menu-body main-content-body-right border"><div class="tab-content"><div class="tab-pane active" id="tab1"><div class="form-group"><input id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple /><div class="d-flex flex-row-reverse pd-t-20"><button class="btn btn-dark" style="display:none" id="btnuploadAllButton" onclick="uploadAllButton()">Upload all files</button></div></div></div><div class="tab-pane" id="tab2"><div class="row" id="previousGalleryImage"></div></div></div></div></div></div>' },
    { 'popup_For': 'Birthday_SettingPop', 'modelBody': '<div class="row row-sm"><div class="col-lg-12 bottom-border"><label for="Birthday_Setting"><h3>Birthday Setting</h3><span class="text-muted card-sub-title">(Please click on save after your chnages, So changes get reflected)</span></label></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label for="Start_Before">Show Before Date</label><input type="text" class="form-control" id="Start_Before" placeholder="Enter days"></div></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label for="Start_After">Show After Date</label><input type="text" class="form-control" id="Start_After" placeholder="Enter days"></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Reason_For_Award">Show Card Title</label><div class="main-toggle mg-l-20" id="show_card_Title"><span></span></div></div></div></div><div class="col-lg-12 card_Title_Div" style="display:none"><div class="form-group"><label for="Card_Title">Card Title</label><input type="text" class="form-control" id="Card_Title" placeholder="Enter Card Title"></div></div><div class="col-lg-6"><div class="form-group"><label class="mg-r-10" for="bg_color">Background color</label><input class="colorpicker" data-for="bg" id="colorpicker1" type="text"></div></div><div class="col-lg-6"><div class="form-group"><label class="mg-r-10" for="font_color">Font color</label><input class="colorpicker" data-for="font" id="colorpicker2" type="text"></div></div><div class="col-lg-12"><div class="form-group"><label for="Preview">Card Preview</label></div></div><div class="col-lg-12"><div class="card bg-primary-gradient" id="cardStructure"><div class="ribbon-target" style="top: 4px;display:none" id="card_ribbion"><span class="ribbon-inner bg-warning"></span><span class="ribbion_Ti">Enter Card Title</span></div><div class="card-body"><div id="myCarousel" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active flex-column"><div class="row pd-t-10"><div class="col-lg-4 mg-x-auto"><div class="widget-user-image"><div class="avatar avatar-Profile-User d-sm-flex bg-danger rounded-circle">VS</div></div></div><div class="col-lg-8 text-white" id="cardStructureFont"><h4 class="font-light">Vijay Shere</h4><p class="mt-2 description-text-fixed-3line">"Happy birthday! I hope all your birthday wishes and dreams come true."</p><div class="m-t-20"><i>- From Team IT</i></div></div></div></div></div></div></div></div></div></div>' },
    { 'popup_For': 'Anniversary_SettingPop', 'modelBody': '<div class="row row-sm"><div class="col-lg-12 bottom-border"><label for="Anniversary_Setting"><h3>Anniversary Setting</h3><span class="text-muted card-sub-title">(Please click on save after your chnages, So changes get reflected)</span></label></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label for="Start_Before">Show Before Date</label><input type="text" class="form-control" id="Start_Before" placeholder="Enter days"></div></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label for="Start_After">Show After Date</label><input type="text" class="form-control" id="Start_After" placeholder="Enter days"></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Reason_For_Award">Show Card Title</label><div class="main-toggle mg-l-20" id="show_card_Title"><span></span></div></div></div></div><div class="col-lg-12 card_Title_Div" style="display:none"><div class="form-group"><label for="Card_Title">Card Title</label><input type="text" class="form-control" id="Card_Title" placeholder="Enter Card Title"></div></div><div class="col-lg-6"><div class="form-group"><label class="mg-r-10" for="bg_color">Background color</label><input class="colorpicker" data-for="bg" id="colorpicker1" type="text"></div></div><div class="col-lg-6"><div class="form-group"><label class="mg-r-10" for="font_color">Font color</label><input class="colorpicker" data-for="font" id="colorpicker2" type="text"></div></div><div class="col-lg-12"><div class="form-group"><label for="Preview">Card Preview</label></div></div><div class="col-lg-12"><div class="card bg-danger-gradient" id="cardStructure"><div class="ribbon-target" style="top: 4px;display:none" id="card_ribbion"><span class="ribbon-inner bg-warning"></span><span class="ribbion_Ti">Enter Card Title</span></div><div class="card-body"><div id="myCarousel" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active flex-column"><div class="row pd-t-10"><div class="col-lg-4 mg-x-auto"><div class="widget-user-image"><div class="avatar avatar-Profile-User d-sm-flex bg-danger rounded-circle">VS</div></div></div><div class="col-lg-8 text-white" id="cardStructureFont"><h4 class="font-light">Vijay Shere</h4><p class="mt-2 description-text-fixed-3line">"Congratulations for completing x years in our organization, Keep performing."</p><div class="m-t-20"><i>- From Team IT</i></div></div></div></div></div></div></div></div></div></div>' },
    { 'popup_For': 'Card_SettingPop', 'modelBody': '<div class="row row-sm"><div class="col-lg-12 bottom-border"><label for="Birthday_Setting"><h3>Cards Setting</h3><span class="text-muted card-sub-title">(Please click on save after your chnages, So changes get reflected)</span></label></div><div class="col-lg-12 pd-t-15"><div class="table-responsive"><table class="table mg-b-0 text-md-nowrap"><thead><tr><th>#</th><th>Card Name</th><th>Sequnce</th><th>Active</th></tr></thead><tbody Id="card_Tbody"></tbody></table></div></div></div>' },
    { 'popup_For': 'Award_SettingPop', 'modelBody': '<div class="row row-sm"><div class="col-lg-12 bottom-border"><label for="Award_Setting"><h3>Award Setting</h3><span class="text-muted card-sub-title">(Please click on save after your chnages, So changes get reflected)</span></label></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label class="mg-r-10" for="bg_color">Background color</label><input class="colorpicker" data-for="bg" id="colorpicker1" type="text"></div></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label class="mg-r-10" for="font_color">Font color</label><input class="colorpicker" data-for="font" id="colorpicker2" type="text"></div></div><div class="col-lg-12"><div class="form-group"><label for="Preview">Card Preview</label></div></div><div class="col-lg-12"><div class="card bg-purple-gradient" id="cardStructure"><div class="card-body"><div id="myCarousel" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active flex-column"><div class="row"><div class="col-lg-12"><div class="separator"><h4 class="text-white font-light font_award"><i class="fas fa-trophy trophy_Color"></i> Employee of the month <i class="fas fa-trophy trophy_Color"></i></h4></div></div><div class="col-lg-4 mg-x-auto"><div class="widget-user-image"><div class="avatar avatar-Profile-User d-sm-flex bg-danger rounded-circle">VS</div></div></div><div class="col-lg-8 text-white" id="cardStructureFont"><h4 class="font-light">Vijay Shere</h4><p class="mt-2 description-text-fixed-3line">Due to your incredible performance in Development area, Company like to award you.</p></div></div></div></div></div></div></div></div></div>' },
    { 'popup_For': 'Event_SettingPop', 'modelBody': '<div class="row row-sm"><div class="col-lg-12 bottom-border"><label for="Event_Setting"><h3>Event Setting</h3><span class="text-muted card-sub-title">(Please click on save after your chnages, So changes get reflected)</span></label></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label for="Start_Before">Show Before Date</label><input type="text" class="form-control" id="Start_Before" placeholder="Enter days"></div></div><div class="col-lg-6 pd-t-15"><div class="form-group"><label for="Start_After">Show After Date</label><input type="text" class="form-control" id="Start_After" placeholder="Enter days"></div></div></div>' },
    { 'popup_For': 'Pages', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Page_Name">Page Name</label><input type="text" class="form-control" id="Page_Name" placeholder="Page Name"><label for="Page_NameUrl" class="text-muted card-sub-title">(Page Url(eg.) :- www.demosite.com/pages.aspx?<span id="url_Created"></span>)</label></div></div><div class="col-lg-6"><div class="form-group"><label for="Page_Title">Page Title</label><input type="text" class="form-control" id="Page_Title" placeholder="Page_Title"></div></div><div class="col-lg-6 margin_T_B_A"><div class="form-group mg-b-0"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Page_Content">Page Content</label><div id="summernote"></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Page_Type">Page Type</label><select class="form-control select3" id="Page_Type"><option label="Choose one"></option><option value="Full Page Content">Full Page Content</option><option value="Right Page Content">Right Page Content</option><option value="Left Page Content">Left Page Content</option></select></div></div><div class="col-lg-5" id="Widget_Div" style="display:none"><div class="form-group"><label for="Widget Name">Widget Name</label><select class="form-control select3" id="Widget_Name"></select></div></div><div class="col-lg-6" id="Pinned_Content_Div" style="display:none"><div class="form-group"><label for="Page_Type">Select To Pinned</label><select class="form-control multiSelectDrop" id="Pinned_Content" multiple="multiple"></select></div></div><div class="col-lg-1 margin_T_B_A" id="widgetAddRow" style="display:none"><i class="fas fa-plus text-primary mr-2 pointerCursor" id="widgetAddClick" data-toggle="tooltip" title="Add" data-placement="top" data-original-title="Add"></i></div><div class="col-lg-12" id="widgetTable" style="display:none"><div class="table-responsive"><table class="table mg-b-0 text-md-nowrap"><thead><tr><th>#</th><th>Widget Name</th><th>Sequence</th><th>Pinned Item</th><th>Action</th></tr></thead><tbody id="widgetTrBody"></tbody></table></div></div><div class="col-lg-12"><button type="button" class="btn btn-primary" id="previewBtn">Preview</button></div></div>' },
    { 'popup_For': 'Menu', 'modelBody': '<div class="row row-sm"> <div class="col-lg-12"><div class="form-group"><label for="Menu_Title">Menu Title</label><input type="text" class="form-control" id="Menu_Title" placeholder="Enter Menu Title" /></div></div> <div class="col-lg-6 margin_T_B_A"><div class="form-group mg-b-0"><div class="main-toggle-group-demo yes-toggle"><label for="IsInternalUrl">Is This Internal Url</label><div class="main-toggle mg-l-20" id="IsInternalUrl"><span></span></div></div></div></div> <div class="col-lg-6" id="Internal_Pages_Div" style="display:none"><div class="form-group"><label for="Internal_Pages">Internal Pages</label><select class="form-control select2" id="Internal_Pages"><option label="Choose one"></option><option value="Employee 1">Page 1</option></select></div></div> <div class="col-lg-12" id="Menu_Url_Div"><div class="form-group"><label for="Menu_URL">URL</label><input type="text" class="form-control" id="Menu_URL" placeholder="Enter Url" /></div></div> <div class="col-lg-6 margin_T_B_A"><div class="form-group mg-b-0"><div class="main-toggle-group-demo yes-toggle"><label for="Article_Pinned">Is This Child Menu</label><div class="main-toggle mg-l-20" id="IsChildMenu"><span></span></div></div></div></div> <div class="col-lg-6" id="Parent_Menu_Div" style="display:none"><div class="form-group"><label for="Parent_Menu">Parent Menu</label><select class="form-control select2" id="ParentMenuSelect"><option label="Choose one"></option><option value="Employee 1">Employee 1</option></select></div></div> <div class="col-lg-12"><div class="form-group"><label for="Menu_Order">Order</label><input type="text" class="form-control" id="Menu_Order" placeholder="Enter Menu_Order" /></div></div> <div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Next_Tab">Open in Next Tab</label><div class="main-toggle mg-l-20" id="Next_Tab"><span></span></div></div></div></div> <div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div></div>' },
    { 'popup_For': 'Awards_Types', 'modelBody': '<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Menu_Title">Award Type</label><input type="text" class="form-control" id="Award_Type" placeholder="Enter Award Type" /></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div></div>  ' },
]

 

var fileDataBuffer = [];

function oprnPopupByClick(tab_Clicked, dpData, dpData1) {
    var popupClick = popupData.filter(function (e) {
        return e.popup_For == tab_Clicked;
    })

    if (popupClick.length > 0) {
        fileDataBuffer = [];
        $('#saveActionData').attr('data-saveType', tab_Clicked);
        $('#saveActionData').attr('data-operation', 'Save');
        $("#exampleModalRight .modal-body").empty().prepend(popupClick[0].modelBody);
        if (tab_Clicked == "Award") {
            $("#AllEmployee").empty().append(dpData);
            $("#Award_Type").empty().append(dpData1);
        } else if (tab_Clicked == "Pages") {
            $("#Widget_Name").empty().append(dpData);
        } else if (tab_Clicked == "Menu") {
            $("#Internal_Pages").empty().append(dpData);
            $("#ParentMenuSelect").empty().append(dpData1);
        }
        inilizeRichTxetEditorInput();
        bindFancyUpload();
        inilizeColorPicker();
        inilizeFileUploader();
        iniliazeSelect2();
        iniliazeSelect3();
        iniliazeMultiSelectDrop();
        $("#exampleModalRight").modal('show');
    } else {
        $("#exampleModalRight").modal('show');
    }
}

function inilizeEditpopUp(data, tab_Clicked) {
    var popupClick = popupData.filter(function (e) {
        return e.popup_For == tab_Clicked;
    })
    fileDataBuffer = [];
    $('#saveActionData').attr('data-saveType', tab_Clicked);
    $('#saveActionData').attr('data-operation', 'edit');
    $('#saveActionData').attr('data-updateId', data.ID);
    $("#exampleModalRight .modal-body").empty().append(popupClick[0].modelBody);
    $("#Previously_Added").show();
    inilizeColorPicker();
    bindEdit(data, tab_Clicked);
    inilizeRichTxetEditorInput();
    iniliazeSelect2();
    bindFancyUpload();
    inilizeFileUploader();
    iniliazeSelect3();
    iniliazeMultiSelectDrop();
    $('.note-editable').find('img').each(function (index, d) {
        var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
        $(this).attr('src', urlD + $(this).attr('src'));
    })
    $("#exampleModalRight").modal('show');


}

function bindEdit(data, bindFor) {

    if (bindFor == "Article") {
        $("#Article_Title").val(data.Article_Title);
        $("#summernote").html(data.Description);
        if (data.Pinned_Article) {
            $('#pinned_Check').addClass('on')
        }
        if (data.Active) {
            $('#active_Check').addClass('on')
        }
    } else if (bindFor == "Event") {
        $("#Event_Title").val(data.Event_Name);
        $("#dateTimePickerStart").val(formatDate(data.Start_Date, 'MM/DD/YYYY h:mm:ss a', 'DD-MM-YYYY'));
        if (data.All_Day_Event) {
            $('#Event_AllDay').addClass('on')
        }
        if (data.All_Day_Event) {
            $(".endDateDiv").hide();
        } else {
            $("#dateTimePickerEnd").val(formatDate(data.End_Date, 'MM/DD/YYYY h:mm:ss a', 'DD-MM-YYYY'));
        }
        if (data.Pinned_Event) {
            $('#pinned_Check').addClass('on')
        }
        if (data.Active) {
            $('#active_Check').addClass('on')
        }

        $("#summernote").html(data.Description);
    } else if (bindFor == "Notice") {
        $("#Notice_Title").val(data.Notice_Title);
        $("#dateTimePickerStart").val(formatDate(data.Start_Date, 'MM/DD/YYYY h:mm:ss a', 'DD-MM-YYYY'));
        if (data.DocUrl != "" && data.DocUrl != null) {
            $('#attachDoc').addClass('on');
            $(".noticeDocDiv").show();
            var fileNameArray = (data.DocUrl).split("/");
            var fileName = fileNameArray[fileNameArray.length - 1];
            $("#attachedFile").empty().append("<li>" + fileName + "</li>");
        }
        if (data.Pinned_Notice) {
            $('#pinned_Check').addClass('on')
        }
        if (data.Active) {
            $('#active_Check').addClass('on')
        }

        $("#summernote").html(data.Description);
    } else if (bindFor == "Slider") {

        $("#Slider_Title").val(data.Slider_Title);
        $("#Slider_Subject").val(data.Slider_Subject);
        var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
        $("#silderFiles").attr('data-default-file', urlD + data.Slider_Image_Url)
        if (data.Active) {
            $('#active_Check').addClass('on')
        }

        $("#summernote").html(data.Description);
    } else if (bindFor == "Gallery") {

        $("#Gallery_Title").val(data.Album_Title);
        $("#previousGalleryImage").empty().append(data.htmlData);
        if (data.Pinned_Album) {
            $('#pinned_Check').addClass('on')
        }
        if (data.Active) {
            $('#active_Check').addClass('on')
        }

        $("#summernote").html(data.Description);
    } else if (bindFor == "Award") {

        $("#AllEmployee").empty().append(data.empData);
        $("#Award_Type").empty().append(data.awardHtml);

        $("#AllEmployee").val(data.Emp_Id.ID);
        $("#Award_Type").val(data.Award_type);

        if (data.Pinned_Awards) {
            $('#pinned_Check').addClass('on')
        }
        if (data.Active) {
            $('#active_Check').addClass('on')
        }

        $("#Reason_For_Award").empty().append(data.Reason);
    } else if (bindFor == "Card_SettingPop") {
        $("#card_Tbody").empty().append(data.tbody)
    } else if (bindFor == "Birthday_SettingPop") {
        $("#Start_Before").val(data.Before_Event);
        $("#Start_After").val(data.After_Event);
        if (data.Show_Card_Title) {
            $('#show_card_Title').addClass('on');
            $(".card_Title_Div").show();
            $("#Card_Title").val(data.Card_Title);
            $("#cardStructure").addClass("ribbon ribbon-clip ribbon-left");
            $(".ribbion_Ti").empty().append(data.Card_Title);
            $("#card_ribbion").show();
        }
        if (data.Background_Color != null && data.Background_Color != "") {
            $("#colorpicker1").spectrum("set", data.Background_Color);
        } else {
            $("#colorpicker1").spectrum("set", "#ffa800");
        }

        if (data.Font_Color != null && data.Font_Color != "") {
            $("#colorpicker2").spectrum("set", data.Font_Color);
        } else {
            $("#colorpicker2").spectrum("set", "#fff");
        }
    } else if (bindFor == "Anniversary_SettingPop") {
        $("#Start_Before").val(data.Before_Event);
        $("#Start_After").val(data.After_Event);
        if (data.Show_Card_Title) {
            $('#show_card_Title').addClass('on');
            $(".card_Title_Div").show();
            $("#Card_Title").val(data.Card_Title);
            $("#cardStructure").addClass("ribbon ribbon-clip ribbon-left");
            $(".ribbion_Ti").empty().append(data.Card_Title);
            $("#card_ribbion").show();
        }
        if (data.Background_Color != null && data.Background_Color != "") {
            $("#colorpicker1").spectrum("set", data.Background_Color);
        } else {
            $("#colorpicker1").spectrum("set", "#089287");
        }
        if (data.Font_Color != null && data.Font_Color != "") {
            $("#colorpicker2").spectrum("set", data.Font_Color);
        } else {
            $("#colorpicker2").spectrum("set", "#fff");
        }

    } else if (bindFor == "Award_SettingPop") {
        if (data.Background_Color != null && data.Background_Color != "") {
            $("#colorpicker1").spectrum("set", data.Background_Color);
        } else {
            $("#colorpicker1").spectrum("set", "#884af1");
        }
        if (data.Font_Color != null && data.Font_Color != "") {
            $("#colorpicker2").spectrum("set", data.Font_Color);
        } else {
            $("#colorpicker2").spectrum("set", "#fff");
        }
    } else if (bindFor == "Event_SettingPop") {
        $("#Start_Before").val(data.Before_Event);
        $("#Start_After").val(data.After_Event);
    } else if (bindFor == "Pages") {

        $("#Page_Name").val(data.Page_Name);
        $("#Page_Name").attr('data-previous', data.Page_Name);
        $("#url_Created").empty().append(data.Page_Name);
        $("#Page_Title").val(data.Page_Title);
        $("#Page_Type").val(data.Page_Type);
        $("#Widget_Name").empty().append(data.SettDropData);
        if (data.Page_Type != "Full Page Content") {
            $("#widgetTrBody").empty().append(data.widgetBody);
            $("#widgetTable").show();
            $("#Widget_Div").show();
            $("#widgetAddRow").show();
        }
        if (data.Active) {
            $('#active_Check').addClass('on')
        }

        $("#summernote").html(data.Page_Content);
    } else if (bindFor == "Menu") {

        $("#Menu_Title").val(data.MenuName);
        $("#Menu_Order").val(data.OrderNo);
        $("#Internal_Pages").empty().append(data.pagesData);
        $("#ParentMenuSelect").empty().append(data.parentMenuData);
        if (!data.External_Url) {
            $('#IsInternalUrl').addClass('on');
            var InternalPages = data.URL.split('?')[1];
            $("#Internal_Pages").val(InternalPages);
            $("#Internal_Pages_Div").show();
            $("#Menu_Url_Div").hide();
        } else {
            $("#Menu_URL").val(data.URL);
        }
        if (data.ParentMenuIdId != null && data.ParentMenuIdId != "0") {
            $('#IsChildMenu').addClass('on');
            $("#ParentMenuSelect").val(data.ParentMenuIdId);
            $("#Parent_Menu_Div").show();
        }
        if (data.Next_Tab) {
            $('#Next_Tab').addClass('on');
        }
        if (data.Active) {
            $('#active_Check').addClass('on');
        }

        $("#summernote").html(data.Page_Content);
    } else if (bindFor == "Awards_Types") {
        $("#Award_Type").val(data.Award_type);
        if (data.Active) {
            $('#active_Check').addClass('on');
        }
    }
}


$(function () {
    console.log("test")
    $('#ArticleDataTable tbody tr').each(function () {
        //var ageRow = $(this).find('tr').eq(0);
        var textData = $(this).find('.articleDesc').text();
        $(this).find('.articleDesc').text($(textData).text());
    });
    // inilizeRichTxetEditorInput();
})

function formatDate(date, formatRec, formatGet) {
    return date == "" ? "" : moment(date, formatRec).format(formatGet)

}

function inilizeColorPicker() {
    $('.colorpicker').spectrum({
        color: '#17A2B8',
        preferredFormat: "hex",
    });
}

function inilizeRichTxetEditorInput() {
    $('#summernote').summernote({
        placeholder: 'Enter Your Content here',
        tabsize: 2,
        height: 100,
        callbacks: {
            onImageUpload: function (files) {
                console.log(files);
                $("#global-loaderPopup").fadeIn("slow");
                var $files = $(files);
                var fileLength = $files.length;
                var $this = $(this);
                $files.each(function (index) {
                    var file = this;
                    saveFile(file, '/INT_Setting/SaveImages').then(function (data) {
                        console.log('ImageSave');
                        console.log(data);
                        if (index == fileLength - 1) {
                            $("#global-loaderPopup").fadeOut("slow");
                        }
                        var urlfix = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/');
                        $this.summernote('insertImage', urlfix[0] + data, function ($image) {
                        });
                    })

                });
            }
        }
    });
}

function iniliazeSelect2() {
    $('.select2').select2({
        placeholder: 'Choose one',
        searchInputPlaceholder: 'Search',
        width: '100%'
    });
}

function iniliazeSelect3() {
    $('.select3').select2({
        placeholder: 'Choose one',
        searchInputPlaceholder: 'Search',
        width: '100%'
    });
}

function iniliazeMultiSelectDrop() {
    $('.multiSelectDrop').multiselect({
        includeSelectAllOption: false,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        filterPlaceholder: 'Search...'
    });
}

function ConvertFileToBuffer(fileName, arrayName) {
    var getFile = getFileBuffer(fileName);
    getFile.done(function (arrayBuffer) {
        var docsFile = {};
        docsFile.filename = fileName.name;
        docsFile.Uploadname = fileName.uploadName;
        docsFile.arrayBuffer = arrayBuffer;
        arrayName.push(docsFile);
        console.log(arrayName);
    });
}

function getFileBuffer(uploadFile) {
    var deferred = jQuery.Deferred();
    var reader = new FileReader();
    reader.onloadend = function (e) {
        deferred.resolve(e.target.result);
    }
    reader.onerror = function (e) {
        deferred.reject(e.target.error);
    }
    reader.readAsArrayBuffer(uploadFile);
    return deferred.promise();
}

function deleteFilesFromArray(arrayName, fileToDelete) {
    var FileIndex = arrayName.findIndex(function (e) {
        return e.filename == fileToDelete;
    });

    arrayName.splice(FileIndex, 1)
    console.log(arrayName);
}

function uploadAllButton() {
    $('#demo').next().find('.ff_fileupload_actions button.ff_fileupload_start_upload').click();
    return false;
}

function getSelectedUploadFile() {
    return fileDataBuffer;
}

function bindFancyUpload() {
    //fancyfileuplod
    $('#demo').FancyFileUpload({
        params: {
            action: 'fileuploader'
        },
        'added': function (e, data) {
            $("#btnuploadAllButton").show();
        },
        'remove': function (e, data) {
            deleteFilesFromArray(fileDataBuffer, data.files[0].name);
            if (fileDataBuffer.length <= 0) {
                $("#btnuploadAllButton").hide();
            }
        },
        startupload: function (UploadDone, e, data) {
            console.log("fileinput");
            console.log(UploadDone);
            console.log(e);
            console.log(data);
            //ConvertFileToBuffer(data.files[0], fileDataBuffer);
            var docsFile = {};
            docsFile.filename = data.files[0].name;
            docsFile.Uploadname = data.files[0].uploadName;
            docsFile.fileData = data.files[0];
            fileDataBuffer.push(docsFile);
            UploadDone(e, data);

        },
        maxfilesize: 1000000
    });
}

$(document).on('click', '.main-toggle', function () {
    $(this).toggleClass('on');
});


(function ($) {

})(jQuery);

