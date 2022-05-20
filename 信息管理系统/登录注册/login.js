(function () {

    var account = document.querySelector('#account');
    var password = document.querySelector('#password');
    var btn_sub = document.querySelector('#btn_sub');
    var warn = document.querySelectorAll('.warn');
    var per_jg = [0, 0];
    btn_sub.disabled = true;

    account.addEventListener('blur', a_warn0);
    function a_warn0() {
        if (account.value.length != 9 || isNaN(account.value) == true) {
            per_jg[0] = 0;
            warn[0].style.display = 'block';
        } else {
            per_jg[0] = 1;
            warn[0].style.display = 'none';
        }
        per_judge();
    }

    password.addEventListener('blur', p_warn1);
    function p_warn1() {
        if (password.value.length > 12 || password.value.length <= 0 || havChn(password.value) == true) {
            per_jg[1] = 0;
            warn[1].style.display = 'block';
        } else {
            per_jg[1] = 1;
            warn[1].style.display = 'none';
        }
        per_judge();
    }

    // 判断是否符合全部输入规范
    function per_judge() {
        if ([per_jg[0], per_jg[1]].every(x => x == 1)) {
            btn_sub.disabled = false;
            btn_sub.style.opacity = '1';
        } else {
            btn_sub.disabled = true;
            btn_sub.style.opacity = '0.5';
        }
    }

    // 判断是否含有中文
    function havChn(str) {
        if (escape(str).indexOf("%u") < 0) {
            return false;
        } else {
            return true;    // 含有中文
        }
    }

})();