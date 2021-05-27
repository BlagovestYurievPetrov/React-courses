/* eslint-disable */
import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const OrderItem = list({

    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),

        price: integer(),
        photo: relationship({
            ref: 'ProductImage',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        quantity: integer(),
        order: relationship({
            ref: 'Order.items',
        }),
    },
});
