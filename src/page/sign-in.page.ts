import { $, ElementFinder } from 'protractor';
import { UserSignInDataModel } from '../input-data-model';

export class SignInPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private submitButton: ElementFinder;

  constructor () {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.submitButton = $('#SubmitLogin');
  }

  public async signIn(useSignInDataModel: UserSignInDataModel): Promise<void> {
    await this.emailInput.sendKeys(useSignInDataModel.email);
    await this.passwordInput.sendKeys(useSignInDataModel.password);

    return this.submitButton.click();
  }
}
