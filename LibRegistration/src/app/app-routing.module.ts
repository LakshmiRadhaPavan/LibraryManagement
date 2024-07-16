import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuRegistrationComponent } from './stu-registration/stu-registration.component';

const routes: Routes = [
  { path: '', component: StuRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
