# eval-protractor
test repo for protractor skills assessment

## NOTES TO BE DELETED BEFORE SHARING WITH CANDIDATES
I was able to execute the test by running the following
```
npm i
node_modules\.bin\webdriver-manager update --ignore_ssl
node_modules\.bin\protractor
# Note: ignore the error dialog on "Failed to load extension" if it appears
```

## Activities we might ask of candidates
The following activities consider increasing levels of protractor knowledge.

There is currently one test file.
1. Describe the URL being tested and the logic of the test.
1. Change it to cause the "should add a todo" case to run.
1. Change the "should add a todo" case to pass.
1. Correct the "should add a todo" case.  
*HINT*: Is your new "Todo" crossed off?
1. Refactor the test file to make it more maintainable. 

1. Add a second test file for same URL, but to test the "_The Basics_" section of the page. 
Include a new test case that verifies that a name entered into the "yourName" text box is correctly greeted in the 
H1 Heading below the test box. Make sure both spec files run when invoking Protractor.
