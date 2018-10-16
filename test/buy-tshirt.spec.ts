import { $, browser, by } from 'protractor';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(5000));

    const tShirt = browser.findElement(by.css('img[title="Faded Short Sleeve T-shirts"]'));
    await browser.actions().mouseMove(tShirt).perform();
    await(browser.sleep(3000));

    await $('[title="Add to cart"]').click();
    await(browser.sleep(3000));

    // click on proceed to checkout pop up
    await $('[title="Proceed to checkout"]').click();
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
