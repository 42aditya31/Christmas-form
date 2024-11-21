// Replace with your actual script URL

const scriptURL = 'https://script.google.com/macros/s/AKfycbw_rUP7jfdzgkpi1f6n07t4Neo28Yh79WZUN6bVbApd77M_rlUekyfRKR4OCVGObKZU/exec'

// --- Form Validation and Submission ---
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const childName = document.getElementById('childName').value.trim();
    const childClass = document.getElementById('childClass').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    let isValid = true;

    // Validate child name (cannot be empty)
    if (!childName) {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('nameError').classList.add('hidden');
    }

    // Validate class (must be between 1 and 10)
    if (!childClass || isNaN(childClass) || childClass < 1 || childClass > 10) {
        document.getElementById('classError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('classError').classList.add('hidden');
    }

    // Validate WhatsApp contact number (must be exactly 10 digits)
    const numberPattern = /^[0-9]{10}$/;
    if (!numberPattern.test(contactNumber)) {
        document.getElementById('numberError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('numberError').classList.add('hidden');
    }

    // If all validations pass, submit the form
    if (isValid) {
        const form = document.forms['contact-form'];

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert("Thank you! Your form has been submitted successfully.");
                form.reset(); // Clear the form after submission
            })
            .catch(error => console.error('Error!', error.message));
    }
});



const createSnowFlake = () => {
    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snowflake");
    snowFlake.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(snowFlake);
    setTimeout(() => snowFlake.remove(), 10000);
  };
  
  setInterval(createSnowFlake, 200);