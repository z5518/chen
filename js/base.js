// 导航栏菜单切换
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 点击空白处关闭导航栏
document.addEventListener('click', function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (navMenu.classList.contains('active') &&!isClickInsideMenu &&!isClickOnToggle) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// 示例交互：当页面加载完成后，给导航栏添加一个激活状态
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// 修改后的函数，直接跳转到主页
function checkPassword() {
    window.location.href = 'index.html';
}

// 保留的DOMContentLoaded事件
document.addEventListener('DOMContentLoaded', () => {
    const savedPassword = sessionStorage.getItem('saved_password');
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});

// 判断是否为首次访问 index.html
const currentPage = window.location.pathname.split('/').pop();
const firstVisit = sessionStorage.getItem('first_visit_index');
if (currentPage === 'index.html' && firstVisit!== 'false') {
    sessionStorage.setItem('first_visit_index', 'false');
    window.location.href = 'welcome.html';
}

// 处理客服按钮点击事件
function openWhatsApp() {
    // 替换为你的WhatsApp电话号码
    const phoneNumber = 'your_phone_number'; 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
}