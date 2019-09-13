import { Injectable } from '@angular/core';

@Injectable()

export class LinkHelper {
	public homePage() {
		return '';
  }

  public contactPage() {
		return '/contact';
  }

  public tShirtPage() {
		return '/t-shirts';
  }
}
