import { element, by, ElementFinder } from 'protractor';
import { PersonalInformation } from '../input-data-model';

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitleLabel: ElementFinder;
  private uploadFileInput: ElementFinder;

  constructor() {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.sendButton = element(by.id('submit'));
    this.pageTitleLabel = element(by.id('content')).element(by.tagName('h1'));
    this.uploadFileInput = element(by.id('photo'));
  }

  private sexOption(name: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${name}"]`));
  }

  private experienceOption(years: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }

  private professionOption(name: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${name}"]`));
  }

  private toolsOption(name: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${name}"]`));
  }

  private continentOption(name: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', name));
  }

  private seleniumCommandOption(name: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', name));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

  public async getFilename(): Promise<string> {
    const fullPath: string = await this.uploadFileInput.getAttribute('value');
    return fullPath.split(/(\\|\/)/g).pop();
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await this.experienceOption(form.experience).click();

    for (const name of form.profession) {
      await this.professionOption(name).click();
    }

    for (const name of form.tools) {
      await this.toolsOption(name).click();
    }

    await this.continentOption(form.continent).click();

    for (const name of form.commands) {
      await this.seleniumCommandOption(name).click();
    }
  }

  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.sendButton.click();
  }
}
