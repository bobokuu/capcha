        // Generate a random alphanumeric string for the CAPTCHA
        function generateCaptcha() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let captcha = '';
            for (let i = 0; i < 6; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                captcha += characters[randomIndex];
            }
            return captcha;
        }

        // Display the generated CAPTCHA
        function displayCaptcha() {
            const captchaElement = document.getElementById('captcha');
            captchaElement.textContent = generateCaptcha();
        }

        // Refresh the CAPTCHA when the refresh button is clicked
        document.getElementById('refresh').addEventListener('click', displayCaptcha);

        // Initial display of the CAPTCHA
        displayCaptcha();
