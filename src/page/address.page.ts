import { browser, $, ElementFinder } from 'protractor';

export class AddressPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('#center_column > form > p > button > span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();

    return await browser.sleep(3000);
  }
}
