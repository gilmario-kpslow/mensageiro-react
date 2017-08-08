export function mensagem(state='',action){
  if(action.type === 'MENSAGEM'){  
    return action.msg;
  }
  return state;
}