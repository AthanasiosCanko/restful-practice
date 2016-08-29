$(document).ready(function() {
	
	// GET Request
	$(".btn-primary").on("click", function() {
		// Ajax Request
		$.ajax({
			url: '/get_arr',
			type: 'GET',
			success: function(arr) {
				$("#get").html(JSON.stringify(arr));
			},
			error: function(err) {
				$("#get").html(err);
			}
		});
	});
	
	// POST Request
	$(".btn-success").on("click", function() {
		// Ajax Request
		$.ajax({
			url: '/get_arr',
			type: 'POST',
			dataType: 'json',
			data: {
				item: $("#item").val()
			}
		});
	});
	
	// PUT Request
	$(".btn-warning").on("click", function() {
		// Ajax Request
		$.ajax({
			url: '/get_arr',
			type: 'PUT',
			dataType: 'json',
			data: {
				update: $("#update").val()
			}
		});
	});
	
	// DELETE Request
	$(".btn-danger").on("click", function() {
		// Ajax Request
		$.ajax({
			url: '/get_arr',
			type: 'DELETE'
		});
	});
});