import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  // {
  //   path: 'page1',
  //   loadChildren: () => import('./pages/page1/page1.module').then( m => m.Page1PageModule)
  // },
  // {
  //   path: 'page2',
  //   loadChildren: () => import('./pages/page2/page2.module').then( m => m.Page2PageModule)
  // },
  // {
  //   path: 'page3',
  //   loadChildren: () => import('./pages/page3/page3.module').then( m => m.Page3PageModule)
  // },
  // {
  //   path: 'page4',
  //   loadChildren: () => import('./pages/page4/page4.module').then( m => m.Page4PageModule)
  // },   {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'tab-summary',
  //   loadChildren: () => import('./pages/tab-summary/tab-summary.module').then( m => m.TabSummaryPageModule)
  // },
  // {
  //   path: 'tab-architecture',
  //   loadChildren: () => import('./pages/tab-architecture/tab-architecture.module').then( m => m.TabArchitecturePageModule)
  // },
  // {
  //   path: 'tab-model',
  //   loadChildren: () => import('./pages/tab-model/tab-model.module').then( m => m.TabModelPageModule)
  // },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
