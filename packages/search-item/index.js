import SearchItem from './src/main';

/* istanbul ignore next */
SearchItem.install = function(Vue) {
    Vue.component(SearchItem.name, SearchItem);
};

export default SearchItem;
