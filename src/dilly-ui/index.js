import Selector from './components/Selector';
import '@/assets/iconfont/iconfont.css'

let DillyUI = {};
DillyUI.install = function(Vue){
    Vue.component(Selector.name,Selector);
}
export default DillyUI;