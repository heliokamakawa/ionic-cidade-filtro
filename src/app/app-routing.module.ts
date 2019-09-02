import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'estado-salvar', loadChildren: './estado/salvar/salvar.module#SalvarPageModule' },
  { path: 'estado-listar', loadChildren: './estado/listar/listar.module#ListarPageModule' },
  { path: 'estado-filtro', loadChildren: './estado/filtro/filtro.module#FiltroPageModule' },
  { path: 'cidade-salvar', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'cidade-salvar/:id', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './cidade/listar/listar.module#ListarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
