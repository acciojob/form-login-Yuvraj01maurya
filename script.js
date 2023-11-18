function getFormvalue() {
    //Write your code here
  const form = document.getElementById('form1');
  const firstName = form.elements['fname'].value.trim();
  const lastName = form.elements['lname'].value.trim();

  if (firstName === '' || lastName === '') {
    alert('Please enter both first and last names.');
  } else {
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
  }

}
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission
  getFormvalue();
});