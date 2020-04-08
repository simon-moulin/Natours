/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_SloY6by2WZi5xTUA8YS1XPLH00rcaf4GMX');

export const bookTour = async tourId => {
    // 1) Get checkout session from API
    try {
        const session = await axios(
            `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
        );
        // 2) Create checkout form + charge credit card

        await stripe.redirectToCheckout({
            sessionId : session.data.session.id
        })
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }

};
