import { Component, afterNextRender } from '@angular/core';
import { createChat } from '@n8n/chat';

@Component({
  selector: 'app-n8n-chat',
  imports: [],
  templateUrl: './n8n-chat.html',
  styleUrl: './n8n-chat.css',
})
export class N8nChat {
  constructor(){
    afterNextRender(() => {
      createChat({
        webhookUrl: 'https://nikadev.app.n8n.cloud/webhook/b03ac418-f186-496f-94b7-421a606bc5b7/chat',
        target: '#n8n-chat',
        mode: "window",
        defaultLanguage: 'en',
        showWelcomeScreen: false,
        initialMessages: ['გამარჯობა, რით შემიძლია დაგეხმაროთ?'],

        i18n: {
          en: {
          title: "თქვენი ასისტენტი",
          subtitle: 'AI რობოტი',
          inputPlaceholder: 'დაწერე თქვენი შეტყობინება აქ',
          footer: '',
          getStarted: 'ახალი საუბარი',
          closeButtonTooltip: 'დახურვა',
        }}

      })
    })
  }
}
