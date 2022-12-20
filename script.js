const form = document.getElementById('emailForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from being submitted
 
  const formData = new FormData(form);
  const from = formData.get('from');
  const subject = formData.get('subject');
  const body = formData.get('body');
 
  // Send the email using the sendEmail function from the previous example
  sendEmail(from, subject, body);
});


const sendEmail = async ( from, subject, body) => {
    const response = await fetch('./sendemail.php', {
      method: 'POST',
      body: JSON.stringify({
        from,
        subject,
        body
      }),
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
   
    const result = await response.json();
    console.log(result);
  };
