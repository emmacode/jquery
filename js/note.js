$(document).ready(function () {
    $("body").css("font-family", "'Lato', sans-serif");
    $(".sidenav").css({
        "height": "100%",
        "width": "0",
        "position": "fixed",
        "z-index": "1",
        "top": "o",
        "left": "0",
        "background-color": "#111",
        "overflow-x": "hidden",
        "transition":"0.5s",
        "padding-top": "60px",
    });
    $(".sidenav .closebtn").css({
        "position": "absolute",
        "top": "0",
        "right": "25px",
        "font-size": "36px",
        "color":"white",
        "margin-left": "50px",
    });
    $(".sidenav li").css({
        "padding":"8px 8px 8px 32px",
        "text-decoration":"none",
        "display":"block",
        "transition":"0.3s",
    })
    //Adding class and html to the id 'list-1'
    $("#list-1").html("My notes");
    $("#list-1").addClass("btn btn-outline-success p-2 ");
    //End of list-1
    //Adding class and html to the id 'list-2'
    $("#list-2").html("Create Note");
    $("#list-2").addClass("btn btn-outline-success p-2");
    //End of 'list-2'
    //Adding class and html to the id 'list-3'
    $("#list-3").html("Recycle Bin");
    $("#list-3").addClass("btn btn-outline-success p-2");
    //Adding CSS to class 'btn btn-outline-success'
    $(".btn-outline-success").css({
        "position": "relative",
        "margin": "20px",
    });
    $("#Topic").css({
        "position": "absolute",
        "top": "15%",
        "left": "20%",
        "right": "20%",
        "width": "35%",
    });
    $("#Topicin").css({
        "border-radius": "5px",
        "border-style": "solid",
        "border-color": "black",
        "border-width": "1px",
        "color": "black",
    });
    $("#addNote").css({
        "position": "absolute",
        "top": "25%",
        "height": "50%",
        "left": "20%",
        "right": "20%",
        "width": "60%",
        "color": "black",
        "border-style": "solid",
        "border-width": "2px",
        "border-color": "black",
        "border-radius": "5px",
        "resize": "none",
    });
    $("#submit").css({
        "position": "absolute",
        "right": "20%",
        "bottom": "18%",
    }).addClass("btn btn-outline-success");
    $("#list-2").click(function () {
        $("#show-create-note").toggle();
    });
    $("#list-1").click(function () {
        $("#show-my-notes").toggle();
    });
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}