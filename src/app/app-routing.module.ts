import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {'path':'add','component':AddComponent},
  {'path':'list','component':ListComponent},
  {'path':'','component':ListComponent},
  {'path':'edit/:id','component':EditComponent},
  {'path':'detail/:id','component':DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
