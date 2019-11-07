import { Injectable } from '@angular/core';

@Injectable()

export class LinkHelper {
	public homePage() {
		return '';
  }

  public contactPage() {
		return '/contact';
  }

  public pricingPage() {
		return '/pricing';
  }

  public aboutPage() {
    return `/about`;
  }

  public productPage(id) {
    return `/product/${id}`;
  }
}
