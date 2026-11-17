import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('End-to-End Checkout Flow', () => {
  test('completes full purchase journey from login to order confirmation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.addItemToCart('sauce-labs-bike-light');
    await inventoryPage.expectCartCount(2);
    await inventoryPage.goToCart();

    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillShippingDetails('Jane', 'Doe', '55125');
    await checkoutPage.completeOrder();
    await checkoutPage.expectOrderConfirmed();
  });
});
