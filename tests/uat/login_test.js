
Feature('Login');

Scenario('I should see login page', (I) => {
  I.amOnPage('/login.html');
  I.see('Login');
});
