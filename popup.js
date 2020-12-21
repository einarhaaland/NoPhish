let changeColorButton = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColorButton.style.backgroundColor = data.color;
  changeColorButton.setAttribute('value', data.color);
});

changeColorButton.onclick = function(element) {
    let color = element.target.value; 
    console.log(element);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };