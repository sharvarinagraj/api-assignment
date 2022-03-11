
var checkoutButton = document.getElementById('checkout-button');
var introPanel = document.getElementById('intro');
var successPanel = document.getElementById('success');
var legacyPanel = document.getElementById('legacy');

// Feature detection
if (window.PaymentRequest) {

    // Payment Request is supported in this browser, so we can proceed to use it

    checkoutButton.addEventListener('click', function () {
        // Every click on the checkout button should use a new instance of PaymentRequest 
        // object, because PaymentRequest.show() can be called only once per instance.
        var request = new PaymentRequest(buildSupportedPaymentMethodData(),
            buildShoppingCartDetails());

        request.show().then(function (paymentResponse) {
            // Here we would process the payment. For this demo, simulate immediate success:
            paymentResponse.complete('success')
                .then(function () {
                    // For demo purposes:
                    introPanel.style.display = 'none';
                    successPanel.style.display = 'block';
                });

        }).catch(function (error) {
            // Handle cancelled or failed payment. For demo purposes:
            introPanel.style.display = 'none';
            legacyPanel.style.display = 'block';

        });
    });
} else {

    // Payment Request is unsupported
    checkoutButton.addEventListener('click', function () {
        // For demo purposes:
        introPanel.style.display = 'none';
        legacyPanel.style.display = 'block';
    });
}

function buildSupportedPaymentMethodData() {
    // Example supported payment methods:
    return [{
        supportedMethods: 'basic-card',
        data: {
            supportedNetworks: ['visa', 'mastercard'],
            supportedTypes: ['debit', 'credit']
        }
    }];
}

function buildShoppingCartDetails() {
    // Hardcoded for demo purposes:
    return {
        id: 'order-123',
        displayItems: [
            {
                label: 'Example item',
                amount: { currency: 'CSD', value: '1.00' }
            }
        ],
        total: {
            label: 'Total',
            amount: { currency: 'CSD', value: '1.00' }
        }
    };
}
