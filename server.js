const http = new XMLHttpRequest();
let repo;
let owner;
http.ontimeout = function () {
    console.error("ServerLine error: Request time out.");
}
http.onload = function () {
    console.info("ServerLine info: Data was loaded.");
}
http.onerror = function () {
    console.error("ServerLine error: HTTP error dedected.");
}
const server = {
    login: function (repositoryname, owner) {
        http.open("GET", "https://api.github.com/repos/" + owner + "/" + repositoryname);
        http.send();
        if (http.request = !null) {
            repo = repositoryname;
            owner = owner;
        }
        else {
            console.error("ServerLine error: Repository not found.");
        }
    },
    get: function (id) {
        if (repo = !null) {
            http.open("GET", "./ServerLine.txt");
        }
        else {
            http.open("GET", owner + ".github.io/" + repo + "ServerLine.txt");
        }
        http.open("GET", "./ServerLine.txt");
        http.send();
        return http.response[id];
    },
    edit: function (id, newConcent) {
        /*
        Github Application --ServerLine_Connector
            .save
        */
    },
    db: function () {
        if (repo = null) http.open("GET", "./ServerLine.txt");
        else http.open("GET", owner + ".github.io/" + repo + "/ServerLine.txt");
        http.send();
        return http.response;
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
        var ext2 = document.getElementById("appY(" + appName + ")");
        document.body.insertBefore(ext, ext2);
    }
}

console.log("Yasirator API imported.");
http.open("GET", "./index.pr");
http.send();
document.body.innerHTML += "<script>" + http.response + "</script>";
