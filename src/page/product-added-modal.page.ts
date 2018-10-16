import { browser, $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();

    return await browser.sleep(3000);
  }
}
