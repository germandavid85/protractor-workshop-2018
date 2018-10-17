import { browser, $, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.checkoutButton), 3000, 'checkout button');

    return this.checkoutButton.click();
  }
}
