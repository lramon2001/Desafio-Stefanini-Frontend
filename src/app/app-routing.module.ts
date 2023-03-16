import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { StefamonComponent } from './modules/stefamon/stefamon.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { BatalhaComponent } from './modules/batalha/batalha.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'batalha', component: BatalhaComponent },
  { path: 'stefamon', component: StefamonComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
