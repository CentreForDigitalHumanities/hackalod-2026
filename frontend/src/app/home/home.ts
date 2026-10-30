import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LevelSelect } from "./level-select/level-select";

@Component({
    selector: "dh-home",
    templateUrl: "./home.html",
    styleUrl: "./home.scss",
    imports: [RouterLink, LevelSelect],
})
export class Home {

}
