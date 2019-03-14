
var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown", "nouislider"],
    generateValidJSON: "TRUE"
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

editor.StylesManager.applyTheme("bootstrap");
editor.text = MySurveyJSON;

//Setting this callback will make visible the "Save" button
editor.saveSurveyFunc = function () {
    //save the survey JSON
    var jsonEl = document.getElementById('surveyJSON');
    jsonEl.value = editor.text;
}


