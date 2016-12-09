import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TournamentsPage } from '../pages';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  constructor(public nav: NavController) {}

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

  ionViewDidLoad() {
    console.log('Hello MyTeamsPage Page');
  }

}
