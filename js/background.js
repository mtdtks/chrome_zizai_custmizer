chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage.getItem("test")});
    else if (request.method == "getLocalStorage_memo")
      sendResponse({data: localStorage.getItem("memo")});
    else
      sendResponse({}); // snub them.
});
