import { browser } from 'protractor';
import {
  ClothingThumbnailPage,
  ProductAddedModalPage,
  OrderSummaryPage,
  SignInPage,
  AddressPage,
  ShippingPage,
  PaymentPage,
  PaymentSummaryPage,
  CompletedOrderPage
} from '../src/page';
import { Clothes } from '../src/enums';
import { UserSignInDataModel } from '../src/input-data-model';

describe('Buy a t-shirt', () => {
  const adminSignIn: UserSignInDataModel =
    new UserSignInDataModel('aperdomobo@gmail.com', 'WorkshopProtractor');

  const clothingThumbnailPage: ClothingThumbnailPage = new ClothingThumbnailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInPage: SignInPage = new SignInPage();
  const addressPage: AddressPage = new AddressPage();
  const shippingPage: ShippingPage = new ShippingPage();
  const paymentPage: PaymentPage = new PaymentPage();
  const paymentSummaryPage: PaymentSummaryPage = new PaymentSummaryPage();
  const completedOrderPage: CompletedOrderPage = new CompletedOrderPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(5000));

    await clothingThumbnailPage.addClothesToCart(Clothes.FADED_SHORT_SLEEVE_T_SHIRTS);

    await productAddedModalPage.proceedToCheckout();

    await orderSummaryPage.proceedToCheckout();

    await signInPage.signIn(adminSignIn);

    await addressPage.proceedToCheckout();

    await shippingPage.acceptTerms();

    await shippingPage.proceedToCheckout();

    await paymentPage.payBankWire();

    await paymentSummaryPage.confirmOrder();

    await expect(completedOrderPage.getCompletedOrderText())
      .toBe('Your order on My Store is complete.');
  });
});
