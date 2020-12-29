let domainNameParagraph = document.getElementById("domain-name");

//Get last domain request from storage
chrome.storage.sync.get(["domainName"], function(data) {
    domainNameParagraph.innerHTML = data.domainName;
});
