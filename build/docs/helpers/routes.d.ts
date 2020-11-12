declare const routes: ({
    path: string;
    component: string;
    menu: string;
    exact: boolean;
    link?: undefined;
} | {
    link: string;
    path: string;
    component: string;
    menu: string;
    exact?: undefined;
})[];
export default routes;
