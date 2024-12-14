import { Component } from "@angular/core";
import { ElementsTestComponent } from "./elements-test/elements-test.component";

@Component({
  selector: "app-root",
  imports: [ElementsTestComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
