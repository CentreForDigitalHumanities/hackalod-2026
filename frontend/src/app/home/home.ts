import { Component } from "@angular/core";
import { LevelSelect } from "./level-select/level-select";

@Component({
    selector: "dh-home",
    templateUrl: "./home.html",
    styleUrl: "./home.scss",
    imports: [LevelSelect],
})
export class Home {

}
