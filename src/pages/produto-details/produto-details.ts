import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';

/**
 * Generated class for the ProdutoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-details',
  templateUrl: 'produto-details.html',
})
export class ProdutoDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  item: ProdutoDTO;
  ionViewDidLoad() {
    this.item = {
      id: "1",
      nome: "Mouse",
      preco: 80.59
    }
  }

}
