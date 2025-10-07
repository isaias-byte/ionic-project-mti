import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'summary', // Route for the first tab
        loadChildren: () => import('../pages/tab-summary/tab-summary.module').then(m => m.TabSummaryPageModule)
      },
      {
        path: 'architecture', // Route for the second tab
        loadChildren: () => import('../pages/tab-architecture/tab-architecture.module').then(m => m.TabArchitecturePageModule)
      },
      {
        path: 'model', // Route for the third tab
        loadChildren: () => import('../pages/tab-model/tab-model.module').then(m => m.TabModelPageModule)
      },
      {
        path: '', // Default redirect
        redirectTo: '/home/summary',
        pathMatch: 'full'
      }
      
    ]
  },

  {
    path: '', // Default app redirect
    redirectTo: '/home/summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
