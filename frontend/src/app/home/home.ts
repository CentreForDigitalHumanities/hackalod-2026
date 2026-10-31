import { Component } from "@angular/core";
import { LevelSelect } from "./level-select/level-select";
import { RouterLink } from "@angular/router";

@Component({
    selector: "dh-home",
    templateUrl: "./home.html",
    styleUrl: "./home.scss",
    imports: [LevelSelect, RouterLink],
})
export class Home {

}
