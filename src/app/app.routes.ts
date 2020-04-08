import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { AlugarComponent } from './negocio/alugar/alugar.component';
import { ComprarComponent } from './negocio/comprar/comprar.component';


export const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobreNos', component: SobreComponent },
    { path: 'contato', component: ContatoComponent},
    { path: 'alugar', component: AlugarComponent},
    { path: 'comprar', component: ComprarComponent},
    { path: 'comprar-detalhe/:id', component: ComprarComponent},
];