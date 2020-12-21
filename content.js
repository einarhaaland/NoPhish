const validCharacters = "abcdefghijklmnopqrstuvwxyz01234567890.-:/\\";
onWebpageLoad = () => {

    let domain = window.location.hostname;
    console.log(domain);

    for (let char of domain) {
        console.log(char);
        if (!validCharacters.includes(char)) {
            alert("NoPhish: This webpage may not be legitimate. The character " + char + " is suspicious.");
        }
    }
}

onWebpageLoad();