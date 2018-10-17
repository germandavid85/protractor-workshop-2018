import { browser, $$, ElementArrayFinder, by } from 'protractor';

export class ClothingThumbnailPage {
  private addToCartButtons: ElementArrayFinder;

  constructor () {
    this.addToCartButtons = $$('[title="Add to cart"]');
  }

  public async addClothesToCart(clothesName: string): Promise<void> {
    const tShirt = browser.findElement(by.css(`#homefeatured img[title="${clothesName}"]`));
    await browser.actions().mouseMove(tShirt).perform();

    return this.addToCartButtons.first().click();
  }
}
