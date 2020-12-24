let domainNameParagraph = document.getElementById("domain-name");

chrome.storage.sync.get(["domainName"], function(data) {
    domainNameParagraph.innerHTML = data.domainName;
});
