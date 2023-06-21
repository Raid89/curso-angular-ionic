import { Component } from '@angular/core';
import { MenuInterface } from 'app/interfaces/menu-interface';
import DataNavBar from 'app/json/nav-bar.json'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public dataNavBar:MenuInterface[] = DataNavBar;
}
