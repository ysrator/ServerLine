const http = new XMLHttpRequest();
const server = {
    get: function (id) {
        http.onload = function () {
            return this.responseText[id];
        }
        http.open("GET", "./ServerLine.txt");
        http.send();
    },
    edit: function (id, newConcent) {
        //Github App
    }
}


server.get("test");