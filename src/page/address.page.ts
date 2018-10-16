import { $, ElementFinder, promise } from 'protractor';

export class AddressPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('#center_column > form > p > button > span');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return  this.checkoutButton.click();
  }
}
