import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Citation } from '../models/citation.model';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-citation-component',
  templateUrl: './citation-component.component.html',
  styleUrls: ['./citation-component.component.css']
})
export class CitationComponentComponent implements OnInit {
@Input() citation!: Citation;
buttontxt!:string;
constructor(private citationservice: CitationService, private router: Router) {}


  ngOnInit() {
    this.buttontxt = "like";
  }


  

  

  onView() {
   return this.router.navigateByUrl(`maCitation/id/${this.citation._id}`)
  }
}
