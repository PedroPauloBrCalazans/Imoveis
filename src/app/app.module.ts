import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { AlugarComponent } from './negocio/alugar/alugar.component';
import { ComprarComponent } from './negocio/comprar/comprar.component';
import { AnunciarComponent } from './negocio/anunciar/anunciar.component';
import { from } from 'rxjs';
import { rootRoutesConfig } from './app.routes';
import { ProdutoService } from './negocio/comprar/produtos/produtos.services';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    AlugarComponent,
    ComprarComponent,
    AnunciarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    [RouterModule.forRoot(rootRoutesConfig, {useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
