import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase';

export class Autenticacao {
  public cadastrarUsuario(usuario: Usuario): void {
    console.log('chegamos até o serviço: ', usuario);
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resposta: any) => console.log(resposta))
      .catch(err => console.log('erro', err));
  }
}
