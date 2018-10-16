import { $, ElementFinder, promise } from 'protractor';

export class ShippingPage {
  private checkoutButton: ElementFinder;
  private acceptTermsCheck: ElementFinder;

  constructor () {
    this.checkoutButton = $('#form > p > button > span');
    this.acceptTermsCheck = $('#cgv');
  }

  public acceptTerms(): promise.Promise<void> {
    return this.acceptTermsCheck.click();
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
