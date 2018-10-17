import { $, ElementFinder } from 'protractor';

export class CompletedOrderPage {
  private completedOrderLabel: ElementFinder;

  constructor () {
    this.completedOrderLabel = $('#center_column p[class="cheque-indent"] strong');
  }

  public async getCompletedOrderText(): Promise<string> {
    return this.completedOrderLabel.getText();
  }
}
