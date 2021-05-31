import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
    return !!session;
}

const generatedPermissions = Object.fromEntries(
    permissionsList.map((permission) => [
        permission,
        function ({ session }: ListAccessArgs) {
            return !!session?.data.role?.[permission];
        },
    ])
);

export const permissions = {
    ...generatedPermissions,
};

// rules
export const rules = {
    canManageProducts({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        if (permissions.canManageProducts({ session })) {
            return true;
        }
        return { user: { id: session.itemId } };
    },
    canReadProducts({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        if (permissions.canManageProducts({ session })) {
            return true;
        }
        return { status: 'AVAILABLE' };
    },
    canOrder({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        if (permissions.canManageCart({ session })) {
            return true;
        }
        return { user: { id: session.itemId } };
    },
    canManageOrderItems({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        if (permissions.canManageCart({ session })) {
            return true;
        }
        return { order: { user: { id: session.itemId } } };
    },
    canManageUsers({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        if (permissions.canManageUsers({ session })) {
            return true;
        }
        // they can only update themselves
        return { id: session.itemId };
    },
};
