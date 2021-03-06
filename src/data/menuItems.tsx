import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems:MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'TextInputs',
        icon: 'pencil-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Pull to Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'SectionListScreen'
    },
    {
        name: 'Modals',
        icon: 'albums-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Infinite Scroll',
        icon: 'infinite-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component: 'SlidesScreen'
    },
];