import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Citation } from '../models/citation.model';
import { CitationService } from '../services/citation.service';
@Component({
  selector: 'app-single-citation',
  templateUrl: './single-citation.component.html',
  styleUrls: ['./single-citation.component.css']
})
export class SingleCitationComponent implements OnInit {

 @Input() citation!: Citation;
 buttontxt!:string;
 citation$!:Observable<Citation>
constructor(private citationservice: CitationService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.buttontxt = "like";
    const citationId = this.route.snapshot.params['id'];
    this.citation$ = this.citationservice.getCitationById(citationId);
  }


   

  onlike(citationId: any){
   if(this.buttontxt==="like"){
     this.citation$=this.citationservice.likecitationById(citationId, 'like').pipe(
      tap(()=> this.buttontxt="dislike" )
     )
     
    }
    else{
    this.citation$=this.citationservice.likecitationById(citationId, 'dislike').pipe(
      tap(()=> this.buttontxt="like")
    )
      
    }

  }

}




