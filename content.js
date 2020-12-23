const validCharacters = "abcdefghijklmnopqrstuvwxyz01234567890.-:/\\";

handleModalClick = function() {
    document.getElementById("modal-wrapper").remove();
    document.getElementById("dialog-wrapper").remove();
}

onWebpageLoad = () => {
    let domain = window.location.hostname;
    chrome.storage.sync.set({domainName: domain}, function() {
        console.log("Domain name has been saved.");
    });
    for (let char of domain) {
        if (!validCharacters.includes(char)) {
            console.log("Rendering modal");
            renderModal("This webpage may not be legitimate. The character \"" + char + "\" is phishy...");
            return;
        }
    }
}

renderModal = (contentString) => {
    wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 100%; width: 100%;");
    wrapperDiv.setAttribute("id","modal-wrapper");

    iframeElement = document.createElement("iframe");
    iframeElement.setAttribute("style","width: 100%; height: 100%;");

    wrapperDiv.appendChild(iframeElement);

    modalDialogParentDiv = document.createElement("div");
    modalDialogParentDiv.setAttribute("id","dialog-wrapper");
    modalDialogParentDiv.setAttribute("style","position: absolute; width: 30%; border: 5px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 20%; left: 35%;");

    modalDialogSiblingDiv = document.createElement("div");

    modalDialogHeadDiv = document.createElement("div");
    modalDialogHeadDiv.setAttribute("style","text-align: center; margin: 2%;");

    imageElement = document.createElement("img"); 
    imageElement.src = chrome.extension.getURL("images/get_started32.png");
    imageElement.setAttribute("style","margin: 2%; display: inline; vertical-align: middle;");

    titleElement = document.createElement("h1");
    titleElement.innerHTML = "NoPhish";
    titleElement.setAttribute("style","display: inline; vertical-align: middle; font-size: x-large; font-weight: 700;");

    modalDialogTextDiv = document.createElement("div"); 
    modalDialogTextDiv.setAttribute("style","text-align: center;");

    modalDialogTextSpan = document.createElement("span"); 
    modalDialogText = document.createElement("strong"); 
    modalDialogText.innerHTML = contentString;

    breakElement = document.createElement("br"); 

    button = document.createElement("button");
    button.setAttribute("style","margin-top: 4%; margin-bottom: 2%;")
    button.innerHTML = "Ok";
    button.onclick = handleModalClick;


    modalDialogHeadDiv.appendChild(imageElement);
    modalDialogHeadDiv.appendChild(titleElement);

    modalDialogTextSpan.appendChild(modalDialogText);

    modalDialogTextDiv.appendChild(modalDialogTextSpan);
    modalDialogTextDiv.appendChild(breakElement);
    modalDialogTextDiv.appendChild(breakElement);
    modalDialogTextDiv.appendChild(button);

    modalDialogSiblingDiv.appendChild(modalDialogHeadDiv);
    modalDialogSiblingDiv.appendChild(modalDialogTextDiv);

    modalDialogParentDiv.appendChild(modalDialogSiblingDiv);

    document.body.appendChild(wrapperDiv);
    document.body.appendChild(modalDialogParentDiv);
}


onWebpageLoad();