import { $, ElementFinder, promise } from 'protractor';

export class AddressPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[name="processAddress"]');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return  this.checkoutButton.click();
  }
}
