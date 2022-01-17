import Selector from './components/Selector';

let DillyUI = {};

DillyUI.install = function(Vue){
    Vue.component(Selector.name,Selector);
}
export default DillyUI;