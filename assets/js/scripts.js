// assets/js/scripts.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า

    alert("เข้าสู่ระบบสำเร็จ! (ยังไม่มีระบบ backend)");
    window.location.href = "dashboard.html"; // ไปหน้า Dashboard
});
