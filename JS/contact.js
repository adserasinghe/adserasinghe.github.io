const contactForm = document.getElementById('contactForm');
        const formContainer = document.getElementById('contact-form-container');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            const inputs = contactForm.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('invalid');
            });

            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                name.classList.add('invalid');
                isValid = false;
            }

            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add('invalid');
                isValid = false;
            }

            // Subject validation
            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                subject.classList.add('invalid');
                isValid = false;
            }

            // Message validation
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                message.classList.add('invalid');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                contactForm.style.display = 'none';
                successMessage.classList.add('show');

                // Reset form after timeout
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    successMessage.classList.remove('show');
                }, 5000);
            }
        });

        // Real-time validation
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('invalid');
                }
            });
        });

        // Email validation on blur
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value) && this.value.trim()) {
                this.classList.add('invalid');
            }
        });