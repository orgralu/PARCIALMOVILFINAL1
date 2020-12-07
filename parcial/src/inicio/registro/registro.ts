import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
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
      nombre : '',
      apellido : '',
      sexo : '',
      cedula : '',
      tipoPersona : '',
      celular : '',
      usuario : '',
      contrasena : ''
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  async guardar(){
    if(this.formulario.value.nombre == '' || this.formulario.value.apellido == ''){
      const toast = this.toastCrl.create({
        message: 'Digite los datos',
        duration: 3000
      });
      (await toast).present();
    }else{
      const toast = this.toastCrl.create({
        message: 'GUARDANDO...',
        duration: 3000
        //position: 'middle'
      });
      (await toast).present();
      this.usuarioProvider.crear_usuario(this.formulario.value).subscribe(data=>{
        if(data.ok == true){
          this.navCtrl.setRoot(LoginPage);
          //window.location.reload();
        }
      }, err => {
      })
    }
  }

  login(){
    this.navCtrl.setRoot(LoginPage);
  }

}
