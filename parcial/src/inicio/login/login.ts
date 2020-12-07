import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TabsPage } from "../../pages/tabs/tabs";
import { RegistroPage } from "../registro/registro";
import { TabsPage2 } from "../../pages-domi/tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formulario : FormGroup;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioProvider: UsuarioProvider,
    private fb : FormBuilder,
    public alertCtrl: AlertController,
    public toastCrl: ToastController
  ) {
    this.formulario = this.fb.group({
      usuario : '',
      contrasena : ''
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registro(){
    this.navCtrl.setRoot(RegistroPage);
  }

  async loguear(){
    if(this.formulario.value.usuario == '' || this.formulario.value.contrasena == ''){
      const toast = this.toastCrl.create({
        message: 'Digite los datos',
        duration: 3000
      });
      (await toast).present();
    }else{
      this.usuarioProvider.loguear(this.formulario.value).subscribe(data=>{
        if(data['usuario_encontrado'] != null){
          const toast = this.toastCrl.create({
            message: 'Iniciando Sesión...',
            duration: 2000
            //position: 'middle'
          });
          (toast).present();
          if(data['usuario_encontrado'].tipoPersona == 0){
            localStorage.setItem('id', data['usuario_encontrado']._id);
            this.navCtrl.setRoot(TabsPage);
          }else{
            localStorage.setItem('id', data['usuario_encontrado']._id);
            this.navCtrl.setRoot(TabsPage2);
          }
        }else{
          const toast = this.toastCrl.create({
            message: 'Datos incorrectos...',
            duration: 3000
            //position: 'middle'
          });
          (toast).present();
        }
      }, err => {
      })
    }
  }

}
