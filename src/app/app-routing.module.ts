import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "module-a", loadChildren: "./module-a/module-a.module#ModuleAModule" },
  { path: "module-b", loadChildren: "./module-b/module-b.module#ModuleBModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
