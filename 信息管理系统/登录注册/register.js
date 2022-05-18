(function () {

    var username = document.querySelector('#username');
    var account = document.querySelector('#account');
    var password = document.querySelector('#password');
    var names = document.querySelector('#name');
    var tel = document.querySelector('#tel');
    var btn_sub = document.querySelector('#btn_sub');
    var warn = document.querySelectorAll('.warn');
    var per_jg = [0, 0, 0, 0, 0];
    btn_sub.disabled = true;

    username.addEventListener('blur', u_warn0);
    function u_warn0() {
        if (username.value.length > 8 || username.value.length <= 0) {
            per_jg[0] = 0;
            warn[0].style.display = 'block';
        } else {
            per_jg[0] = 1;
            warn[0].style.display = 'none';
        }
        per_judge();
    }

    account.addEventListener('blur', a_warn1);
    function a_warn1() {
        if (account.value.length != 9 || isNaN(account.value) == true) {
            per_jg[1] = 0;
            warn[1].style.display = 'block';
        } else {
            per_jg[1] = 1;
            warn[1].style.display = 'none';
        }
        per_judge();
    }

    password.addEventListener('blur', p_warn2);
    function p_warn2() {
        if (password.value.length > 12 || password.value.length <= 0 || havChn(password.value) == true) {
            per_jg[2] = 0;
            warn[2].style.display = 'block';
        } else {
            per_jg[2] = 1;
            warn[2].style.display = 'none';
        }
        per_judge();
    }

    names.addEventListener('blur', n_warn3);
    function n_warn3() {
        if (names.value.length <= 0 || names.value.length > 8 || isChn(names.value) == false) {
            per_jg[3] = 0;
            warn[3].style.display = 'block';
        } else {
            per_jg[3] = 1;
            warn[3].style.display = 'none';
        }
        per_judge();
    }

    tel.addEventListener('blur', t_warn4);
    function t_warn4() {
        if (tel.value.length != 11 || isNaN(tel.value) == true) {
            per_jg[4] = 0;
            warn[4].style.display = 'block';
        } else {
            per_jg[4] = 1;
            warn[4].style.display = 'none';
        }
        per_judge();
    }

    // 判断是否符合全部输入规范
    function per_judge() {
        if ([per_jg[0], per_jg[1], per_jg[2], per_jg[3], per_jg[4]].every(x => x == 1)) {
            btn_sub.disabled = false;
            btn_sub.style.opacity = '1';
        } else {
            btn_sub.disabled = true;
            btn_sub.style.opacity = '0.5';
        }
    }


    // 判断是否全为中文
    function isChn(str) {
        var reg = /^[\u4E00-\u9FA5]+$/;
        if (!reg.test(str)) {
            return false;   // 不全是中文
        } else {
            return true;    // 全是中文
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