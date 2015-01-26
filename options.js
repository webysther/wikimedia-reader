function save_options(event) {
  chrome.storage.sync.set({
    "leituralimpa": JSON.stringify({
        'automatic': $('#automatic').attr( "checked" )
    })
  });
}

function restore_options() {
  $("#options_text").html(chrome.i18n.getMessage("options"));
  $("#automatic").attr("label", chrome.i18n.getMessage("automatic"));
  $("#supported_list").html(chrome.i18n.getMessage("supported"));
  $("#toast").attr("text", chrome.i18n.getMessage("optionSaved"));
  $("title").html(chrome.i18n.getMessage("options"));

  chrome.storage.sync.get( "leituralimpa" , function( item ) {
    console.log(item);
    var checked = true;
    if (item.hasOwnProperty("leituralimpa")){
      checked = JSON.parse( item.leituralimpa ).automatic ;
    }

    $('#automatic').attr( "checked" , checked );
  });
}

$(window).on( "polymer-ready" , restore_options );
$('#automatic').on('change', save_options);