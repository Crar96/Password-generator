# Password-generator
A random password generator created using vanilla JavaScript.

Overview:

This task caused me a lot of issues. Much more than I anticipated a small oversight in the for loop (+- was causing me issues as it was supposed to be +=) caused me a lot of issues as I did not see this error until quite late
and assumed that something else was causing the bug. I also think that I was alligning my code in the correct order and that this was also causing me issues (although I'm still not sure to what extent) must remember to consider that JavaScript reads top to bottom and keep an eye on this in the future and see if this problem persists on other assignments.

I was also incorrectly surrounding math.floor with [] in the getRandom function. I didn't test this immediately after changing and before changing the syntax error in the for loop so I'm unfortunately not sure exactly what issues this was causing.

Another prominent issue that I faced was that I incorrectly labelled 2 of the concat arrays (numericCharacters and specialCharacters) This returned as error in the console log however, it took me a little while to figure out that the error was a syntax one.

Technology used: 
HTML 
CSS
Vanilla Javascript

Links:

Deployed link: https://crar96.github.io/Password-generator/

Repo link: https://github.com/Crar96/Password-generator

Functionality:

The input box works and will allow you to select lowercase, uppercase, numeric and special characters to generate the password randomly from the array using the following function function 
getRandom(arr) { 
  var getIndex = Math.floor(Math.random() * arr.length);
}

If no input is given then for the password length then an alert will popup saying: Please enter a valid password length between 8 and 128 characters.

If a password length is stated but no character types are not selected then an alert will appear saying: Please select at least one character type to generate your password.

Known bugs:

1: Not entering any data into the input field and then pressing ok on the alert will not reload the page and bring up the alert again. I know there is a way to fix this by automatically reloading the page when no input is given but I could not figure this out.

2: On the GitHub pages link the rest of the display window seems to disappear the prompt appears. This is not an issue when accessing the testing the application locally on a live server

![assignment task 5 screenshot](https://github.com/Crar96/Password-generator/assets/136388946/15a55f86-791b-413d-bc2a-99e1ac9b26f2)

