import { $, ElementFinder, promise } from 'protractor';

export class OrderSummaryPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('.cart_navigation [title="Proceed to checkout"]');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
