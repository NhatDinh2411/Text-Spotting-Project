const form = document.querySelector("form"),
  fileInput = document.querySelector(".file-input"),
  progressArea = document.querySelector(".progress-area"),
  uploadedArea = document.querySelector(".uploaded-area"),
  imageDisplayArea = document.querySelector(".image-display-area"),
  imageWithURL = document.querySelector(".url-button"),
  executeButton = document.querySelector(".extract-button");

form.addEventListener("click", () => {
  fileInput.click();
});

form.addEventListener("dragover", function (e) {
  e.preventDefault();
});

form.addEventListener("drop", function (e) {
  e.preventDefault();
  displayImageFromFile(e.dataTransfer.files[0]);
});

fileInput.onchange = ({ target }) => {
  let file = target.files[0];
  if (file) {
    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    let fileName = file.name;
    if (fileName.length >= 12) {
      let splitName = fileName.split(".");
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    displayImageFromFile(file);
  }
};

imageWithURL.addEventListener("click", () => {
  const url = document.querySelector(".url-input").value;
  if (url) {
    displayImageFromURL(url);
  }
});

function displayImageFromFile(file) {
  let reader = new FileReader();
  reader.onload = function (event) {
    displayImage(event.target.result);
  };
  reader.readAsDataURL(file);
}

function displayImageFromURL(url) {
  displayImage(url);
}

function displayImage(src) {
  // Clear the image display area
  //imageDisplayArea.innerHTML = "";
  //
  //let imgElement_1 = document.createElement("img");
  //imgElement_1.src = src;
  //imgElement_1.classList.add("uploaded-image");
  //
  //let column_1 = document.createElement("div");
  //column_1.classList.add("column");
  //column_1.appendChild(imgElement_1);
  //
  //let imgElement_2 = document.createElement("img");
  //imgElement_2.classList.add("output-image");
  //
  //let canvas = document.createElement("canvas");
  //canvas.classList.add("bounding-box");
  //
  //let column_2 = document.createElement("div");
  //column_2.classList.add("column");
  //column_2.appendChild(imgElement_2);
  //column_2.appendChild(canvas);
  //
  //imageDisplayArea.appendChild(column_1);
  //imageDisplayArea.appendChild(column_2);


  // Pull
  imageDisplayArea.innerHTML = "";

  let imgElement_1 = document.createElement("img");
  imgElement_1.src = src;
  imgElement_1.classList.add("uploaded-image");

  let column_1 = document.createElement("div");
  column_1.classList.add("column");
  column_1.appendChild(imgElement_1);

  //let imgElement_2 = document.createElement("img");
  //imgElement_2.classList.add("output-image");
  //
  let canvas = document.createElement("canvas");
  canvas.classList.add("bounding-box");
  canvas.width = 940;
  canvas.height = 300;
  //
  let column_2 = document.createElement("div");
  column_2.classList.add("column");
  //column_2.appendChild(imgElement_2);
  column_2.appendChild(canvas);

  imageDisplayArea.appendChild(column_1);
  imageDisplayArea.appendChild(column_2);
}

executeButton.onclick = async () => {
  const imgElement = document.querySelector(".uploaded-image");
  const imgSrc = imgElement.src;
  const imgFile = imgElement.files ? imgElement.files[0] : null;

  result = [
    [
        [
            [
                130,
                326
            ],
            [
                366,
                302
            ],
            [
                370,
                340
            ],
            [
                134,
                364
            ]
        ],
        "SUPER"
    ],
    [
        [
            [
                79,
                382
            ],
            [
                426,
                342
            ],
            [
                432,
                393
            ],
            [
                85,
                433
            ]
        ],
        "PROMO"
    ],
    [
        [
            [
                620,
                416
            ],
            [
                735,
                412
            ],
            [
                736,
                441
            ],
            [
                621,
                445
            ]
        ],
        "NEW"
    ],
    [
        [
            [
                195,
                439
            ],
            [
                328,
                423
            ],
            [
                331,
                443
            ],
            [
                198,
                459
            ]
        ],
        "SHOPNOW"
    ],
    [
        [
            [
                621,
                446
            ],
            [
                737,
                441
            ],
            [
                738,
                462
            ],
            [
                622,
                467
            ]
        ],
        "ONLINE"
    ],
    [
        [
            [
                622,
                467
            ],
            [
                738,
                463
            ],
            [
                739,
                488
            ],
            [
                623,
                492
            ]
        ],
        "STORE"
    ],
    [
        [
            [
                239,
                494
            ],
            [
                288,
                494
            ],
            [
                288,
                501
            ],
            [
                239,
                501
            ]
        ],
        "Hemagna'a"
    ],
    [
        [
            [
                220,
                518
            ],
            [
                269,
                518
            ],
            [
                269,
                525
            ],
            [
                220,
                525
            ]
        ],
        "www.yourw"
    ],
    [
        [
            [
                134,
                644
            ],
            [
                666,
                644
            ],
            [
                666,
                691
            ],
            [
                134,
                691
            ]
        ],
        "SYNTHETICPVC"
    ],
    [
        [
            [
                258,
                710
            ],
            [
                540,
                710
            ],
            [
                540,
                758
            ],
            [
                258,
                758
            ]
        ],
        "BANNER"
    ]
]

  //
  //result = [
  //  [
  //    [
  //      [
  //        [655.5465087890625, 278.1545104980469],
  //        [973.88720703125, 284.02783203125],
  //        [972.230224609375, 373.8377380371094],
  //        [653.8895263671875, 367.96441650390625],
  //      ],
  //      "BANNER",
  //    ],
  //    [
  //      [
  //        [98.01776123046875, 253.68084716796875],
  //        [516.7345581054688, 268.2773132324219],
  //        [513.3653564453125, 364.926513671875],
  //        [94.6485595703125, 350.3300476074219],
  //      ],
  //      "NOW",
  //    ],
  //    [
  //      [
  //        [549.7171020507812, 274.3227844238281],
  //        [627.9052734375, 273.30560302734375],
  //        [629.0979614257812, 364.9856872558594],
  //        [550.9097900390625, 366.00286865234375],
  //      ],
  //      "NEW",
  //    ],
  //    [
  //      [
  //        [648.6233520507812, 616.755126953125],
  //        [832.076904296875, 616.3633422851562],
  //        [832.4296264648438, 781.5313720703125],
  //        [648.97607421875, 781.9231567382812],
  //      ],
  //      "ONLINE",
  //    ],
  //  ],
  //];
  drawBoundingBoxes(result);
  /*
  if (imgFile || imgSrc) {
    try {
      const formData = new FormData();

      if (imgFile) {
        formData.append("file", imgFile);
      } else if (imgSrc) {
        const response = await fetch(imgSrc);
        const blob = await response.blob();
        formData.append("file", blob, "image.jpg");
      }
      const apiResponse = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to get a valid response from the server.");
      }

      const result = await apiResponse.json();
      console.log(result)
      
      result = [[[[[655.5465087890625, 278.1545104980469], [973.88720703125, 284.02783203125], [972.230224609375, 373.8377380371094], [653.8895263671875, 367.96441650390625]], "BANNER"], [[[98.01776123046875, 253.68084716796875], [516.7345581054688, 268.2773132324219], [513.3653564453125, 364.926513671875], [94.6485595703125, 350.3300476074219]], "NOW"], [[[549.7171020507812, 274.3227844238281], [627.9052734375, 273.30560302734375], [629.0979614257812, 364.9856872558594], [550.9097900390625, 366.00286865234375]], "NEW"], [[[648.6233520507812, 616.755126953125], [832.076904296875, 616.3633422851562], [832.4296264648438, 781.5313720703125], [648.97607421875, 781.9231567382812]], "ONLINE"]]];
      drawBoundingBoxes(result[0])
      // displayResult(result.prediction);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  } else {
    console.error("No file or image source selected.");
  }
  */
};

//function drawBoundingBoxes(detectedObjects) {
//  const canvas = document.getElementsByClassName("bounding-box")[0];
//  const context = canvas.getContext("2d");
//  const outputImage = document.getElementsByClassName("output-image");
//  const uploadedImage = document.getElementsByClassName("uploaded-image")[0];
//  //image.src = document.getElementsByClassName('uploaded-image')[0].src
//  function drawBoundingBox(arr) {
//    context.beginPath();
//    points = arr[0];
//    console.log(points);
//    context.moveTo(points[0][0], points[0][1]);
//    for (let i = 1; i < points.length; i++) {
//      context.lineTo(points[i][0], points[i][1]);
//    }
//    context.closePath();
//    context.lineWidth = 2;
//    context.strokeStyle = "red";
//    context.stroke();
//
//    context.font = "16px Arial";
//    context.fillStyle = "red";
//    context.fillText(arr[1], points[0][0], points[0][1] - 10);
//  }
//  detectedObjects.forEach((obj) => {
//    drawBoundingBox(obj);
//  });
//
//  // Convert canvas content to an image and display it
//  const image = new Image();
//  image.src = canvas.toDataURL();
//  document.getElementsByClassName("output-image")[0].src = image.src;
//}

function drawBoundingBoxes(detectedObjects) {
  const canvas = document.getElementsByClassName("bounding-box")[0];
  const context = canvas.getContext("2d");
  //const outputImage = document.getElementsByClassName("output-image");
  const uploadedImage = document.getElementsByClassName("uploaded-image")[0];

  const img = new Image();
  img.src = uploadedImage.src;

  const column2 = document.getElementsByClassName("column")[1]; 

  //img.onload = function() {
  //  var imgWidth = img.width;
  //  var imgHeight = img.height;
  //  canvas.width = imgWidth;
  //  canvas.height = imgHeight;
  //  context.drawImage(img, 0, 0, imgWidth, imgHeight);
  //}

  canvas.width = img.width;
  canvas.height = img.height;

  console.log(img.width);
  console.log(img.height);

  context.drawImage(img, 0, 0);

  //image.src = document.getElementsByClassName('uploaded-image')[0].src
  function drawBoundingBox(arr) {
    context.beginPath();
    points = arr[0];
    console.log(points);
    context.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      context.lineTo(points[i][0], points[i][1]);
    }
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.stroke();

    context.font = "16px Arial";
    context.fillStyle = "red";
    context.fillText(arr[1], points[0][0], points[0][1] - 10);
  }
  detectedObjects.forEach((obj) => {
    drawBoundingBox(obj);
  });

  // Convert canvas content to an image and display it
  //const image = new Image();
  //image.src = canvas.toDataURL();
  //document.getElementsByClassName("output-image")[0].src = image.src;
}
