/**
 * =====================================================
 * ملف التعامل مع AJAX - AJAX Handler File
 * =====================================================
 * يتعامل مع إرسال النماذج بدون إعادة تحميل الصفحة.
 * Handles form submissions without page reload.
 * ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // =====================================================
    // 1. إرسال نموذج التواصل - Contact Form Submission
    // =====================================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // تغيير حالة الزر / Change button state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '...'; // سيتم استبداله بنص المترجم لاحقاً
            
            // تجهيز البيانات / Prepare data
            const formData = new FormData(contactForm);
            formData.append('action', 'send_message');
            
            try {
                // إرسال الطلب / Send request
                // سنقوم ببرمجة actions.php في المرحلة القادمة
                const response = await fetch('admin/actions.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                // عرض النتيجة / Show result
                formStatus.style.display = 'block';
                formStatus.innerHTML = result.message;
                
                if (result.success) {
                    formStatus.style.backgroundColor = 'rgba(39, 174, 96, 0.2)';
                    formStatus.style.color = '#2ecc71';
                    formStatus.style.border = '1px solid #2ecc71';
                    contactForm.reset();
                } else {
                    formStatus.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
                    formStatus.style.color = '#e74c3c';
                    formStatus.style.border = '1px solid #e74c3c';
                }
                
            } catch (error) {
                formStatus.style.display = 'block';
                formStatus.innerHTML = 'Error communicating with server.';
                formStatus.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
                formStatus.style.color = '#e74c3c';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                // إخفاء الرسالة بعد 5 ثوانٍ / Hide message after 5s
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        });
    }
});
