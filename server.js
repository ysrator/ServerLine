const http = new XMLHttpRequest();
const server = {
    repo,
    owner,
    login: function (repositoryname, owner) {
        http.open("GET", "https://api.github.com/repos/" + owner + "/" + repositoryname);
        http.send();
        if (http.request = !null) {
            server.repo = repositoryname;
            server.owner = owner;
        }
        else {
            console.error("ServerLine error: Repository not found!");
        }
    },
    get: function (id) {
        http.open("GET", "https:/" + this.owner + ".github.io/" + this.repo + "/ServerLine.txt");
        http.send();
        return http.request[id];
    },
    edit: function (id, newConcent) {
        //Github App
    }
}

server.login("ysrator.github.io", "ysrator");
document.write(server.get(0));