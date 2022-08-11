const http = new XMLHttpRequest();
const server = {
    get: function (id) {
        http.onload = function () {
            return eval("var t = this.responseText[id]");
        }
        http.open("GET", "./ServerLine.txt", true);
        http.send();
        return t;
    },
    edit: function (id, newConcent) {
        //Github App
    }
}


document.write(server.get(0));