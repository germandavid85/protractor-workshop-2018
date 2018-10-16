import { $, ElementFinder, promise } from 'protractor';

export class PaymentPage {
  private payBankWireMenu: ElementFinder;

  constructor () {
    this.payBankWireMenu = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public payBankWire(): promise.Promise<void> {
    return this.payBankWireMenu.click();
  }
}
