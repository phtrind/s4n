import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';

const routes: Routes = [
  { path: '', component: ProfileContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
