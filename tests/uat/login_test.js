
Feature('Login');

Scenario('I should see login page', (I) => {
  I.amOnPage ('/login.html');
  I.see('Login');
});

Scenario('I should see the function available in login page', (I) => {
  I.amOnPage('/Login.html');

  I.seeElement({name:'email'});
  I.seeElement ({name: 'password'});
  I.seeElement ({name: 'submit'});
  I.see('Forgot Password');
});

Scenario('I should be able to login with the registered email', (I) => {
  I.amOnPage ('/Login.html');

  I.fillField ('email', 'test@example.com');
  I.fillField ('password', '123456');
  I.click('submit')

  I.seeInPopup('Successfully Login');
  I.acceptPopup('Okay');
  I.seeInCurrentUrl('/main.html');
});

Scenario('I should failed to login with the wrong email password', (I) => {
  I.amOnPage ('/Login.html');

  I.fillField ('email', 'cyda,aljufry@gmail.com');
  I.fillField ('password', '123456');
  I.click('submit')

  I.seeInPopup('Incorrect email or password');
  I.acceptPopup('Okay');
  I.seeElement('[name=email]:focus');
})

Scenario('Validate credential login with no email or password', (I) => {
  I.amOnPage ('/Login.html');

  I.fillField ('password', '123456');
  I.click('submit');
  I.seeElement ('[name=email]:focus');
  I.see('Please insert email');
  I.seeElement('input.invalid-field[name=email]')

});
