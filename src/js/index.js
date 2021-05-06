import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';

let button = document.getElementById("add"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML =  " العدد " + count + ` <i class="fas fa-cart-plus"></i>`;
};
