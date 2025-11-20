import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

const taskServiceToken = new InjectionToken<TaskService>('task-service-token');

bootstrapApplication(AppComponent, {
    providers: [{
        provide: taskServiceToken,
        useClass: TaskService
    }],
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent).catch((err) => console.error(err));
