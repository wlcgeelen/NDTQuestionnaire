Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
    surveyId: '339f8370-35e3-4d6b-a60d-524449e39a74',
    surveyPostId: '090cc801-9f16-48d2-93d3-c371de085857'
};

window.survey = new Survey.Model(json);
 
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey.render("surveyElement");
