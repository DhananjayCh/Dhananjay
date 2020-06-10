$(function(e) {
	//file export datatable
	/*var table = $('#ArticleDataTable').DataTable({
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#ArticleDataTable_wrapper .col-md-6:eq(0)' );
	
	var table = $('#NoticeDataTable').DataTable({
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#NoticeDataTable_wrapper .col-md-6:eq(0)' );*/

	var table = $('#EventDataTable').DataTable({
		lengthChange: true,
		responsive: true,
		bDestroy: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#EventDataTable_wrapper .col-md-6:eq(0)' );

	var table = $('#SliderDataTable').DataTable({
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#SliderDataTable_wrapper .col-md-6:eq(0)' );

	var table = $('#AwardDataTable').DataTable({
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#AwardDataTable_wrapper .col-md-6:eq(0)' );

	var table = $('#GalleryDataTable').DataTable({
		lengthChange: true,
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo('#GalleryDataTable_wrapper .col-md-6:eq(0)');



	
});

function bindDataTable(id) {
	var table = $('#' + id).DataTable({
		lengthChange: true,
		responsive: true,
		bDestroy: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
		.appendTo('#' + id + '_wrapper .col-md-6:eq(0)');
}