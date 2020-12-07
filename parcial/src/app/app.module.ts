import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { ProductosListarPage } from '../pages/productos-listar/productos-listar';
import { ProductosCrearPage } from '../pages/productos-crear/productos-crear';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../inicio/login/login';
import { RegistroPage } from '../inicio/registro/registro';
import { ListaPedidosPage } from '../pages-domi/lista-pedidos/lista-pedidos';
import { DetallesPage } from '../pages-domi/detalles/detalles';
import { ListacepPage } from '../pages-domi/listacep/listacep';
import { TabsPage2 } from '../pages-domi/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductoProvider } from '../providers/producto/producto';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ProductoModificarPage } from '../pages/producto-modificar/producto-modificar';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProductosListarPage,
    ProductosCrearPage,
    ProductoModificarPage,
    LoginPage, RegistroPage,
    ListaPedidosPage, DetallesPage, ListacepPage, TabsPage2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProductosListarPage,
    ProductosCrearPage,
    ProductoModificarPage,
    LoginPage, RegistroPage,
    ListaPedidosPage, DetallesPage, ListacepPage, TabsPage2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
