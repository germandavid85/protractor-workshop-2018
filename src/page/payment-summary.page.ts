import { $, ElementFinder, promise } from 'protractor';

export class PaymentSummaryPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation button[type="submit"]');
  }

  public confirmOrder(): promise.Promise<void> {
    return this.confirmOrderButton.click();
  }
}
