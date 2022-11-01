import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Citation } from '../models/citation.model';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-citation-auteur',
  templateUrl: './citation-auteur.component.html',
  styleUrls: ['./citation-auteur.component.css']
})
export class CitationAuteurComponent implements OnInit {

 citation!: Citation;
  citation$!:Observable<Citation[]>
  constructor(private citationservice: CitationService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const name= this.route.snapshot.params['name'];
    this.citation$ = this.citationservice.getCitationByName(name)
  }

}
