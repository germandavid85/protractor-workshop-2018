import { browser, $, ElementFinder } from 'protractor';

export class PaymentPage {
  private payBankWireMenu: ElementFinder;

  constructor () {
    this.payBankWireMenu = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payBankWire(): Promise<void> {
    await this.payBankWireMenu.click();

    return await browser.sleep(3000);
  }
}
