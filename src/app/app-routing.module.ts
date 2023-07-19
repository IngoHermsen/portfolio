import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './components/policy/legal-notice/legal-notice.component';
import { DataProtectionComponent } from './components/policy/data-protection/data-protection.component';
import { MainComponent } from './components/main/main.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',

};

const routes: Routes = [
  { path: '', redirectTo: '/main#title', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
