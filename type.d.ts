import type { ImageSourcePropType } from 'react-native';

declare global {
    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }

    interface AppTab {
        name: string;
        title: string;
        icon: ImageSourcePropType;
    }

    interface UpcomingSubscription {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        price: number;
        currency: string;
        daysLeft: number;
    }

    interface Subscription {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        plan: string;
        category: string;
        paymentMethod: string;
        status: string;
        startDate: string;
        price: number;
        currency: string;
        billing: string;
        renewalDate: string;
        color: string;
    }
}

export { };

