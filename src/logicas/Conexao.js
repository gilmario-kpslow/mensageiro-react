export default class Conexao {

    constructor(chave, open, mensagem, error){
        this.socket = new WebSocket("ws://192.168.1.3:8080/mensageiro/chat")
        this.socket.onmessage = (evt) => {
            mensagem(evt.data)
        }

        this.socket.onerror = (evt) => {
            error(evt.data)
        }

        this.socket.onopen = () => {
            open()
        }
    }

    enviar(msg){
        this.socket.send(msg)
    }
}
