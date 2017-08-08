import {mensagem} from '../acoes/criadorAcoes';

export default class mensagemApi {

    static mensagem(msg) {
        return dispatch =>{
            dispatch(mensagem(msg));
        }
    }    
}