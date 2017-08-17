import { Component } from '@angular/core';
import { IPerson } from '../interfaces/interfaces';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: '../templates/profile.template.html',
})
export class Profile  {
  person: IPerson;
}
