import { browser, $, ElementFinder } from 'protractor';

export class ShippingPage {
  private checkoutButton: ElementFinder;
  private acceptTermsCheck: ElementFinder;

  constructor () {
    this.checkoutButton = $('#form > p > button > span');
    this.acceptTermsCheck = $('#cgv');
  }

  public async acceptTerms(): Promise<void> {
    await this.acceptTermsCheck.click();

    return await browser.sleep(3000);
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();

    return await browser.sleep(3000);
  }
}
