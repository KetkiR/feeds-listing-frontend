import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsListingComponent } from './feeds-listing/feeds-listing.component';


const routes: Routes = [
  { path: '', redirectTo: 'feeds', pathMatch: 'full'},
  { path: 'feeds', component: FeedsListingComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
