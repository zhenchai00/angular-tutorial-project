import {
  Component,
  inject,
  input,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  RouterOutlet,
  RouterLink,
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
 userName = input.required<string>();
}

export const resolverUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find((u) => u.id === activatedRoute.params['userId'])
      ?.name || '';
  return userName;
};

export const resolverTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return `Tasks for ${resolverUserName(activatedRoute, routerState)}`;
};