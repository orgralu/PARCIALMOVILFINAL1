import { Component } from '@angular/core';
import { ListaPedidosPage } from '../lista-pedidos/lista-pedidos';
import { ListacepPage } from '../listacep/listacep';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage2 {

  tab1Root = ListaPedidosPage;
  tab2Root = ListacepPage;

  constructor() {

  }
}
