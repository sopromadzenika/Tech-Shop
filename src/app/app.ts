import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { N8nChat } from './n8n/n8n-chat/n8n-chat';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, N8nChat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang-project');
}
