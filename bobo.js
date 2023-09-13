        const editor = document.getElementById('editor');

        function copyText() {
            const textToCopy = editor.innerText;
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = textToCopy;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            alert('Text copied to clipboard.');
        }

        // Anda dapat menambahkan lebih banyak fungsionalitas di sini jika diperlukan.
