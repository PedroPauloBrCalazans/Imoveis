import { Component, OnInit } from '@angular/core';
import { Produto } from './produtos/produto';
import { ProdutoService } from './produtos/produtos.services';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html'
})
export class ComprarComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[]; 

  ngOnInit() {
    this.produtoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }
}
