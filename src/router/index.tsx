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
    }, {
        "url": "/index/condition",
        "component": (): any => {
            return require.ensure([], () => {
                return require('../pages/condition/index');
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
}, {
    "url": "/chat",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../pages/chat/index');
        });
    }
}];