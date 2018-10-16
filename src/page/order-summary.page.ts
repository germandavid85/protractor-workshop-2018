import { browser, $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private checkoutButton: ElementFinder;

  constructor () {
    // tslint:disable-next-line
    this.checkoutButton = $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();

    return await browser.sleep(3000);
  }
}
