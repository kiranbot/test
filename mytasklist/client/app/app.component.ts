import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',                       //<<<===make sure this matches with custom HTML tag used in index.html
  templateUrl: `app.component.html`,
  providers:[TaskService]

})
export class AppComponent {}