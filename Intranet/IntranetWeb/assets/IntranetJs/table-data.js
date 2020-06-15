$(function(e) {
	//file export datatable


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
		},
	});
	table.buttons().container()
		.appendTo('#' + id + '_wrapper .col-md-6:eq(0)');
}