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
     name: "Introduction1",
     html: "<font size=\"+2\">NDT Questionnaire - Group 3</font>\n<br>\n<br>\nDear participant,\n<br>\nWelcome to the questionnaire about the per attribute analysis of the sensors LIDAR, radar and Camera. <br>\nTo give a quick rundown on what is gonna happen this questionnaire: <br> Firstly, all attributes are explained in a bit more detail, following this the ranking and scoring of the attributes is explained. <br> The participant is then asked to make a ranking of the attributes. Next a score is given, by the participant, to the lowest ranked attribute. <br> At last the relative importance in relation to the ranking is made. This ranking can be used to create a proper weighting for the analysis."
    },
    {
     type: "html",
     name: "question1",
     titleLocation: "hidden",
     html: "Field of View (FOV) : The size of the cone or part of a circle in which the sensor can detect an object. This can be a 2D slice of a circle or in 3D this becomes a cone shape. "
    },
    {
     type: "html",
     name: "question4",
     titleLocation: "hidden",
     html: "Range: How far a sensor will detect an object in a straight line in good conditions. "
    },
    {
     type: "html",
     name: "question5",
     titleLocation: "hidden",
     html: "Accuracy : Degree of conformance of the measured object and the real sizes of the object."
    },
    {
     type: "html",
     name: "question6",
     titleLocation: "hidden",
     html: "Frame rate: Amount of measurements per second. This can make a sensor able to react faster. This also depends on the computing speed of processing the signals."
    },
    {
     type: "html",
     name: "question7",
     titleLocation: "hidden",
     html: "Resolution: Smallest optical feature that can be recognized, such that a line or edge can be distinguished from another line/edge.  "
    },
    {
     type: "html",
     name: "question8",
     titleLocation: "hidden",
     html: "Color perception: Can the sensor perceive colour and can it give an approximation of the R,G,B values."
    },
    {
     type: "html",
     name: "question9",
     titleLocation: "hidden",
     html: "Size: How big the sensor is with all its components."
    },
    {
     type: "html",
     name: "question10",
     titleLocation: "hidden",
     html: "Weather affection: How much does the Weather affect the results of the sensor. (f.e. Light is diffracted by water so rain will affect the results of the LIDAR. Fog and darkness will impact the vision of a camera.)"
    },
    {
     type: "html",
     name: "question11",
     titleLocation: "hidden",
     html: "Maintenance: The difficulty in the mechanical part of the sensor. How easy it is to replace a part. To make repairs cheaper and not to specialized."
    },
    {
     type: "html",
     name: "question12",
     titleLocation: "hidden",
     html: "Visibility: The amount of the sensor that need to be on the outside of the car. This is important for the amount of freedom in changing the aesthetics of the car."
    },
    {
     type: "html",
     name: "question13",
     titleLocation: "hidden",
     html: "Price : How much does it cost to put the complete sensor on the car. "
    }
   ],
   readOnly: true
  },
  {
   name: "Ranking",
   elements: [
    {
     type: "html",
     name: "question14",
     html: "<font size=\"+2\">Ordinal ranking of the sensor attributes</font>\n\n<br>\n<br>\nThe goal of the current section is to construct a ranking of the aforementioned attributes. <br> To do so everyone of the attributes is assigned a rank, this is accomplished using the dropdown menu below. <br> For this ranking the most important attribute(s) is given rank 1 (select the value 1 in the dropdown menu corresponding to these attribute(s)). <br> Here less important attribute(s) are assigned a lower rank (higher associated value). <br> Note that, multiple attributes are allowed to be considered equally important, and therefore share the same rank.  "
    },
    {
     type: "matrixdropdown",
     name: "Ordinal ranking of attributes",
     valueName: "ranking",
     isRequired: true,
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
     type: "html",
     name: "question15",
     html: "The main goal of the current part is to assign a value to the lowest ranked (least important) attribute(s)."
    },
    {
     type: "text",
     name: "question2",
     title: "Assing a value in the range 0-100, to the attribute ranked lowest on the previous page",
     valueName: "lowerbound",
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
     type: "html",
     name: "question16",
     html: "In the current part the main goal is to specify the difference in importance between attributes, and thus implicitly ranks. \n<br>\n<br>\nThis done by assigning values to all attributes, except for the most important attribute(s) (rank 1) and the least important attribute(s) (lowest rank). <br> Rank 1 attribute(s) are assigned a value of 100, while the lowest rank attribute(s) keep the value assigned in the previous part. <br> It follows that the remaining attributes must be assigned a value between (including) these two values. <br> Note that, values assigned here should be consistent with the previously established ranking. <br> That is, a higher ranked (more important) attribute may not be assigned a value that is lower than the value assigned to a lower ranked (less important attribute)  "
    },
    {
     type: "multipletext",
     name: "question3",
     title: "Please give the following attributes a values from 0 - 100",
     defaultValue: {
      Price: "100",
      Range: "20",
      Accuracy: "30",
      "Frame rate": "10",
      Resolution: "40",
      "Color perception": "50",
      Size: "60",
      "Weather affection": "60",
      Maintenance: "45",
      Visibility: "35",
      FOV: "10"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       minValue: 0,
       maxValue: 100
      }
     ],
     items: [
      {
       name: "FOV",
       isRequired: true
      },
      {
       name: "Range",
       isRequired: true
      },
      {
       name: "Accuracy",
       isRequired: true
      },
      {
       name: "Frame rate",
       isRequired: true
      },
      {
       name: "Resolution",
       isRequired: true
      },
      {
       name: "Color perception",
       isRequired: true
      },
      {
       name: "Size",
       isRequired: true
      },
      {
       name: "Weather affection",
       isRequired: true
      },
      {
       name: "Maintenance",
       isRequired: true
      },
      {
       name: "Visibility",
       isRequired: true
      },
      {
       name: "Price",
       isRequired: true
      }
     ]
    }
   ]
  }
 ],
 sendResultOnPageNext: true
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
