import { registerMicroApps } from 'qiankun';

const getActiveRule = (hash) => (location) => location.hash.includes(hash);
registerMicroApps([{
    name: 'micro-child-app',
    entry: '//localhost:8080',
    container: "#child",
    activeRule: getActiveRule('#/index/app-child'),
    // 这里也可以直接写 activeRule: '#/app-hash'，但是如果主应用是 history 模式或者主应用部署在非根目录，这样写不会生效。
}, ]);
