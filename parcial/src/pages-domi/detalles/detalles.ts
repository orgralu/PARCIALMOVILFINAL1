import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoProvider } from '../../providers/producto/producto';
import { Categoria } from '../../modelo/categoria.modelo';
import { TabsPage2 } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

  categorias : Array<Categoria> = [];
  formulario : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private productoProvide: ProductoProvider,
    private fb : FormBuilder,
    public alertCtrl: AlertController,
    public toastCrl: ToastController
  ) {
      console.log(this.navParams.data);
      this.formulario = this.fb.group({
        codigo : this.navParams.data._id,
        descripcion : this.navParams.data.descripcion,
        direccion : this.navParams.data.direccion,
        estado : 'Aceptado',
        idomiciliario : localStorage.getItem('id'),
        categoria : this.navParams.data.categoria._id,
      });
  }

  ionViewDidLoad() {
    this.productoProvide.listar_categoria().subscribe(data=>{
      this.categorias = data;
      console.log("hola");
    }, err => {

    });
  }

  cancelar(){
    this.navCtrl.setRoot(TabsPage2);
  }

  async modificar(){
    if(this.formulario.value.nombre == '' || this.formulario.value.precio == '' || this.formulario.value.categoria == ''){
      const toast = this.toastCrl.create({
        message: 'Digite los datos',
        duration: 3000
      });
      (await toast).present();
    }else{
      const toast = this.toastCrl.create({
        message: 'ACTUALIZADO',
        duration: 1000
        //position: 'middle'
      });
      (await toast).present();
      this.productoProvide.modificar_producto(this.formulario.value, this.formulario.value.codigo).subscribe(data=>{
        if(data.ok == true){
          //this.navCtrl.setRoot(ProductosListarPage);
          this.navCtrl.setRoot(TabsPage2);
        }
      }, err => {
      })
    }
  }

}
