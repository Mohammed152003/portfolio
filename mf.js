 // استدعاء دالةsubmit
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // ارسال النموذج الي الخامم بحيث التحقق من المدخلاتة
    event.preventDefault();
    
     // جلب اسم المستخدمة
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');
    
    if (password.length >= 6 && password.length <= 10) {
        message.style.color = 'green';
        message.textContent = 'تم تسجيل الدخول بنجاح!';
        // الانتقال إلى الصفحة الجديدة
        window.location.href = 'file:///C:/Users/hp/Desktop/Programing_CN281/Moad.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'يجب أن تكون كلمة المرور بين 6 و 10 أحرف.';
    }
});