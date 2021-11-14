$(function(){
  $("button#reserveButton").onclick(function(){
    $("#reserveModals").modal("show");
  });
  $("button#loginButton").onclick(function(){
    $("#loginModal").modal("show");
  });
});