

const chat = new WebSocket("ws://localhost:8080/mensagem");
chat.onmessage = (function (evt) {
    console.log(evt.data);        
});
chat.onerror = (function (evt) {
    console.log("ERRO "+evt.data);        
});
chat.onopen = (function () {
    console.log("OPEN ");
});

export function enviar(msg){
    chat.send(msg);
}