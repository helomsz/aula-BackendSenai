import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component';
import { AutoresComponent } from './pages/authors.component/authors.component';
import { EditorasComponent } from './pages/editoras.component/editoras.component';
import { LivrosComponent } from './pages/livros.component/livros.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'autores', component: AutoresComponent},
    {path: 'editoras', component: EditorasComponent},
    {path: 'livros', component: LivrosComponent}
];
