import { CanDeactivateFn } from '@angular/router';

export const confirmGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  return component.confirmOut();
};
