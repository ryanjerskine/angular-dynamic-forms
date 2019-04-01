# AngularDynamicForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Next Steps

This is a proof of concept. The next steps to prove that this will works are:

### 1. Cross-Field Validation

Implement a validator that validators one or more fields. For example, the phone number type could be required if the phone number field isn't empty.

### 2. Load/Save Functionality

Use the in memory API to show that the form can be setup to load/save data to an API.

### 3. Server Feedback

Implement a feedback mechanism to display errors from the server. Extra points if it maps feedback to fields.

### 4. Array of Forms/Questions

Add support for an array of forms/questions. Initial proof of concept can fetch multiple questions initially and navigate through them with the next/save button.

### 5. Navigating Between Questions

Allow forward/back navigations between questions. The flow should dynamically be able to fetch the next 'x' questions that are available. The easiest scenario is
fetching one question at a time when the next/save button is clicked.

### 6. Advanced Behavior

Figure out how the questions should flow in advanced cases. For example, if you prefetch 5 questions, can they jump all the way to #5? What if we want to let them jump
as far as #3 but not all the way to #5 without answering #3 and #4? What if they answer 10 questions and then go back and change #4? What if the question flow is changed
on the server and a user is partially through answering questions?
