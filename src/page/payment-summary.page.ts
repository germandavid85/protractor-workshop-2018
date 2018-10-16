import { browser, $, ElementFinder } from 'protractor';

export class PaymentSummaryPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();

    return await browser.sleep(3000);
  }
}
