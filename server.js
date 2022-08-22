class server_line {
    constructor(src) {
        src = this.src;
        var xhr = new XMLHttpRequest();
        xhr.onabort = function (){
            console.error("Err: On aborted");
        }
        xhr.onerror = function () {
            console.error("Err: On errored");
        }
    }
    get(id) {
        var xhr = new XMLHttpRequest();
        if (src = !null) xhr.open("GET", "./ServerLine.txt");
        else xhr.open("GET", src + "ServerLine.txt");
        xhr.send();
        if (id = null) return xhr.response;
        else return xhr.response[id];
    }
}
