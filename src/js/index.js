import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';

let button = document.getElementById('add'),
	count = 0;
button.onclick = function () {
	count += 1;
	button.innerHTML = ' العدد ' + count + ` <i class="fas fa-cart-plus"></i>`;
};

jquery(function () {
	$('#search-filters-icon').on('click', function () {
		$('.filter-column').slideToggle('slow');
	});

	$('input:checkbox').on('click', function () {
		var $box = $(this);

		if ($box.is(':checked')) {
			var group = "input:checkbox[name='' + $box.attr('name') + '']";
			$(group).prop('checked', false);
			$box.prop('checked', true);
		}
	});
});
