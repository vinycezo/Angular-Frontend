import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Citation } from '../models/citation.model';

@Injectable(
    {providedIn:'root'}
)

export class CitationService{
  constructor(private http:HttpClient){}


    getAllCitation(): Observable<Citation[]>{
      return this.http.get<Citation[]>('http://localhost:3000/citations');
    } 



    getCitationById(citationId: string): Observable<Citation> {
      return this.http.get<Citation>(`http://localhost:3000/citations/id/${citationId}`)
     
    }

    getCitationByName(name:string): Observable<Citation[]>{
      return this.http.get<Citation[]>(`http://localhost:3000/citations/name/${name}`)
    }


    
    likecitationById(citationId: string, likeType: 'like' | 'dislike'): Observable<Citation> {
      return this.getCitationById(citationId).pipe(
        map(citation=>({
          ...citation,
          like: citation.like + (likeType === 'like' ? 1 : -1)
        })),

        switchMap(updatedCitation=> this.http.put<Citation>(`http://localhost:3000/citations/${citationId}`, updatedCitation))
      )
    }

    addFaceSnap(formValue: { libelle: string, oeuvre: string, auteur: string, like:number }): Observable<Citation>{
      return this.getAllCitation().pipe(
        map(() => ({
          ...formValue,
          like:0
        })),
        switchMap(newCitation => this.http.post<Citation>('http://localhost:3000/citations', newCitation))
        )
    }
}