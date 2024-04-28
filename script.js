// Function to generate random password
function generatePassword() {
  const length = 12; // Length of the generated password
  const charset = getCharset(); // Character set for password
  let password = "";
  for (let i = 0; i < length; ++i) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  document.getElementById("password").value = password;
}

// Function to get character set based on user choices
function getCharset() {
  let charset = "";
  if (document.getElementById("include-uppercase").checked) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("include-lowercase").checked) {
      charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("include-numbers").checked) {
      charset += "0123456789";
  }
  if (document.getElementById("include-special").checked) {
      charset += "!@#$%^&*()_+";
  }
  // If no options are selected, default to including lowercase letters and numbers
  if (charset === "") {
      charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  }
  return charset;
}

// Function to copy generated password to clipboard
function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
