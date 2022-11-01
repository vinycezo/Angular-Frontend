import {  NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { CitationListComponent } from "./citation-list/citation-list.component"; 
import { AuthGuard } from "./guards/auth.gards";
import { LangingPageComponent } from "./langing-page/langing-page.component";
import { NewCitationComponent } from "./new-citation/new-citation.component";
import { SingleCitationComponent } from "./single-citation/single-citation.component";
import { LogingComponent } from "./login-component/login-component.component";
import { RegisterComponentComponent } from "./register-component/register-component.component";
import { CitationAuteurComponent } from "./citation-auteur/citation-auteur.component";

const routes: Routes=[
   {path:'', component: LangingPageComponent,canActivate: [AuthGuard] },
   { path:'maCitation', component: CitationListComponent, canActivate: [AuthGuard]},
   {path:'create', component:NewCitationComponent, canActivate: [AuthGuard]},
   {path:'maCitation/id/:id', component:SingleCitationComponent, canActivate: [AuthGuard]},
   {path:'maCitation/name/:name', component:CitationAuteurComponent, canActivate: [AuthGuard]},
   {path:'auth/login', component: LogingComponent},
   {path:'auth/register', component:RegisterComponentComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}