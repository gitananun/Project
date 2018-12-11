function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('del');

    function handleSubmit() {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }

    function handleDelete() {
        socket.emit("delete message"); //haxordakgrutyun uxarki serverin
    }

    button.onclick = handleSubmit;
    del.onclick = handleDelete;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function deleteFromDom(msg) {
        var x = document.getElementsByTagName("p");
        
        for(var i in x){
            if(x.length > 0){
            chatDiv.removeChild(x[0]);
            }
        }
    }

    socket.on('display message', handleMessage);
    socket.on('delete', deleteFromDom);
} // main closing bracket
 

window.onload = main;



