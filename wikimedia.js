if ( $('#mw-page-base').is(':visible') ) {
  $("#mw-page-base").hide();
  $("#mw-head-base").hide();
  $("#mw-navigation").hide();
  $("#footer").hide();
  $("#toc").hide();
  $("#collapseButton0").click();
  $(".mw-editsection").hide();
  $("#content").attr( "style" , "margin-left: 0px;" );
} else {
  $("#mw-page-base").show();
  $("#mw-head-base").show();
  $("#mw-navigation").show();
  $("#footer").show();
  $("#toc").show();
  $("#collapseButton0").click();
  $(".mw-editsection").show();
  $("#content").removeAttr( "style" );
}