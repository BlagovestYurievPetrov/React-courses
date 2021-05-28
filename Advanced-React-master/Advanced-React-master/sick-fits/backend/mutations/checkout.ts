/* eslint-disable */
import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { CartItem } from '../schemas/CartItem';
import { Session } from '../types';

import { CartItemCreateInput, OrderCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';

const graphql = String.raw;

async function checkout(
    root: any,
    { token }: { token: string },
    context: KeystoneContext
): Promise<OrderCreateInput> {
    const userId = context.session.itemId;
    if (!userId) {
        throw new Error('Sign in to create order');
    }
    const user = await context.lists.User.findOne({
        where: {
            id: userId
        },
        resolveFields: graphql`
        id
        name
        email
        cart {
id
            quantity
            product {
                name
                price
                description
                id
                photo {
                    id
                    image {
                        id
                        publicUrlTransformed
                    }
                }
            }
        }
        `

    });
    console.dir(user, { depth: null });

    const cartItems = user.cart.filter(cartItem => cartItem.product);

    const amount = cartItems.reduce(function (tally: number, cartItem: CartItemCreateInput) {
        return tally + cartItem.quantity * cartItem.product.price;
    }, 0);
    console.log(amount);

    const charge = await stripeConfig.paymentIntents.create({
        amount,
        currency: 'BGN',
        confirm: true,
        payment_method: token,
    }).catch(err => {
        console.log(err);
        throw new Error(err.message);
    })
    console.log(charge);
}

export default checkout;
