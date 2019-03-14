Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
 pages: [
  {
   name: "Introduction",
   elements: [
    {
     type: "html",
     name: "question1"
    }
   ]
  },
  {
   name: "Ranking",
   elements: [
    {
     type: "matrixdropdown",
     name: "Ordinal ranking of attributes",
     columns: [
      {
       name: "Attribute rank",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
     ],
     rows: [
      "FOV",
      "Range",
      "Accuracy",
      "Frame rate",
      "Resolution",
      "Color perception",
      "Size",
      "Weather affection",
      "Maintenance",
      "Visibility",
      "Price"
     ]
    }
   ]
  },
  {
   name: "LowerBound",
   elements: [
    {
     type: "text",
     name: "question2",
     title: "Assing a value in the range 0-100, to the attribute ranked lowest on the previous page",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       minValue: 0,
       maxValue: 100
      }
     ],
     inputType: "number"
    }
   ]
  },
  {
   name: "RelativeImportance",
   elements: [
    {
     type: "multipletext",
     name: "question3",
     title: "Please give the following attributes a values from 0 - 100",
     isRequired: true,
     items: [
      {
       name: "FOV"
      },
      {
       name: "Range"
      },
      {
       name: "Accuracy"
      },
      {
       name: "Frame rate"
      },
      {
       name: "Resolution"
      },
      {
       name: "Color perception"
      },
      {
       name: "Size"
      },
      {
       name: "Weather affection"
      },
      {
       name: "Maintenance"
      },
      {
       name: "Visibility"
      },
      {
       name: "Price"
      }
     ]
    }
   ]
  },
  {
   name: "Nouislider",
   elements: [
    {
     type: "html",
     name: "slider",
     html: "<div class="example">
                <div id="slider" class"noUiSlider"></div>
                <div id="valueInput">
                    START <input type="text" id="start" value="0"/></label>
                    END   <input type="text" id="end" value="60"/></label>
                </div>
                <script>
                window.onload =$(function(){                        
                  $("#noUiSlider").noUiSlider({
                    handles: 2,
                    connect: true,
                    scale:[10,30],
                    start:[0,60]
                  });
                });    
                </script>
                </div>"
    }
   ]
  }
 ]
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
