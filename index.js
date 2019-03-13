var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

SurveyEditor
    .StylesManager
    .applyTheme("bootstrap");
