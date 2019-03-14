
var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

//Setting this callback will make visible the "Save" button
editor.saveSurveyFunc = function () {
    //save the survey JSON
    var jsonEl = document.getElementById('surveyJSON');
    jsonEl.value = editor.text;
}

editor.text = MySurveyJSON;

SurveyEditor
    .StylesManager
    .applyTheme("bootstrap");
