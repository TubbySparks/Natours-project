import Stripe from 'stripe';
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51P5HB5FAKqeg6Vhr1NS8EJVCmw0dcrwhYDNKIBJOxeCjmjQgFa43dKNfnWb48B7PLZwqZLjV8urfiembm0bEBCOH007tBO8CPn'
);

export const bookTour = async (tourId) => {
  try {
    // 1)  Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // console.log(session);

    // 2)  Create checkout form + charge credit card

    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });

    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
