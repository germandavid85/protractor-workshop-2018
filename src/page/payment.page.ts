import { $, ElementFinder, promise } from 'protractor';

export class PaymentPage {
  private payBankWireMenu: ElementFinder;

  constructor () {
    this.payBankWireMenu = $('.bankwire');
  }

  public payBankWire(): promise.Promise<void> {
    return this.payBankWireMenu.click();
  }
}
