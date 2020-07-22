
function bindDataTable(id) {
	var table = $('#' + id).DataTable({
		lengthChange: true,
		//responsive: true,
		aaSorting: [[0, 'desc']],
		aoColumnDefs: [{ "bVisible": false, "aTargets": [0] }],
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