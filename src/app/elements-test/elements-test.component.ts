import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
  ResourceStatus,
  Signal,
  viewChild,
} from "@angular/core";
import { rxResource, toSignal } from "@angular/core/rxjs-interop";
import { delay, interval, map } from "rxjs";

@Component({
  selector: "app-elements-test",
  imports: [JsonPipe],
  templateUrl: "./elements-test.component.html",
  styleUrl: "./elements-test.component.scss",
})
export class ElementsTestComponent implements OnInit {
  title = input("World!");
  interval = toSignal(interval(1000), { initialValue: 0 });
  dialog: Signal<ElementRef<HTMLDialogElement> | undefined> = viewChild(
    "dialog",
    {
      read: ElementRef,
    }
  );
  http = inject(HttpClient);
  status = ResourceStatus;
  apiData = rxResource({
    loader: () =>
      this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos").pipe(
        delay(3000),
        map((data) => data.slice(0, 3))
      ),
  });

  ngOnInit(): void {
    this.dialog()?.nativeElement.showModal();
  }
}
