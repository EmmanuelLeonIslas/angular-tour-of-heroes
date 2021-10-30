import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        heroes.sort(function (a, b) {
          if (a.points < b.points) {
            return 1;
          }
          if (a.points > b.points) {
            return -1;
          }
          
          return 0;
        });
        this.heroes = heroes.slice(0, 4);
      });
  }
}