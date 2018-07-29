export default [{
    "url": "/index",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../pages/main/index');
        });
    },
    children: [{
        "url": "/index/message",
        "component": (): any => {
            return require.ensure([], () => {
                return require('../pages/message/index');
            });
        },
    }]
}];