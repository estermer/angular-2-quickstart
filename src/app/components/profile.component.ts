import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: './templates/profile.template.html',
})
export class Profile  {
  person: person;
}

interface person {
  name: () => string;
  avatarUrl: () => string;
}
