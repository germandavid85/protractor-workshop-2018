import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[title="Proceed to checkout"]');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
