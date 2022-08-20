const http = new XMLHttpRequest();
http.ontimeout = function () {
    console.error("ServerLine error: Request time out.");
}
http.onload = function () {
    console.info("ServerLine info: Data was loaded.");
}
http.onerror = function () {
    console.error("ServerLine error: HTTP error dedected.");
}
class serverLine {
    constructor(src) {
        src = this.src;
    }
    db() {
        if (src = null) http.open("GET", "./ServerLine.txt");
        else http.open("GET", src + "ServerLine.txt");
        http.send();
        return http.response;
    }
    get(id) {
        if (src = null) http.open("GET", "./ServerLine.txt");
        else http.open("GET", src + "ServerLine.txt");
        http.send();
        return http.response[id];
    }
}

const server = new serverLine();