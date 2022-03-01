import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assets',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'assets',
        loadChildren: () =>
          import('../app/features/assets/assets.module').then(
            (m) => m.AssetsModule
          ),
      },
      {
        path: 'request',
        loadChildren: () =>
          import('../app/features/request/request.module').then(
            (m) => m.RequestModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
