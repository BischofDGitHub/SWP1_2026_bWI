document.getElementById("load").addEventListener("click", function (){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
        //console.log(result);        //http response
        result.json().then((data) => {
            console.log(data);
            getHTMLforTodos(data);
        })
    })
})

function getHTMLforTodos(data) {
    let html ="<ul>"
    data.forEach(todo => {
        html += "<li>" + todo.title + "</li>";

    });
    html += "</ul>";
    document.getElementById("content").innerHTML = html;
}