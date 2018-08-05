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
    }, {
            "url": "/index/session",
            "component": (): any => {
                return require.ensure([], () => {
                    return require('../pages/session/index');
                });
            },
    }]
}, {
    "url": "/search",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../pages/search/index');
        });
    }
}];