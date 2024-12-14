import { createCustomElement } from "@angular/elements";
import {
  bootstrapApplication,
  createApplication,
} from "@angular/platform-browser";
import { ElementsTestComponent } from "./app/elements-test/elements-test.component";
import { provideHttpClient } from "@angular/common/http";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

const dev = false;

if (dev) {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
} else {
  (async () => {
    const app = await createApplication({
      providers: [provideHttpClient()],
    });

    const elementsTestComponent = createCustomElement(ElementsTestComponent, {
      injector: app.injector,
    });

    customElements.define("elements-test", elementsTestComponent);
  })();
}
