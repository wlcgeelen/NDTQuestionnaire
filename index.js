SurveyEditor
    .StylesManager
    .applyTheme("bootstrap");

var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"],
    generateValidJSON: TRUE
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

editor.text = MySurveyJSON;

editor.toolbox.addItem(itemAsJson)

//Setting this callback will make visible the "Save" button
editor.saveSurveyFunc = function () {
    //save the survey JSON
    var jsonEl = document.getElementById('surveyJSON');
    jsonEl.value = editor.text;
}

