const check = function (t, t2) {
    var xhr = new XMLHttpRequest();
    if (t) xhr.open("GET", t2 + "ServerLine.txt");
    else xhr.open("GET", "./ServerLine.txt");
    xhr.send();
    return xhr.response;
}