import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Citation } from '../models/citation.model';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-citation-list',
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.css']
})
export class CitationListComponent implements OnInit {
  

maCitation!: Citation[];
maCitation$!:Observable<Citation[]>;

  constructor(private citationservice: CitationService) { }

  ngOnInit(): void {
   // this.maCitation= this.citationservice.getAllCitation();
   this.maCitation$= this.citationservice.getAllCitation()
  }   

}
