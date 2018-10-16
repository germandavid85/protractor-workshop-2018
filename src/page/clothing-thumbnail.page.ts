import { browser, $, ElementFinder, by } from 'protractor';

export class ClothingThumbnailPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('[title="Add to cart"]');
  }

  public async addClothesToCart(clothesName: string): Promise<void> {
    const tShirt = browser.findElement(by.css(`img[title="${clothesName}"]`));
    await browser.actions().mouseMove(tShirt).perform();
    await(browser.sleep(3000));

    await this.addToCartButton.click();

    return browser.sleep(3000);
  }
}
