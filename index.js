var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

SurveyEditor
    .StylesManager
    .applyTheme("bootstrap");

//Setting this callback will make visible the "Save" button
editor.saveSurveyFunc = function () {
    //save the survey JSON
    var jsonEl = document.getElementById('surveyJSON');
    jsonEl.value = editor.text;
}

editor.text = "{ pages: [{ name:\'page1\', questions: [{ type: \'text\', name:\"q1\"}]}]}";
