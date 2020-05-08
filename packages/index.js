import Search from './search';
import SearchItem from './search-item';

const components = [Search, SearchItem];

const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Search,
    SearchItem
};
