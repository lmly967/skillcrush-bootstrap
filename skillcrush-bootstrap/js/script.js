$(document).on("scroll",function(){
alert("Scrolling detected!");
});
$(document).on("scrollstart",function(){
alert("Started scrolling!");
});
$(document).on("scrollstop",function(){
alert("Stopped scrolling!");
});