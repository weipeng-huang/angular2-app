import { Component, OnInit} from '@angular/core';

export class HeroObject {
  id: number;
  name: string;
}

const HEROES: HeroObject[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private greeting: string;
  private title: string;
  private heroArray: string[];
  private myHero: string;

  constructor() {
    this.title = 'Tour of heroes';
    this.heroArray = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.myHero = this.heroArray[0];
  }

  heroes= HEROES;

  selectedHero: HeroObject;

  onSelect(hero: HeroObject): void {
    this.selectedHero = hero;
  }


  // heroInstance: HeroObject = {
  //   id: 1,
  //   name: 'Tom'
  // }

  ngOnInit() {

  }
}
