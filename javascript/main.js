$(document).ready(function(){
    console.log( 'ready!' );

// prevent page from jumping with event.preventDefault()
    $("a").click(function(event) {
        event.preventDefault();
    });

// delay code from executing until all DOM assets load with $.ready()
    $( "document" ).ready();

// Read More 
    // a class="readmore"  -- p class="hide" id="show-this-on-click" -- a class="readless hide"

    // change Read More to Read Less plus text drop down with $.slideDown() and $.show()
    // hide Read More
    $(".readmore").on("click",function() {
       $("#show-this-on-click").slideDown(function() {
        });    
    if ($(".readmore").on("click" === true)) {
            $(".readless").show() 
            $(".readmore").hide()
        } else {
            $(".readmore").show()
            $(".readless").hide()
        }
    });
  

// Read Less  
    // text slides up with Read Less with $.slideUp() and $.hide()
    $(".readless").on("click",function() {
        $("#show-this-on-click").slideUp(function() {
         });
    // show Read with $.show()
    if ($(".readless").on("click" === true)) {
        $(".readmore").show() 
        $(".readless").hide()
    } else {
        $(".readless").show()
        $(".readmore").hide()
    };
}); 

// Learn More 
    // a class="learnmore" span class="hide" id="learnmoretext"

    // <span> inside <p> slide down and hide Learn More with $.slideDown() and $.show()
    $(".learnmore").on("click",function(){
        $("#learnmoretext").slideDown(function(){
        });
        if ($(".learnmore").on("click" === false))
        $("#learnmoretext").hide()
    });

});