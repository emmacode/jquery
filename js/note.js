$(document).ready(function () {
    $(".sidenav").css({
        "height": "100%",
        "width": "200px",
        "position": "fixed",
        "z-index": "1",
        "top": "o",
        "left": "0",
        "background-color": "#111",
        "overflow-x": "hidden",
        "padding-top": "20px",
    });
    //Adding class and html to the id 'list-1'
    $("#list-1").html("Create Account");
    $("#list-1").addClass("btn btn-success");
    //End of list-1
    //Adding class and html to the id 'list-2'
    $("#list-2").html("My notes");
    $("#list-2").addClass("btn btn-success");
    //End of 'list-2'
    //Adding class and html to the id 'list-3'
    $("#list-3").html("Recycle bin");
    $("#list-3").addClass("btn btn-success");
    //Adding CSS to class 'btn btn-success'
    $(".btn-success").css({
        "position":"relative",
        "margin":"20px",
    });
    
});
