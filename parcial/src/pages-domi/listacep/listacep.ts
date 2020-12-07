import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  AlertController,
  ToastController
} from "ionic-angular";
import { ProductoProvider } from "../../providers/producto/producto";
import { Producto } from "../../modelo/producto.modelo";
import { DetallesPage } from "../detalles/detalles";

/**
 * Generated class for the ListacepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacep',
  templateUrl: 'listacep.html',
})
export class ListacepPage {
  productos: Array<Producto> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productoProvider: ProductoProvider,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.productoProvider.listacep(localStorage.getItem('id')).subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  editar(producto) {
    let productoModal = this.modalCtrl.create(DetallesPage, producto);
    productoModal.present();
  }

  async salir(){
    const toast = this.toastCrl.create({
      message: 'Cerrando Sesión...',
      duration: 3000
    });
    (await toast).present();
    window.location.reload();
  }

}
