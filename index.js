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
     html: "
    <head>
        <title>Custom widget: JavaScript range slider, Knockoutjs Survey Library Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://unpkg.com/jquery"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
        <script src="https://surveyjs.azureedge.net/1.0.74/survey.ko.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./index.css">
        <script src="https://unpkg.com/nouislider@9.2.0/distribute/nouislider.js"></script>
        <script src="https://unpkg.com/wnumb@1.1.0"></script>
        <link href="https://unpkg.com/nouislider@9.2.0/distribute/nouislider.min.css" rel="stylesheet"/>
        <script src="https://unpkg.com/surveyjs-widgets/surveyjs-widgets.js"></script>

    </head>
    <body>
        <div id="surveyContainer">
            <div id="surveyElement">
                <div class="example">
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
                </div>
            </div>
            <div id="surveyResult"></div>
        </div>
        
        <script type="text/javascript" src="./index.js"></script>

    </body>"
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
