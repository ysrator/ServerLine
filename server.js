class server_line {
    constructor(src) {
        var xhr = new XMLHttpRequest();
        xhr.onabort = function (){
            console.error("Err: On aborted");
        }
        xhr.onerror = function () {
            console.error("Err: On errored");
        }
        return eval("const server_src = this.src");
    }
    get(id) {
        var xhr = new XMLHttpRequest();
        if (server_src = !null) xhr.open("GET", "./ServerLine.txt");
        else xhr.open("GET", src + "ServerLine.txt");
        xhr.send();
        if (id = null) return xhr.response;
        else return xhr.response[id];
    }
}