var popupData = [
    { 'popup_For': 'Article', 'modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Article_Title">Article Title</label><input type="text" class="form-control" id="Article_Title" placeholder="Enter Article Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Article_Pinned">Article Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Article_Description">Article Description</label><div id="summernote"></div></div></div></div>'},
    { 'popup_For': 'Notice', 'modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Notice_Title">Notice Title</label><input type="text" class="form-control" id="Notice_Title" placeholder="Enter Notice Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Notice_Pinned">Notice Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Attached_Document">Add Document</label><div class="main-toggle mg-l-20" id="attachDoc"><span></span></div></div></div></div><div class="col-lg-12 noticeDocDiv" style="display:none"><div class="form-group"><label for="Document">Document</label><div class="custom-file"><input class="custom-file-input" id="customFile" type="file"> <label class="custom-file-label" for="customFile">Choose file</label></div></div></div><div class="col-lg-12 noticeDocDiv" style="display:none"><ul Id="attachedFile"></ul></div><div class="col-lg-12"><div class="form-group"><label for="Last_Name">Notice Description</label><div id="summernote"></div></div></div></div>'},
    { 'popup_For': 'Event', 'modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Event_Title">Event Title</label><input type="text" class="form-control" id="Event_Title" placeholder="Enter Event Title"></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Event_AllDay">All Days Event</label><div class="main-toggle mg-l-20" id="Event_AllDay"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Event_Start_Date">Event Start Date</label><div class="input-group" id="start_Date_Div"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerStart" type="text" value=""></div></div></div><div class="col-lg-12 endDateDiv"><div class="form-group"><label for="Event_End_Date">Event End Date</label><div class="input-group" id="end_End_Div"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerEnd" type="text" value=""></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Event_Pinned">Event Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Last_Name">Event Description</label><div id="summernote"></div></div></div></div>'},
    { 'popup_For': 'Slider', 'modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Slider_Subject">Slider Subject</label><input type="text" class="form-control" id="Slider_Subject" placeholder="Enter Slider Subject"></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Title">Slider Title</label><input type="text" class="form-control" id="Slider_Title" placeholder="Enter Slider Title"></div></div><div class="col-sm-12"><input type="file" class="dropify" id="silderFiles" data-height="200" data-allowed-file-extensions="png jpg jpeg" /></div><div class="col-lg-12 pd-t-20"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Description">Slider Description</label><div id="summernote"></div></div></div></div>'},
    { 'popup_For': 'Award', 'modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Event_Start_Date">Event Start Date</label><div class="input-group" id="start_Date_Div"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerStart" type="text" value=""></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Award_Type">Award Type</label><select class="form-control select2" id="Award_Type"><option label="Choose one"></option<option value="Employee of the Month">Employee of the Month</option><option value="Employee of the Quarter">Employee of the Quarter</option><option value="Employee of the Year">Employee of the Year</option><option value="Sales person of the year">Sales person of the year</option><option value="Add New">Add New</option></select></div></div><div class="col-lg-12"><div class="form-group"><label for="Award_Type">Employee</label><select class="form-control select2" id="Employee"><option label="Choose one"></option><option value="Employee 1">Employee 1</option><option value="Employee 2">Employee 2</option><option value="Employee 3">Employee 3</option><option value="Employee 4">Employee 4</option></select></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Award_Pinned">Award Pinned</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Reason_For_Award">Reason For Award</label><textarea class="form-control" id="Reason_For_Award"></textarea></div></div></div>'},
    { 'popup_For': 'Gallery', 'modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Gallery_Title">Gallery Title</label><input type="text" class="form-control" id="Gallery_Title" placeholder="Enter Gallery Title" /></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Reason_For_Award">Artical Pinned</label><div class="main-toggle mg-l-20" id="pinned_Check"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Reason_For_Award">Active</label><div class="main-toggle mg-l-20" id="active_Check"><span></span></div></div></div></div><div class="col-lg-12 tabs-style-1"><div class=" tab-menu-heading"><div class="tabs-menu1"><ul class="nav panel-tabs main-nav-line"><li><a href="#tab1" class="nav-link active" data-toggle="tab">Drop Images</a></li><li id="Previously_Added" style="display:none"><a href="#tab2" class="nav-link" data-toggle="tab">Previously Added</a></li></ul></div></div><div class="panel-body tabs-menu-body main-content-body-right border"><div class="tab-content"><div class="tab-pane active" id="tab1"><div class="form-group"><input id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple /><div class="d-flex flex-row-reverse pd-t-20"><button class="btn btn-dark" style="display:none" id="btnuploadAllButton" onclick="uploadAllButton()">Upload all files</button></div></div></div><div class="tab-pane" id="tab2"><div class="row" id="previousGalleryImage"></div></div></div></div></div></div>'},
]


var fileDataBuffer = [];

$(document).on('click','.add_Click',function(){
    var tab_Clicked = $(this).attr('data-Tab');
    var popupClick = popupData.filter(function(e){
            return e.popup_For == tab_Clicked;
    })

    if (popupClick.length > 0) {
        fileDataBuffer = [];
        $('#saveActionData').attr('data-saveType', tab_Clicked);
        $('#saveActionData').attr('data-operation', 'Save');
        $("#exampleModalRight .modal-body").empty().append(popupClick[0].modelBody);
        inilizeRichTxetEditorInput();
        iniliazeSelect2();
        bindFancyUpload();
        inilizeFileUploader();
        $("#exampleModalRight").modal('show');
    }else{
        $("#exampleModalRight").modal('show');
    }
})

function inilizeEditpopUp(data,tab_Clicked) {
    var popupClick = popupData.filter(function (e) {
        return e.popup_For == tab_Clicked;
    })
    fileDataBuffer = [];
    $('#saveActionData').attr('data-saveType', tab_Clicked);
    $('#saveActionData').attr('data-operation', 'edit');
    $('#saveActionData').attr('data-updateId', data.ID);
    $("#exampleModalRight .modal-body").empty().append(popupClick[0].modelBody);
    $("#Previously_Added").show();
    bindEdit(data, tab_Clicked);
    inilizeRichTxetEditorInput();
    iniliazeSelect2();
    bindFancyUpload();
    inilizeFileUploader();
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
        $("#dateTimePickerStart").val(formatDate(data.Start_Date, 'MM/DD/YYYY h:mm:ss a','DD-MM-YYYY'));
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
    }
}


$(function() {
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

function inilizeRichTxetEditorInput(){
    $('#summernote').summernote({
        placeholder: 'Enter Your Content here',
        tabsize: 2,
        height: 100,
        callbacks: {
            onImageUpload: function (files) {
                console.log(files);
                var $files = $(files);
                var $this = $(this);
                $files.each(function () {
                    var file = this;
                    saveFile(file, '/INT_Setting/SaveImages').then(function (data) {
                        console.log('ImageSave');
                        console.log(data);
                        var urlfix = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/');
                        $this.summernote('insertImage', urlfix[0] + data, function ($image) {
                        });
                    })
                    
                });
            }
        }
      });
}

function iniliazeSelect2(){
    $('.select2').select2({
		placeholder: 'Choose one',
		searchInputPlaceholder: 'Search',
		 width: '100%'
	});
}

function ConvertFileToBuffer(fileName,arrayName)
{
    var getFile =  getFileBuffer(fileName);
    getFile.done(function (arrayBuffer) {  
      var docsFile={};
       docsFile.filename =fileName.name; 
       docsFile.Uploadname =fileName.uploadName;
       docsFile.arrayBuffer=arrayBuffer;
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

function deleteFilesFromArray(arrayName,fileToDelete){
    var FileIndex = arrayName.findIndex(function(e){
            return e.filename == fileToDelete;
    });

    arrayName.splice(FileIndex,1)
    console.log(arrayName);
}

function uploadAllButton(){
    $('#demo').next().find('.ff_fileupload_actions button.ff_fileupload_start_upload').click(); 
    return false;
}

function getSelectedUploadFile() {
    return fileDataBuffer;
}

function bindFancyUpload(){
    //fancyfileuplod
	$('#demo').FancyFileUpload({
        params : {
             action : 'fileuploader'
            },
        'added' :function(e, data) {
                $("#btnuploadAllButton").show();
            }, 
        'remove' :function(e, data) {
            deleteFilesFromArray(fileDataBuffer,data.files[0].name);
            if(fileDataBuffer.length <= 0){
                $("#btnuploadAllButton").hide();
            }
        },
        startupload : function(UploadDone, e, data) {
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
            maxfilesize : 1000000
        });
}

$(document).on('click','.main-toggle',function(){
    $(this).toggleClass('on');
});


(function($) {

})(jQuery);

