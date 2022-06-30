import routes from '../config/routes';
export default {
    npmClient: 'pnpm',
    presets: [require.resolve('@umijs/preset-vue')],
    routes,
};
