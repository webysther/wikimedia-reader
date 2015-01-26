var clicked = function(tab) {
  chrome.tabs.executeScript( tab.id,
    { file: "bower_components/jquery/dist/jquery.min.js" }
  );
  chrome.tabs.executeScript(tab.id, {file: "wikimedia.js"});
};

var tab_updated = function(tabId,changeInfo,tab) {
  chrome.storage.sync.get( "leituralimpa" , function( item ) {
    var checked = true;
    if (item.hasOwnProperty("leituralimpa")){
      checked = JSON.parse( item.leituralimpa ).automatic;
    }

    if (checked === true || checked == "checked" ) {
      chrome.tabs.executeScript( tab.id,
        { file: "bower_components/jquery/dist/jquery.min.js" }
      );
      chrome.tabs.executeScript(tab.id,
        {file: "wikimedia_enable.js"}
      );
    }
  });
};

chrome.tabs.onUpdated.addListener(tab_updated);
chrome.browserAction.onClicked.addListener(clicked);