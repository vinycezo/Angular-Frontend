import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Citation } from '../models/citation.model';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-new-citation',
  templateUrl: './new-citation.component.html',
  styleUrls: ['./new-citation.component.css']
})
export class NewCitationComponent implements OnInit {
  citationForm!:FormGroup;
  citationPreview$!: Observable<Citation>;

  constructor(private formBuilder: FormBuilder, private citationservice: CitationService, private router: Router) { }

  ngOnInit(): void {
    this.citationForm=this.formBuilder.group({
      libelle:[null, Validators.required],
      oeuvre:[null],
      auteur:[null, Validators.required],
    });

    this.citationPreview$=this.citationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        like:0
      })) 
    )
 }
  onSubmitForm() {
   this.citationservice.addFaceSnap(this.citationForm.value).pipe(
    tap(()=>this.router.navigateByUrl('/maCitation'))
   ).subscribe();
  }  

}
