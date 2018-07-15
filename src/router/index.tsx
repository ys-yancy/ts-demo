export default [{
    "url": "/index",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../components/Main/index');
        });
    },
    children: [{
        "url": "/index/about",
        "component": (): any => {
            return require.ensure([], () => {
                return require('../components/Header/index');
            });
        },
    }]
}];