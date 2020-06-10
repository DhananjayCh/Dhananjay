var popupData = [
    {'popup_For':'Article','modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Article_Title">Article Title</label><input type="text" class="form-control" id="Article_Title" placeholder="Enter Article Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Artical_Pinned">Artical Pinned</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Article_Description">Article Description</label><div id="summernote">Hello Summernote</div></div></div></div>'},
    {'popup_For':'Notice','modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Notice_Title">Notice Title</label><input type="text" class="form-control" id="Notice_Title" placeholder="Enter Notice Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Notice_Pinned">Notice Pinned</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Last_Name">Notice Description</label><div id="summernote">Hello Summernote</div></div></div></div>'},
    {'popup_For':'Event','modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Event_Title">Event Title</label><input type="text" class="form-control" id="Event_Title" placeholder="Enter Event Title"></div></div><div class="col-lg-12"><div class="form-group"><label for="Event_Start_Date">Event Start Date</label><div class="input-group"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerStart" type="text" value=""></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Event_End_Date">Event End Date</label><div class="input-group"><div class="input-group-prepend"><div class="input-group-text"><i class="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i></div></div><input class="form-control" id="dateTimePickerEnd" type="text" value=""></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Event_Pinned">Event Pinned</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Last_Name">Event Description</label><div id="summernote">Hello Summernote</div></div></div></div>'},
    {'popup_For':'Slider','modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Slider_Title">Slider Title</label><input type="text" class="form-control" id="Slider_Title" placeholder="Enter Slider Title"></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Image">Slider Image</label><div class="custom-file"><input class="custom-file-input" id="customFile" type="file"> <label class="custom-file-label" for="customFile">Choose file</label></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Short_Description">Slider Short Description</label><input type="text" class="form-control" id="Slider_Short_Description" placeholder="Enter Slider Short Description"></div></div><div class="col-lg-12"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Slider_Description">Slider Description</label><div id="summernote">Hello Summernote</div></div></div></div>'},
    {'popup_For':'Award','modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Award_Type">Award Type</label><select class="form-control select2" id="Award_Type"><option label="Choose one"></option<option value="Employee of the Month">Employee of the Month</option><option value="Employee of the Quarter">Employee of the Quarter</option><option value="Employee of the Year">Employee of the Year</option><option value="Sales person of the year">Sales person of the year</option><option value="Add New">Add New</option></select></div></div><div class="col-lg-12"><div class="form-group"><label for="Award_Type">Employee</label><select class="form-control select2" id="Employee"><option label="Choose one"></option><option value="Employee 1">Employee 1</option><option value="Employee 2">Employee 2</option><option value="Employee 3">Employee 3</option><option value="Employee 4">Employee 4</option></select></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Award_Pinned">Award Pinned</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Reason_For_Award">Reason For Award</label><textarea class="form-control" id="Reason_For_Award"></textarea></div></div></div>'},
    {'popup_For':'Gallery','modelBody':'<div class="row row-sm"><div class="col-lg-12"><div class="form-group"><label for="Gallery_Title">Gallery Title</label><input type="text" class="form-control" id="Gallery_Title" placeholder="Enter Gallery Title"></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Gallery_Pinned">Gallery Pinned</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-6"><div class="form-group"><div class="main-toggle-group-demo yes-toggle"><label for="Active">Active</label><div class="main-toggle mg-l-20"><span></span></div></div></div></div><div class="col-lg-12"><div class="form-group"><label for="Reason_For_Award">Drop Images</label><input id="demo" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png, html, zip, css,js" multiple><div class="d-flex flex-row-reverse pd-t-20"><button class="btn btn-dark" style="display:none" id="btnuploadAllButton" onclick="uploadAllButton()">Upload all files</button></div></div></div></div>'},
]



var fileDataBuffer = [];

$(document).on('click','.add_Click',function(){
    var tab_Clicked = $(this).attr('data-Tab');
    var popupClick = popupData.filter(function(e){
            return e.popup_For == tab_Clicked;
    })

    if(popupClick.length > 0){
        if(tab_Clicked == "Event"){
           // bindDatePickerStart();
            //bindDatePickerEnd();
        }
        $("#exampleModalRight .modal-body").empty().append(popupClick[0].modelBody);
        inilizeRichTxetEditorInput();
        iniliazeSelect2();
        bindFancyUpload();
        $("#exampleModalRight").modal('show');
    }else{
        $("#exampleModalRight").modal('show');
    }
})

function getTestFromHtml(html) {
    debugger;
    return $(html).text();
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

function inilizeRichTxetEditorInput(){
    $('#summernote').summernote({
        placeholder: 'Hello Bootstrap 4',
        tabsize: 2,
        height: 100,
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
            ConvertFileToBuffer(data.files[0],fileDataBuffer);
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

