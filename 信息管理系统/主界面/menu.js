(function () {

    //设置下拉菜单
    let tab_lists = document.querySelectorAll('.tab_list');
    let tabs = document.querySelectorAll('.tab');

    for (let i = 0; i < tab_lists.length; i++) {
        tabs[i].style.display = 'none';
        tab_lists[i].setAttribute('index' + i.toString(), 'false');
        tab_lists[i].onclick = function () {
            if (tab_lists[i].getAttribute('index' + i.toString()) === 'false') {
                tabs[i].style.display = 'block';
                tab_lists[i].setAttribute('index' + i.toString(), 'true');
            } else {
                tabs[i].style.display = 'none';
                tab_lists[i].setAttribute('index' + i.toString(), 'false');
            }
        }
    }

    //设置内容变化
    //获取lis
    let lis = [];
    for (let i = 0; i < tabs.length; i++) {
        let list = tabs[i].querySelectorAll('li');
        for (let j = 0; j < list.length; j++) {
            lis.push(list[j]);
        }
    }
    //获取item
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
    items[0].style.display = 'block';
    //for循环为item添加事件
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i.toString())
        lis[i].onclick = function () {
            let index = this.getAttribute('index');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        }
    }

    // 个人中心
    var per_child = document.querySelector('#personal').querySelector('tbody').children;
    var per_l = document.querySelectorAll('.per_l');
    var per_in = document.querySelectorAll('.personal_in');
    var per_btn = document.querySelector('#personal_btn');
    var per_btn1 = document.querySelector('#personal_btn1');
    var per_sex = document.querySelector('#personal_sex');

    // 个人中心编辑约束
    var personal_warn = document.querySelectorAll('.personal_warn');
    var per_username = document.querySelector('#per_username');
    var per_account = document.querySelector('#per_account');
    var per_password = document.querySelector('#per_password');
    var per_name = document.querySelector('#per_name');
    var per_phonenum = document.querySelector('#per_phonenum');
    var per_jg = [1, 1, 1, 1, 1];

    per_username.addEventListener('blur', personal_warn0);
    function personal_warn0() {
        if (per_username.value.length > 8 || per_username.value.length <= 0) {
            per_jg[0] = 0;
            personal_warn[0].style.display = 'block';
        } else {
            per_jg[0] = 1;
            personal_warn[0].style.display = 'none';
        }
        per_judge();
    }

    per_account.addEventListener('blur', personal_warn1);
    function personal_warn1() {
        if (per_account.value.length != 9 || isNaN(per_account.value) == true) {
            per_jg[1] = 0;
            personal_warn[1].style.display = 'block';
        } else {
            per_jg[1] = 1;
            personal_warn[1].style.display = 'none';
        }
        per_judge();
    }

    per_password.addEventListener('blur', personal_warn2);
    function personal_warn2() {
        if (per_password.value.length > 12 || per_password.value.length <= 0 || havChn(per_password.value) == true) {
            per_jg[2] = 0;
            personal_warn[2].style.display = 'block';
        } else {
            per_jg[2] = 1;
            personal_warn[2].style.display = 'none';
        }
        per_judge();
    }

    per_name.addEventListener('blur', personal_warn3);
    function personal_warn3() {
        if (per_name.value.length <= 0 || per_name.value.length > 8 || isChn(per_name.value) == false) {
            per_jg[3] = 0;
            personal_warn[3].style.display = 'block';
        } else {
            per_jg[3] = 1;
            personal_warn[3].style.display = 'none';
        }
        per_judge();
    }

    per_phonenum.addEventListener('blur', personal_warn4);
    function personal_warn4() {
        if (per_phonenum.value.length != 11 || isNaN(per_phonenum.value) == true) {
            per_jg[4] = 0;
            personal_warn[4].style.display = 'block';
        } else {
            per_jg[4] = 1;
            personal_warn[4].style.display = 'none';
        }
        per_judge();
    }

    // 判断是否符合全部输入规范
    function per_judge() {
        if ([per_jg[0], per_jg[1], per_jg[2], per_jg[3], per_jg[4]].every(x => x == 1)) {
            per_btn1.disabled = false;
            per_btn1.style.opacity = '1';
        } else {
            per_btn1.disabled = true;
            per_btn1.style.opacity = '0.5';
        }
    }

    // 个人中心-编辑操作
    per_btn.addEventListener('click', function () {
        per_btn.style.display = 'none';
        per_btn1.style.display = 'block';

        for (var i = 0; i < per_child.length - 1; i++) {
            per_in[i].value = per_l[i].innerHTML;
            per_l[i].style.display = 'none';
            per_in[i].style.display = 'block';
        }
        per_btn1.addEventListener('click', function () {
            // 性别value的修改
            for (var i = 0; i < per_sex.children.length; i++) {
                if (per_sex.children[i].checked == true) {
                    per_sex.value = per_sex.children[i].value;
                    break;
                }
            }
            for (var i = 0; i < per_child.length - 1; i++) {
                per_l[i].innerHTML = per_in[i].value;
                per_l[i].style.display = 'block';
                per_in[i].style.display = 'none';
            }
            per_btn1.style.display = 'none';
        });
    });

    // 表单约束条件
    var username = document.querySelectorAll('.username');
    var student_id = document.querySelectorAll('.student_id');
    var age = document.querySelectorAll('.age');

    // 警告信息
    var username_warn = document.querySelectorAll('.username_warn');
    var student_id_warn = document.querySelectorAll('.student_id_warn');
    var age_warn = document.querySelectorAll('.age_warn');
    var btn_add = document.querySelectorAll('.btn_add');

    // 约束按钮
    for (var i = 0; i < btn_add.length; i++) {
        btn_add[i].disabled = true;
    }
    var jg = [[0, 0], [0, 0], [0, 0]];

    for (let i = 0; i < username.length; i++) {
        username[i].addEventListener('blur', names);
        function names() {
            if (username[i].value.length <= 0 || username[i].value.length > 8 || isChn(username[i].value) == false) {
                jg[0][i] = 0;
                username_warn[i].style.display = 'block';
            } else {
                jg[0][i] = 1;
                username_warn[i].style.display = 'none';
            }
            judge(i);
        }
        student_id[i].addEventListener('blur', id)
        function id() {
            if (student_id[i].value.length != 9 || isNaN(student_id[i].value) == true) {
                jg[1][i] = 0;
                student_id_warn[i].style.display = 'block';
            } else {
                jg[1][i] = 1;
                student_id_warn[i].style.display = 'none';
            }
            judge(i);
        }
        age[i].addEventListener('blur', ages)
        function ages() {
            if (age[i].value.length > 3 || age[i].value.length <= 0 || isNaN(age[i].value) == true) {
                jg[2][i] = 0;
                age_warn[i].style.display = 'block';
            } else {
                jg[2][i] = 1;
                age_warn[i].style.display = 'none';
            }
            judge(i);
        }
    }

    // 判断是否符合全部输入规范
    function judge(i) {
        if ([jg[0][i], jg[1][i], jg[2][i]].every(x => x == 1)) {
            btn_add[i].disabled = false;
            btn_add[i].style.opacity = '1';
        } else {
            btn_add[i].disabled = true;
            btn_add[i].style.opacity = '0.5';
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
////////////////////////////////////////////////////////////////////////////
var colleges = document.querySelectorAll('.college');
var sub0 = document.querySelector('.sub0');
var sub1 = document.querySelector('.sub1');
var sub2 = document.querySelector('.sub2');
var sub3 = document.querySelector('.sub3');
var sub4 = document.querySelector('.sub4');
var subs = [sub0, sub1, sub2, sub3, sub4];

// 程序入口
function init(college, sub) {
    // 导入学院
    pushCollege(college);
    // 添加事件
    addEvents(college, sub);
}

// 导入学院数据
function pushCollege(college) {
    // 加入学院
    // <option value="学院标号">学院名称</option>
    for (var collegekey in college_datas) {
        var option = document.createElement('option');
        option.value = collegekey;
        option.innerText = college_datas[collegekey];
        college.appendChild(option);
    }
}

function addEvents(college, sub) {
    // 监听学院列表的变化
    college.addEventListener('change', show);
    function show() {
        showSub(college, sub);
    }
}

// 选择学院后展示对应的学科
function showSub(college, sub) {
    // 首先清空列表
    sub.innerHTML = '';
    // 取出学院标号对应的学科对象,value没有值就是没选学院
    var index = college.value;
    var subObj = subject_datas[index];
    // 若没有选择，则为空，不执行下面的操作
    if (subObj === undefined) {
        return;
    }
    // 导入对象的数据
    for (var subkey in subObj) {
        option = document.createElement('option');
        option.value = subkey;
        option.innerText = subObj[subkey];
        sub.appendChild(option);
    }
}

for (var i = 0; i < colleges.length; i++) {
    // console.log(colleges.length, sub.length);
    // console.log(colleges[i], sub[i]);
    init(colleges[i], subs[i])
}
// init();// 程序入口
























// 选择各学院对应的专业
// var sub0 = document.querySelector('.sub0').querySelectorAll('option');
// var sub1 = document.querySelector('.sub1').querySelectorAll('option');
// var sub2 = document.querySelector('.sub2').querySelectorAll('option');
// var sub3 = document.querySelector('.sub3').querySelectorAll('option');
// var sub4 = document.querySelector('.sub4').querySelectorAll('option');
// var sub = [sub0, sub1, sub2, sub3, sub4];

// console.log(sub0[1].dataset.idex);

// for (var i = 0; i < sub.length; i++) {
//     for (var j = 0; j < sub[i].length; j++) {
//         sub[i][j].style.display = 'none';
//     }
// }

// function fn(op, subject) {
//     for (var i = 1; i < subject.length; i++) {
//         if (op.dataset.idex !== subject[i].dataset.idex) {
//             subject[i].style.display = 'none';
//         } else {
//             subject[i].style.display = 'block';
//         }
//     }
// }