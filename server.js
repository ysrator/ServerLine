var server_src;
server_src = null;

class server_line {
    constructor() {}
    get(id) {
        var xhr = new XMLHttpRequest();
        if (server_src = !null) xhr.open("GET", "./ServerLine.txt");
        else xhr.open("GET", server_src + "ServerLine.txt");
        xhr.send();
        if (id = null) return xhr.response;
        else return xhr.response[id];
    }
}
