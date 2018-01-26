$(function() {
    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

//search show
// $(".search_btn").click(function (e) {
//     e.preventDefault();
//     if( $(".search_inp").hasClass('search_inp--show')){
//         $(".search_btn").submit();
//     }else{
//         $(".search_inp").toggleClass('search_inp--show');
//     }
// });


