import { bootstrapApplication } from '@angular/platform-browser';
import {
    HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { tap } from 'rxjs';

const loggingInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
    // const req = request.clone({
    //     headers: request.headers.set('X-Custom-Header', 'Testing')
    // });
  console.log('[Outgoing Request]', request);
  return next(request).pipe(tap({
    next: event => {
        if (event.type === HttpEventType.Response) {
            console.log('[Incoming Response]', event.status, event.body);
        }
    }
  }));
};

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
