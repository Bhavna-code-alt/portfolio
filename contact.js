// let form = document.querySelector("form");
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.querySelector('#sub').value = "Submiting...";
//     let data = new FormData(form);
//     fetch("https://script.google.com/macros/s/AKfycbwten1h1NBxDeDJoIueeD5CLB8_H0QAiCBEuGHwLVGFdXEldnahpHEz2bLW2jcvAs0/exec", {
//         method: "POST",
//         body: data
//     })
//     .then(res => res.text())
//     .then(data => document.querySelector('#sub').value = "Submit");
// })

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = {
//         firstName: document.getElementById('first_name').value,
//         lastName: document.getElementById('last_name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('msg').value,
//     };

//     fetch('https://script.google.com/macros/s/AKfycbwten1h1NBxDeDJoIueeD5CLB8_H0QAiCBEuGHwLVGFdXEldnahpHEz2bLW2jcvAs0/exec', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('responseMessage').innerText = 'Form submission successful!';
//     })
//     .catch(error => {
//         document.getElementById('responseMessage').innerText = 'There was an error submitting the form.';
//         console.error('Error:', error);
//     });
// });