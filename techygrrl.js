<script>
$(document).ready(function (){
if(window.location.href.indexOf("Qok7q2KM") > -1) {
$(".checkout-panel-title").css("display","none");
}
if(window.location.href.indexOf("hScUgCWy") > -1) {
$(".checkout-panel-title").css("display","none");
}
if(window.location.href.indexOf("mHi4gVUV") > -1) {
$(".checkout-panel-title").css("display","none");
}

<!-- CHECKOUT TESTIMONIAL SLIDER CND CODE-->
if(window.location.href.indexOf("JVxWZa92") > -1) {
$(document).ready(function(){
$('.checkout-testimonials').find('h4').first().remove();
  $('.checkout-testimonials').slick({
  slidesToShow: 1,
  dots:true,
    autoplay:true
  });
});
}


$('.checkout-order-bump-label').insertBefore('.checkout-order-bump h4');
$('.checkout-order-bump-label').insertBefore('.checkout-order-bump h3:first-child');
$('.panel-heading').before('<div style="padding-top:20px;display: flex;  justify-content: space-evenly;"><img style="width:35%;" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148262250/settings_images/ANE9Y7iuTju0G5nIK3Ec_qKbpPnTwTUiT6RveNoD8_103378567_299998931166679_3969840169532516782_n.png"><img style="width:35%;" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148262250/settings_images/Gj9pCUM3Qp6hcXvVwWbV_XYHbg6gbSEi4ajLtrb8o_104186015_1146800922345156_2202204579892384292_n.png"></div>');

var productPrice = $('.js-checkout-panel-price-discountable').text();

var productTitle = $('.checkout-content-title').text();

$(".checkout-panel-title").html("<div class='parent label grid-parent'><div class='child1'>Item</div><div class='child2'>Price</div></div><div class='parent prices grid-parent'><div class='child1'><input type='radio' checked><span class='product_name'>"+productTitle+"</span></div><div class='child2'><span class='product_price'>"+productPrice+"</span></div></div>");

$('.checkout-content-title').html('');
$('.paypal-button').after('<img class="center-img" width="180" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148262250/settings_images/U3HOBYDSu2SCdSRtYUbW_oFfX7zTwQQm3A0dp1RSE_powered-by-stripe.png">');

});
</script>
<!-- RADIO BUTTON checkout code -->
<script>
$(document).ready(function (){
var get_data = $(".offers").html();
$(".panel-heading").append(get_data );

<!-- taxes and gst-->
if(window.location.href.indexOf("wy2ioZQp") > -1){
$("h4.checkout-panel-subtitle").css("display", "none");
var productPrice = $("h1.checkout-panel-title").text();
var productTitle = 'Shopify Monthly Maintenance Plan';
$(".checkout-panel-title").html("<div class='parent label grid-parent'><div class='child1'>Item</div><div class='child2'>Price</div></div><div class='parent prices grid-parent'><div class='child1'><input type='radio' checked><span class='product_name'>"+productTitle+"</span></div><div class='child2'><span class='product_price'>$45 USD</span></div></div>");
$('.panel-heading').css('padding-top','0px');

$("<div class='parent prices grid-parent gt'><div class='child1'><span class='gst'>Transaction Fee 5.5%</span></div><div class='child2'><span class='product_price'>$2.0 USD</span></div></div>").insertAfter('.parent.prices.grid-parent');

$("<div class='parent prices grid-parent tt'><div class='child1'><span class='gst'>Total</span></div><div class='child2'><span class='product_price'>"+productPrice+"</span></div></div>").insertAfter('.parent.prices.grid-parent.gt');
}
<!-- Taxes and gst ends-->
<!-- SELECT BOX -->
if(window.location.href.indexOf("JjG2oSxz") > -1){
var data = "<select onchange='location = this.value;' class='checkout-options'><option value='/offers/JjG2oSxz/' data-url='/offers/JjG2oSxz/'>Offer1 Name</option><option value='/offers/CTEFz8zF/' data-url='/offers/CTEFz8zF/'>Offer2 Name</option></select>";
$(".panel-heading").prepend(data);
var label = "<span class='dropdown-label'>Select Options</span>";
$(".panel-heading").prepend(label);
}
if(window.location.href.indexOf("CTEFz8zF") > -1){
var data = "<select onchange='location = this.value;' class='checkout-options'><option value='/offers/CTEFz8zF/' data-url='/offers/CTEFz8zF/'>Offer2 Name</option><option value='/offers/JjG2oSxz/' data-url='/offers/JjG2oSxz/'>Offer1 Name</option></select>";
$(".panel-heading").prepend(data );
var label = "<span class='dropdown-label'>Select Options</span>";
$(".panel-heading").prepend(label);
}
});
</script>
