// APPLY Bootstrap theme
Survey
    .StylesManager
    .applyTheme("default");

// LOAD SURVEY
var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
  { name:"page1", questions: [ 
      { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
      { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
   ]},
  { name: "page2", questions: [
    { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
    { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
  { name: "page3",questions: [
    { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
 ]
};

//You should get the Guid for storing survey data in surveyjs.io service storage
survey.surveyPostId = 'e544a02f-7fff-4ffb-b62d-6a9aa16efd7c';

// Define survey data safe function.
function sendDataToServer(survey) {
  survey.sendResult('e544a02f-7fff-4ffb-b62d-6a9aa16efd7c');
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send Ajax request to your web server.
}
// var surveyWindow = new Survey.SurveyWindow(surveyJSON);
// window.survey = surveyWindow;
// surveyWindow.show();
// Use onComplete event to save the data
// surveyWindow.survey.onComplete.add(sendDataToServer);

// var survey = new Survey.Model(surveyJSON, "surveyContainer");
//Use onComplete event to save the data
// survey.onComplete.add(sendDataToServer);

window.survey = new Survey.Model(surveyJSON);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey.render("surveyElement");
