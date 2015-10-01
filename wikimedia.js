if ( $('#mw-page-base').is(':visible') ) {
  $("#mw-page-base, #mw-head-base, #mw-navigation, #footer, #toc, .mw-editsection").hide();
  $("#collapseButton0").click();
  $("#content").attr( "style" , "margin-left: 0px;" );
} else {
  $("#mw-page-base, #mw-head-base, #mw-navigation, #footer, #toc, .mw-editsection").show();
  $("#collapseButton0").click();
  $("#content").removeAttr( "style" );
}
