# api-assignment

Payment Request concepts and usage
Many problems related to online shopping-cart abandonment can be traced to checkout forms, which can be difficult and time consuming to fill out and often require multiple steps to complete. The Payment Request API is meant to reduce the number of steps needed to complete a payment online, potentially doing away with checkout forms. It aims to make the checkout process easier, by having payment apps store a user's details, which are then passed along to a merchant, hopefully without requiring an HTML form.

To request a payment, a web page creates a PaymentRequest object in response to a user action that initiates a payment, such as clicking a "Purchase" button. The PaymentRequest allows the web page to exchange information with the user agent while the user provides input to complete the transaction.


Interfaces
PaymentAddress
An object that contains address information; used for billing and shipping addresses, for example.

PaymentRequest
An object that provides the API for creating and managing the user agent's payment interface.

PaymentRequestEvent
An event delivered to a payment handler when a PaymentRequest is made.

PaymentRequestUpdateEvent
Enables the web page to update the details of the payment request in response to a user action.

PaymentMethodChangeEvent
Represents the user changing payment instrument (e.g., switching from one payment method to another).

PaymentResponse
An object returned after the user selects a payment method and approves a payment request.

MerchantValidationEvent
Represents the browser requiring the merchant (website) to validate themselves as allowed to use a particular payment handler (e.g., registered as allowed to use Apple Pay).

Dictionaries
AddressErrors
A dictionary containing strings providing descriptive explanations of any errors in any PaymentAddress entries which have errors.

PaymentDetailsUpdate
An object describing changes that need to be made to the payment details in the event that the server needs to update information following the instantiation of the payment interface but before the user begins to interact with it.

Specifications
Specification
Payment Request API
Payment Method Identifiers



