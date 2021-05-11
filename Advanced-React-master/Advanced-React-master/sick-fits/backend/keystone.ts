/*eslint-disable */
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { ProductImage } from './schemas/ProductImage';

const databaseURL = process.env.DATABASE_URL;
const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password']
        //TODO: add in initial roles
    }
})
export default withAuth(config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        // Add data seeding here
    },
    lists: createSchema({
        // Schema items go in here
        User,
        Product,
        ProductImage,
    }),
    ui: {
        // TODO: Change this for roles
        isAccessAllowed: ({ session }) => {
            return !!session?.data
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id`
    })
}));
