import { Component, signal } from '@angular/core';

import { IKnowledge } from '../../interface/IKnowlegde.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/icon-knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/icon-knowledge/css.svg',
      alt: 'Ícone de conhecimento de CSS3'
    },
  
    {
      src: 'assets/icons/icon-knowledge/js.svg',
      alt: 'Ícone de conhecimento de JavaScript'
    },
    {
      src: 'assets/icons/icon-knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/icon-knowledge/database.svg',
      alt: 'Ícone de conhecimento de Banco de dados'
    },
    {
      src: 'assets/icons/icon-knowledge/git.svg',
      alt: 'Ícone de conhecimento de Git'
    },
    
  ])
}
