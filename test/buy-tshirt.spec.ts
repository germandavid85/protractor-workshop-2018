import { $, browser, by } from 'protractor';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));

    // click on t-shirts
    await $('#block_top_menu > ul > li:nth-child(3) > a').click();
    await(browser.sleep(3000));

    // open the first t-shirt pop up
    await $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
      .click();
    await(browser.sleep(3000));

    // pop up is inside a frame, so switch to the frame
    const frame = browser.findElement(by.tagName('iframe'));
    await browser.switchTo().frame(frame);

    // click on add to cart
    await $('#add_to_cart > button > span').click();
    await(browser.sleep(3000));
    await browser.switchTo().defaultContent();

    // click on proceed to checkout pop up
    // tslint:disable-next-line
    await $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span')
      .click();
    await(browser.sleep(3000));

    // click on proceed to checkout
    // tslint:disable-next-line
    await $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span').click();
    await(browser.sleep(3000));

    // fill credentials form
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();
    await(browser.sleep(3000));

    // click on confirm order
    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    // accept terms
    await $('#cgv').click();
    await(browser.sleep(3000));

    // click on confirm order
    await $('#form > p > button > span').click();
    await(browser.sleep(3000));

    // click on payment method
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));

    // confirm order
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    // assert final message
    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
