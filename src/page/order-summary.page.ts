import { $, ElementFinder, promise } from 'protractor';

export class OrderSummaryPage {
  private checkoutButton: ElementFinder;

  constructor () {
    // tslint:disable-next-line
    this.checkoutButton = $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
