# eval-protractor
test repo for protractor skills assessment

## NOTES TO BE DELETED BEFORE SHARING WITH CANDIDATES
I was able to execute the test by running the following
```
npm i protractor
node_modules\.bin\webdriver-manager update --ignore_ssl
node_modules\.bin\protractor conf.js
# Note: ignore the error dialog on "Failed to load extension" if it appears
```

## Activities we might ask of candidates
1. Change the todo-spec to cause the "should add a todo" case to run.
1. Change the todo-spec to cause the "should add a todo" case to pass.
1. Change the todo-spec to correct the "should add a todo" case.
1. Add a spec file for the angularjs homepage "_The Basics_" section.  The new test case should verify that a name 
entered into the "yourName" text box are correctly greeted in the H1 div. Make sure both spec files run when invoking 
Protractor.
1. Refactor todo-spec to make it more maintainable. 