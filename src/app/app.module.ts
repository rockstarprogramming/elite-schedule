import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, TeamHomePage, StandingsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
    TournamentsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
    TournamentsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
