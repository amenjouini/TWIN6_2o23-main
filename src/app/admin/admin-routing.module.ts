import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {
    path:'adduser',component:AdduserComponent
  },
  {
    path:'updateuser',component:UpdateprofileComponent
  },
  {
    path:'dash',component:DashbordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
