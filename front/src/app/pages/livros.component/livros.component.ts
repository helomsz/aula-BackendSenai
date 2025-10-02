import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';
import { AuthService } from '../../services/auth.services';


@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
    private svc = inject(LivrosService);
  private auth = inject(AuthService);   //Ver o token
  livros = signal<Livro[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  constructor() {
    console.log("Token de acesso: ", this.auth.token());

    this.svc.listar().subscribe({
      next: (data) => { this.livros.set(data); this.carregando.set(false); },
      error: () => { this.erro.set('Falha ao carregar livros'); this.carregando.set(false); }
    });
  }
}