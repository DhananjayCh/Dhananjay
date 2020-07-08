var wapp = angular.module("widgetapp", ['CommonAppUtility']);

wapp.service('widgetService', function (CommonAppUtilityService) {

	this.getArticle = function (Id) {

		return this.callArticle(Id);
	}

	this.getArticleHtml = function (d) {

		var elementD = "<div class='card card-primary'>" +
			"<div class='d-flex justify-content-between card-header'>" +
			"<h4 class='card-title'>ARTICLE</h4>" +
			"<i class='far fa-2x fa-newspaper green'></i>" +
			"</div>" +
			"<div class='card-body text-center pt-0 fixedCardHeight pointerCursor'>" +
			"<h5 class='card-title1'>" + d.Article_Title +"</h5>" +
			"<span class='cradDescription'>"+d.desc+"</span>" +
			"</div>" +
			"<div class='d-flex flex-row justify-content-end card-footer'>" +
			"<a class='anchorVisted' href='#'>View All</a>" +
			"</div>" +
			"</div>";

		return elementD;
	}

	this.callArticle = function (Id) {
		var data = {
			Id: Id
		}
		return CommonAppUtilityService.CreateItem("/INT_Setting/getArticleData", data);
	}

	this.getNotice = function (Id) {

		return this.callNotice(Id);
	}

	this.getNoticeHtml = function (d) {

		var elementD = "<div class='card card-primary'>" +
			"<div class='d-flex justify-content-between card-header'>" +
			"<h4 class='card-title'>NOTICE</h4>" +
			"<i class='far fa-2x fa-newspaper orange'></i>" +
			"</div>" +
			"<div class='card-body text-center pt-0 fixedCardHeight pointerCursor'>" +
			"<h5 class='card-title1 cardNoticeTitle pd-t-5 pd-b-5'>" + d.Notice_Title + "</h5>" +
			"<span class='cardNoticeDescription'>" + d.desc + "</span>";
		if (d.noticeAttachmentYes) {
			elementD += "<div class='btn-icon-list notice-Attachement justify-content-between'>" +
				"<h6 class='text-success'>This notice contains attachment </h6>" +
				"<div class='mg-l-10'>" +
				"<a class='btn btn-success btn-icon btn-min-width' target='_blank' href='" + d.NoticeDocUrl+"'><i class='fas fa-download'></i></a>" +
				"</div>" +
				"</div>"
		} else {
			elementD += "<div class='btn-icon-list notice-Attachement justify-content-between'>" +
				"<h6 class='text-danger'>This notice doesn't contains any attachment </h6>" +
				"</div>";
		}
		
		elementD +=	"</div >" +
			"<div class='d-flex flex-row justify-content-end card-footer'>" +
			"<a class='anchorVisted' href='#'>View All</a>" +
			"</div>" +
			"</div >";

		return elementD;
	}


	this.callNotice = function (Id) {
		var data = {
			Id: Id
		}
		return CommonAppUtilityService.CreateItem("/INT_Setting/getNoticeData", data);
	}

	this.getGallery = function (Id) {
		return this.callGallery(Id);
	}

	this.getGalleryHtml = function (d,url,Title) {

		var elementD = angular.element("<div class='card custom-card  card-primary'>" +
			"<div class='d-flex justify-content-between card-header-gallery border-bottom-0 pb-0'>" +
			"<h3 class='card-title'>" + Title+"</h3>" +
			"<a href='#'><i class='far fa-2x fa-newspaper icons'></i></a>" +
			"</div>" +
			"<div class='card-body ht-100p p-0'>" +
			"<div>" +
			"<div class='carousel slide carousel-fade' style='border-radius: 7px;' data-ride='carousel' id='carouselExample5'>" +
			"<ol class='carousel-indicators'>" + this.createindicator(d,'carouselExample5')+"</ol>" +
			"<div class='carousel-inner bg-dark' id='lightgallery' style='border-radius: 7px;'>" + this.createGalleryLoop(d, url) +"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>");

		return elementD;
	}

	this.createindicator = function (data, dataTarget) {
		var returnData = "";
		for (var i = 0; i < data.length; i++) {
			returnData += "<li class='" + this.BindSliderClass(i, 'LI') + "' data-slide-to=" + i + "  data-target='#" + dataTarget+"'></li>";
		}
		return returnData; 
	}

	this.createGalleryLoop = function (data,url) {
		var returnData = "";
		for (var i = 0; i < data.length; i++) {
			returnData += "<div class='" + this.BindSliderClass(i, 'DIV') + "' data-responsive=" + url + data[i].Image_Url + " data-src=" + url + data[i].Image_Url + " data-sub-html='" + this.BindGalleryTitle(data[i].Photo_Title)+"'>" +
				"<a>" +
				"<img alt='img' class='d-block w-100' src=" + url + data[i].Image_Url +" style='min-height:  356px' />" +
				"</a>" +
				"</div>";
		}
		return returnData;
	}

	this.BindSliderClass = function (index, type) {

		if (type == "DIV") {
			if (index == 0) {
				return "carousel-item active"
			} else {
				return "carousel-item"
			}
		} else {
			if (index == 0) {
				return "active"
			} else {
				return ""
			}
		}
	}
	this.BindGalleryTitle = function (title) {
		if (title)
			return "<h4>" + title + "</h4>";
		else
			return "";
	}


	this.callGallery = function (Id) {
		var data = {
			Id: Id
		}
		return CommonAppUtilityService.CreateItem("/INT_Setting/getGalleryDataByID", data);
	}

	this.getQuickLink = function (Id) {

		return this.callQuickLink(Id);
	}

	this.getQuickLinkHtml = function (d) {

		var elementD = "<div class='card card-primary pd-b-20'>"+
			"<div class='d-flex justify-content-between card-header'>" +
			"<h4 class='card-title'>Quick Link</h4>" +
			"<i class='far fa-2x fa-newspaper icons'></i>" +
			"</div>" +
			"<div class='card-body pt-0 fixedTabCardHeight'>" + this.createQuickLinkLoop(d) +"</div>" +
			"</div >";

		return elementD;
	}

	this.getInital = function (name) {
		return name.replace(/[^A-Za-z0-9À-ÿ ]/ig, '')   // taking care of accented characters as well
			.replace(/ +/ig, ' ')                     // replace multiple spaces to one
			.split(/ /)                               // break the name into parts
			.reduce((acc, item) => acc + item[0], '') // assemble an abbreviation from the parts
			.concat(name.substr(1))                   // what if the name consist only one part
			.concat(name)                             // what if the name is only one character
			.substr(0, 2)                             // get the first two characters an initials
			.toUpperCase(); 

	}

	this.createQuickLinkLoop = function (data) {
		var returnData = "";
		for (var i = 0; i < data.length; i++) {
			returnData += "<div class='list d-flex align-items-center border-bottom py-3'>" +
				"<div class='avatar bg-info rounded-circle'>" + this.getInital(data[i].Quick_Link_Title) +"</div>" +
				"<div class='wrapper w-100 ml-3'>" +
				"<p class='mb-0'>" +
				"<b><a href='#'>" + data[i].Quick_Link_Title+" </a></b></p>" +
				"<div class='d-sm-flex justify-content-between align-items-center'>" +
				"<div class='d-flex align-items-center'>" +
				"<i class='fas fa-user evnet-icon mr-1'></i>" +
				"<p class='mb-0 event-slider'>" + data[i].Author+"</p>" +
				"</div>" +
				"<small class='text-muted ml-auto'>" + this.formatDate(data[i].CreatedDate, 'MM/DD/YYYY h:mm:ss a', 'DD MMM YYYY') +"</small>" +
				"</div>" +
				"</div>" +
				"</div>";
		}
		return returnData;
	}

	this.formatDate = function (date, formatRec, formatGet) {
		return date == "" ? "" : moment(date, formatRec).format(formatGet)

	}

	this.callQuickLink = function (Data) {

		return CommonAppUtilityService.CreateItem("/INT_Setting/getQuicklink", Data);
	}

	this.getEvent = function (Id) {

		return this.callEvent(Id);
	}

	this.getEventHtml = function (d) {

		var elementD = "<div class='card card-primary'>"+
		"<div class='card-body pd-b-7'>" +
		"<div class='d-flex justify-content-between'>" +
		"<h4 class='card-title'>Events</h4>" +
		"<i class='far fa-2x fa-newspaper green'></i>" +
		"</div>" +
		"<div class='ticker_PlugIn'>" +
		"<ul class='ticker_PlugIn_Ul'>" + this.createEventLoop(d)+"</ul>" +
		"</div>" +
		"</div>" +
		"<div class='d-flex flex-row justify-content-end card-footer'>" +
		"<a class='anchorVisted' href='#'>View All</a>" +
		"</div>"+
		"</div>";

		return elementD;
	}

	this.createEventLoop = function (data) {
		var returnData = "";
		for (var i = 0; i < data.length; i++) {
			returnData += "<li>" +
				"<div class='list d-flex align-items-center border-bottom py-3'>" +
				"<div class='wrapper w-100 ml-3 pointerCursor'>" +
				"<p class='mb-0'>" +
				"<b>" + data[i].Event_Name +"</b></p>" +
				"<div class='d-sm-flex justify-content-between align-items-center'>" +
				"<div class='d-flex align-items-center'>" +
				"<i class='fas fa-calendar-alt evnet-icon mr-1'></i>" +
				"<p class='mb-0 event-slider'>" + this.bindDate(data[i].Start_Date, data[i].End_Date, data[i].All_Day_Event)+"</p>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</li>";
		}
		return returnData;
	}

	this.bindDate = function (start, end, AllDayEvent) {

		if (AllDayEvent) {
			return moment(start).format("DD MMM, YYYY");
		}
		else if (moment(start).format("DD/MM/YYYY") == moment(end).format("DD/MM/YYYY")) {
			return moment(start).format("DD MMM, YYYY");
		}
		else if (moment(start).format("MM/YYYY") == moment(end).format("MM/YYYY")) {
			return moment(start).format("DD") + " - " + moment(end).format("DD MMM, YYYY")
		} else {
			return moment(start).format("DD MMM, YYYY") + " - " + moment(end).format("DD MMM, YYYY")
		}
	}


	this.callEvent = function (Id) {
		var data = {
			callType: "Widget"
		}
		return CommonAppUtilityService.CreateItem("/INT_Setting/getEventData", data);
	}

	this.getAwards = function (Id) {

		return this.callAwards(Id);
	}

	this.getAwardsHtml = function (d) {

		var elementD = "<div class='card bg-purple-gradient' id='cardStructure'>" +
			"<div class='card-body event-cards-fixedHeight'>" +
			"<div id='myCarousel' class='carousel slide event-cards-internal-fixedHeight' data-ride='carousel'>";
			if (d.length > 1) {
				elementD += "<ol class='carousel-indicators' > " + this.createindicator(d, 'myCarousel') + "</ol >";
			}
			elementD += "<div class='carousel-inner'>" + this.createAwardsLoop(d) + "</div>" +
			"</div>" +
			"</div>" +
			"</div>";

		return elementD;
	}

	this.createAwardsLoop = function (data) {
		var returnData = "";
		for (var i = 0; i < data.length; i++) {
			returnData += "<div class='" + this.BindBirthdayClass(i)+"'>" +
				"<div class='row'>" +
				"<div class='col-lg-12'>" +
				"<div class='separator'>" +
				"<h4 class='text-white font-light font_award'>" +
				"<i class='fas fa-trophy trophy_Color'></i>" + data[i].Award_type+" <i class='fas fa-trophy trophy_Color'></i>" +
				"</h4>" +
				"</div>" +
				"</div>" +
				"<div class='col-lg-4 mg-x-auto'>" +
				"<div class='widget-user-image'>" +
				"<div class='avatar avatar-Profile-User d-sm-flex bg-danger rounded-circle'>" + this.getInital(data[i].Emp_Id.FirstName + " " + data[i].Emp_Id.LastName)+"</div>" +
				"</div>" +
				"</div>" +
				"<div class='col-lg-8 text-white' id='cardStructureFont'>" +
				"<h4 class='font-light'>" + data[i].Emp_Id.FirstName + " " + data[i].Emp_Id.LastName+"</h4>" +
				"<p class='mt-2 description-text-fixed-3line'>" + data[i].Reason + "</p>" +
				"</div>" +
				"</div>" +
				"</div>";
		}
		return returnData;
	}

	this.BindBirthdayClass = function (index) {

		if (index == 0) {
			return "carousel-item flex-column active"
		} else {
			return "carousel-item flex-column"
		}
	}


	this.callAwards = function (Id) {
		var data = {
			callType: "Widget"
		}
		return CommonAppUtilityService.CreateItem("/INT_Setting/getAwardsData", data);
	}


	this.getBirthdayHtml = function (d) {

		var elementD = "<div class='card bg-primary-gradient ribbon ribbon-clip ribbon-left'>" +
			"<div class='ribbon-target' style='top: 4px;' id='card_ribbion'>" +
			"<span class='ribbon-inner bg-warning'></span>" +
			"<span class='ribbion_Ti'>Birthday Card</span>" +
			"</div>" +
			"<div class='card-body pd-b-0'>" +
			"<div id='myCarousel2' class='carousel slide' data-ride='carousel'>" +
			"<div class='carousel-inner pd-b-20'> " +
			"<div class='" + this.BindBirthdayClass(0) + "'>" +
			"<div class='row pd-t-10'>" +
			"<div class='col-lg-4 mg-x-auto'>" +
			"<div class='widget-user-image'>" +
			"<div class='avatar avatar-Profile-User d-sm-flex bg-danger rounded-circle'>" + this.getInital('User Name') + "</div>" +
			"</div>" +
			"</div>" +
			"<div class='col-lg-8 text-white'>" +
			"<h4 class='font-light'> User's Name</h4>" +
			"<p class='mt-2 description-text-fixed-3line'>'Happy birthday! I hope all your birthday wishes and dreams come true.'</p>" +
			"<div class='m-t-20'>" +
			"<i>- From Team IT</i>" +
			"</div>" +
			"</div>" +
			"</div>"+
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>";


		return elementD;
	}

	this.getAnniversaryHtml = function (d) {

		var elementD = "<div class='card bg-danger-gradient ribbon ribbon-clip ribbon-left'>" +
			"<div class='ribbon-target' style='top: 4px;' id='card_ribbion'>" +
			"<span class='ribbon-inner bg-warning'></span>" +
			"<span class='ribbion_Ti'>Anniversary Card</span>" +
			"</div>" +
			"<div class='card-body pd-b-0'>" +
			"<div id='myCarousel3' class='carousel slide' data-ride='carousel'>" +
			"<div class='carousel-inner pd-b-20'> " +
			"<div class='" + this.BindBirthdayClass(0) + "'>" +
			"<div class='row pd-t-10'>" +
			"<div class='col-lg-4 mg-x-auto'>" +
			"<div class='widget-user-image'>" +
			"<div class='avatar avatar-Profile-User d-sm-flex bg-danger rounded-circle'>" + this.getInital('User Name') + "</div>" +
			"</div>" +
			"</div>" +
			"<div class='col-lg-8 text-white'>" +
			"<h4 class='font-light'> User's Name</h4>" +
			"<p class='mt-2 description-text-fixed-3line'>'Congratulations for completing x years in our organization, Keep performing.'</p>" +
			"<div class='m-t-20'>" +
			"<i>- From Team IT</i>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>";


		return elementD;
	}

	this.getHolidayList = function (Id) {

		return this.callHolidayList(Id);
	}

	this.getHolidayListHtml = function (d) {

		var elementD = "<div class='card card-primary pd-b-20'>"+
			"<div class='d-flex justify-content-between card-header'>" +
			"<h4 class='card-title'>Holiday List</h4>" +
			"<i class='far fa-2x fa-newspaper icons'></i>" +
			"</div>" +
			"<div class='card-body pt-0 fixedTabCardHeight'>" + this.createHolidayListLoop(d) +"</div>" +
			"</div>";

		return elementD;
	}

	this.createHolidayListLoop = function (data) {
		var returnData = "";
		for (var i = 0; i < data.length; i++) {
			returnData += "<div class='list d-flex align-items-center border-bottom py-3'>" +
				"<div class='avatar bg-info rounded-circle'>" + this.getInital(data[i].Holiday_Title) +"</div>" +
				"<div class='wrapper w-100 ml-3'>" +
				"<p class='mb-0'>" +
				"<b>" + data[i].Holiday_Title+" </b></p>" +
				"<div class='d-sm-flex justify-content-between align-items-center'>" +
				"<div class='d-flex align-items-center'>" +
				"<i class='fas fa-calendar-alt evnet-icon mr-1'></i>" +
				"<p class='mb-0 event-slider'>" + this.formatDate(data[i].Holiday_Date, 'MM/DD/YYYY h:mm:ss a', 'DD MMM YYYY') +"</p>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>";
		}
		return returnData;
	}

	this.callHolidayList = function (Id) {
		var data = {
			callType: "Widget"
		}
		return CommonAppUtilityService.CreateItem("/INT_Setting/getHolidayListData", data);
	}

});


wapp.controller('rightpCntrl', ['$scope', '$http', '$compile', 'CommonAppUtilityService', 'widgetService', function ($scope, $http, $compile, CommonAppUtilityService, widgetService) {

	$scope.widgetDataArray = [];
	$scope.testdemoRight = function (data) {
		$scope.widgetDataArray = $scope.widgetDataArray.concat(data);
		$scope.widgetDataArray.sort(function (a, b) {
			return (a.Squence - b.Squence);
		});
		createWidget();
	}

	function createWidget() {
		if ($scope.widgetDataArray.length > 0) {
			if ($scope.widgetDataArray[0].widgetName == "Article") {
				articleFun($scope.widgetDataArray[0]);
			} else if ($scope.widgetDataArray[0].widgetName == "Notice") {
				noticeFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Gallery") {
				GalleryFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Quick Link") {
				QuickLinkFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Event") {
				EventFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Awards") {
				AwardsFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Birthday") {
				BirthdayFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Anniversary") {
				AnniversaryFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Holiday List") {
				HolidayListFun($scope.widgetDataArray[0])
			}
		}
	}

	function HolidayListFun(d) {
		widgetService.getHolidayList(d).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var getAwardsData = response.data;

				var ListNames = widgetService.getHolidayListHtml(getAwardsData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function AnniversaryFun(d) {

		var ListNames = widgetService.getAnniversaryHtml();
		var myEl = angular.element(document.querySelector('#rightpWidget'));
		myEl.append(ListNames);
		$('.carousel').carousel();
		$scope.widgetDataArray.splice(0, 1);
		createWidget();

	}

	function BirthdayFun(d) {

		var ListNames = widgetService.getBirthdayHtml();
		var myEl = angular.element(document.querySelector('#rightpWidget'));
		myEl.append(ListNames);
		$('.carousel').carousel();
		$scope.widgetDataArray.splice(0, 1);
		createWidget();

	}

	function AwardsFun(d) {
		widgetService.getAwards(d).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var getAwardsData = response.data;
				
				var ListNames = widgetService.getAwardsHtml(getAwardsData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				$('.carousel').carousel();
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function articleFun(d) {
		widgetService.getArticle(d.PinnedId).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var demoData = response.data[0];
				console.log($scope.demoData);

				demoData.desc = $(demoData.Description).text();
				var ListNames = widgetService.getArticleHtml(demoData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function noticeFun(d) {
		widgetService.getNotice(d.PinnedId).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var demoData = response.data[0];
				demoData.desc = $(demoData.Description).text();

				if (demoData.Notice_Type != "Text" && (demoData.DocUrl != "" && demoData.DocUrl != undefined)) {
					demoData.NoticeDocUrl = demoData.DocUrl;
					demoData.noticeAttachmentYes = true;
				} else {
					demoData.noticeAttachmentYes = false;
				}

				var ListNames = widgetService.getNoticeHtml(demoData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function GalleryFun(d) {
		widgetService.getGallery(d.PinnedId).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var PhotoGallery = response.data;
				var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
				var ListNames = widgetService.getGalleryHtml(PhotoGallery, urlD, d.PiinedData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				$('.carousel').carousel();
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function QuickLinkFun(d) {
		widgetService.getQuickLink(d.idArray).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var PQuickLinkData = response.data;
				//var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
				var ListNames = widgetService.getQuickLinkHtml(PQuickLinkData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				//$('.carousel').carousel();
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function EventFun(d) {
		widgetService.getEvent(d).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var EventData = response.data;
				//var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
				var ListNames = widgetService.getEventHtml(EventData);
				var myEl = angular.element(document.querySelector('#rightpWidget'));
				myEl.append(ListNames);
				$('.ticker_PlugIn').easyTicker({
					height: 225,
					visible: 3,
					interval: 1500,
				});

				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}



}]);



wapp.controller('leftpCntrl', ['$scope', '$http', '$compile', 'CommonAppUtilityService', 'widgetService', function ($scope, $http, $compile, CommonAppUtilityService, widgetService) {

	$scope.widgetDataArray = [];

	$scope.testdemoLeft = function (data) {

		$scope.widgetDataArray = $scope.widgetDataArray.concat(data);
		$scope.widgetDataArray.sort(function (a, b) {
			return (a.Squence - b.Squence);
		});
		createWidget();
	}


	function createWidget() {
		if ($scope.widgetDataArray.length > 0) {
			if ($scope.widgetDataArray[0].widgetName == "Article") {
				articleFun($scope.widgetDataArray[0]);
			} else if ($scope.widgetDataArray[0].widgetName == "Notice") {
				noticeFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Gallery") {
				GalleryFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Quick Link") {
				QuickLinkFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Event") {
				EventFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Awards") {
				AwardsFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Birthday") {
				BirthdayFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Anniversary") {
				AnniversaryFun($scope.widgetDataArray[0])
			} else if ($scope.widgetDataArray[0].widgetName == "Holiday List") {
				HolidayListFun($scope.widgetDataArray[0])
			}
		}
	}

	function articleFun(d) {
		widgetService.getArticle(d.PinnedId).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var demoData = response.data[0];
				console.log($scope.demoData);

				demoData.desc = $(demoData.Description).text();
				var ListNames = widgetService.getArticleHtml(demoData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function noticeFun(d) {
		widgetService.getNotice(d.PinnedId).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var demoData = response.data[0];
				demoData.desc = $(demoData.Description).text();

				if (demoData.Notice_Type != "Text" && (demoData.DocUrl != "" && demoData.DocUrl != undefined)) {
					demoData.NoticeDocUrl = demoData.DocUrl;
					demoData.noticeAttachmentYes = true;
				} else {
					demoData.noticeAttachmentYes = false;
				}

				var ListNames = widgetService.getNoticeHtml(demoData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function GalleryFun(d) {
		widgetService.getGallery(d.PinnedId).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var PhotoGallery = response.data;
				var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
				var ListNames = widgetService.getGalleryHtml(PhotoGallery, urlD, d.PiinedData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);
				$('.carousel').carousel();
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function QuickLinkFun(d) {
		widgetService.getQuickLink(d.idArray).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var PQuickLinkData = response.data;
				//var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
				var ListNames = widgetService.getEventHtml(PQuickLinkData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);

				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function AwardsFun(d) {
		widgetService.getAwards(d).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var getAwardsData = response.data;

				var ListNames = widgetService.getAwardsHtml(getAwardsData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);
				$('.carousel').carousel();
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function BirthdayFun(d) {

		var ListNames = widgetService.getBirthdayHtml();
		var myEl = angular.element(document.querySelector('#leftWidget'));
		myEl.append(ListNames);
		$('.carousel').carousel();
		$scope.widgetDataArray.splice(0, 1);
		createWidget();

	}

	function AnniversaryFun(d) {

		var ListNames = widgetService.getAnniversaryHtml();
		var myEl = angular.element(document.querySelector('#leftWidget'));
		myEl.append(ListNames);
		$('.carousel').carousel();
		$scope.widgetDataArray.splice(0, 1);
		createWidget();

	}

	function EventFun(d) {
		widgetService.getEvent(d).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var EventData = response.data;
				//var urlD = decodeURIComponent(getUrlVars()["SPHostUrl"]).split('/sites/')[0];
				var ListNames = widgetService.getEventHtml(EventData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);
				$('.ticker_PlugIn').easyTicker({
					height: 225,
					visible: 3,
					interval: 1500,
				});

				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

	function HolidayListFun(d) {
		widgetService.getHolidayList(d).then(function (response) {
			console.log("response");
			console.log(response);
			if (response.status == 200) {
				var getAwardsData = response.data;

				var ListNames = widgetService.getHolidayListHtml(getAwardsData);
				var myEl = angular.element(document.querySelector('#leftWidget'));
				myEl.append(ListNames);
				$scope.widgetDataArray.splice(0, 1);
				createWidget();
			}
		});
	}

}]);

wapp.directive('fullp', function () {
    return {
        restrict: 'C',
		template: "<div class='col-lg-4 col-md-4' id='fullpWidget'></div>",
		controller: 'fullpCntrl'
    }
})
.directive('rightp', function () {
	return {
		restrict: 'C',
		template: "<div class='col-lg-12 col-md-12' id='rightpWidget'></div>",
		controller: 'rightpCntrl'
	}
})

.directive('leftp', function () {
	return {
		restrict: 'C',
		template: "<div class='col-lg-12 col-md-12' id='leftWidget'></div>",
		controller: 'leftpCntrl'
	}
})

	