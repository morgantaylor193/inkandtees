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

  public apparelPage() {
    return `/apparel`;
  }

  public apparelBrandPage(id) {
    return `/apparel/${id}`;
  }
}
