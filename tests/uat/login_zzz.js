
Feature('Login');

Scenario('I should see login page', (I) => {
  I.amOnPage('/login.html');
  I.see('Login');
});

Scenario('I should see the function available in login page', (I) => {
  I.amOnPage('/login.html');

  I.seeElement({name: 'email'});
  I.seeElement({name: 'password'});
  I.seeElement({name: 'submit'});
  I.see('Forgot password')
});

Scenario('I should be able to login with the registered email', (I) => {

  // Preparation

  // Do
  I.amOnPage('/login.html');
  I.fillField('email', 'test@example.com');
  I.fillField('password', '123456');
  I.click({name: 'submit'});

  // Assert
  I.seeInCurrentUrl('/main.html');
});

Scenario('I should failed to login with the wrong email password', (I) => {

  // Preparation

  // Do
  I.amOnPage('/login.html');
  I.fillField('email', 'test@example.com');
  I.fillField('password', 'wrongpassword');
  I.click({name: 'submit'});

  // Assert
  I.seeInPopup('Incorrect email or password');
})

Scenario('Validate credential login with no email or password', (I) => {
  I.amOnPage('/login.html');
  I.fillField('password', '123456');
  I.click({name: 'submit'});

  // Assertion
  I.see('Please insert email');
  I.seeElement('input.invalid-field[name=email]')
});
