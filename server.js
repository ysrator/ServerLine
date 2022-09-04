const check = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ServerLine\ServerLine.txt");
    xhr.send();
    return xhr.response;
}