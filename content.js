const validCharacters = "abcdefghijklmnopqrstuvwxyz01234567890.-:/\\";
onWebpageLoad = () => {

    let domain = window.location.hostname;

    chrome.storage.sync.set({domainName: domain}, function() {
        console.log("Domain name has been saved.");
    });

    for (let char of domain) {
        if (!validCharacters.includes(char)) {
            alert("NoPhish: This webpage may not be legitimate. The character " + char + " is suspicious.");
        }
    }
}

onWebpageLoad();