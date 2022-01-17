export default {
    mounted(el) {
        console.log(el);
        const oSelectorInput = el.querySelector('.selector-input');
        const oInput = oSelectorInput.querySelector('input'),
            oPlaceHolder = oSelectorInput.querySelector('label'),
            oIcon = oSelectorInput.querySelector('span');

        oInput.addEventListener('focus', function () {
            oPlaceHolder.style.display = 'none';
            oIcon.className = 'iconfont icon-search';
        }, false);

        oInput.addEventListener('blur', function () {
            oPlaceHolder.style.display = 'block';
            oIcon.className = 'iconfont icon-arrow-down';
        }, false);
    },
}