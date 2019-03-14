
var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"],
    generateValidJSON: True
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

editor.text = MySurveyJSON;

//Setting this callback will make visible the "Save" button
editor.saveSurveyFunc = function () {
    //save the survey JSON
    var jsonEl = document.getElementById('surveyJSON');
    jsonEl.value = editor.text;
}

SurveyEditor
    .StylesManager
    .applyTheme("bootstrap");
