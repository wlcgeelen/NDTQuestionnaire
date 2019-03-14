Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var slider = document.getElementById('slider');
$(\"#noUiSlider\").noUiSlider.create(slider, {

    range: {
        'min': 1300,
        'max': 3250
    },

    step: 150,

    // Handles start at ...
    start: [1450, 2050, 2350, 3000],

    // ... must be at least 300 apart
    margin: 300,

    // ... but no more than 600
    limit: 600,

    // Display colored bars between handles
    connect: true,

    // Put '0' at the bottom of the slider
    direction: 'rtl',
    orientation: 'vertical',

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    }),

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
});


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
     html: "<head>\n        <title>Custom widget: JavaScript range slider, Knockoutjs Survey Library Example</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <script src=\"https://unpkg.com/jquery\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js\"></script>\n        <script src=\"https://surveyjs.azureedge.net/1.0.74/survey.ko.js\"></script>\n        <link rel=\"stylesheet\" href=\"https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css\">\n        <link rel=\"stylesheet\" href=\"./index.css\">\n        <script src=\"https://unpkg.com/nouislider@9.2.0/distribute/nouislider.js\"></script>\n        <script src=\"https://unpkg.com/wnumb@1.1.0\"></script>\n        <link href=\"https://unpkg.com/nouislider@9.2.0/distribute/nouislider.min.css\" rel=\"stylesheet\"/>\n        <script src=\"https://unpkg.com/surveyjs-widgets/surveyjs-widgets.js\"></script>\n\n    </head>\n    <body>\n        <div id=\"surveyContainer\">\n            <div id=\"surveyElement\">\n                <div class=\"example\">\n                    <div id=\"slider\" class\"noUiSlider\"></div>\n                    <div id=\"valueInput\">\n                        START <input type=\"text\" id=\"start\" value=\"0\"/></label>\n                        END   <input type=\"text\" id=\"end\" value=\"60\"/></label>\n                    </div>\n                <script>\n                window.onload =$(function(){                        \n                  $(\"#noUiSlider\").noUiSlider({\n                    handles: 2,\n                    connect: true,\n                    scale:[10,30],\n                    start:[0,60]\n                  });\n                });    \n                </script>\n                </div>\n            </div>\n            <div id=\"surveyResult\"></div>\n        </div>\n        \n        <script type=\"text/javascript\" src=\"./index.js\"></script>\n\n    </body>"
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
