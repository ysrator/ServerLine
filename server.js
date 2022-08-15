const http = new XMLHttpRequest();
http.ontimeout = function () {
    console.error("ServerLine error: Request time out.");
}
http.onload = function () {
    console.info("ServerLine info: Data was loaded.");
}
const server = {
    repo: "",
    owner: "",
    login: function (repositoryname, owner) {
        http.open("GET", "https://api.github.com/repos/" + owner + "/" + repositoryname);
        http.send();
        if (http.request = !null) {
            server.repo = repositoryname;
            server.owner = owner;
        }
        else {
            console.error("ServerLine error: Repository not found.");
        }
    },
    get: function (id) {
        http.open("GET", "./ServerLine.txt");
        http.send();
        return http.request[id];
    },
    edit: function (id, newConcent) {
        /*
        Github Application --ServerLine_Connector
            .save
        */
    },
    db: function () {
        http.open("GET", "./ServerLine.txt");
        http.send();
        return http.request;
    }
}
const yasirator = {
    login: function (id) {},
    embed: function (appName) {
        var ext = document.createElement("div");
        ext.id = "appY(" + appName + ")";
        http.open("GET", "https://server.yasirator.ml/ServerLine.txt");
        http.send();
        ext.innerHTML = "";
    }
}