import {
    Component,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbCollapseModule, NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: "hl-menu",
    templateUrl: "./menu.html",
    styleUrl: "./menu.scss",
    imports: [
        CommonModule,
        RouterLink,
        FontAwesomeModule,
        NgbCollapseModule,
        RouterModule,
        NgbDropdownModule,
    ]
})
export class Menu {
    burgerActive = false;

    toggleBurger() {
        this.burgerActive = !this.burgerActive;
    }

}
