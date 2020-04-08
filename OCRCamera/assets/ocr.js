function getDataFromImage(imgData, apikey, callback) {
  getDataFromBoth(imgData, null, apikey, callback);
}
function getDataFromCamera(imgDataBase64, apikey, callback) {
  getDataFromBoth(null, imgDataBase64, apikey, callback);
}
function getDataFromBoth(imgData, imgDataBase64, apikey, callback) {
  //console.log(imgData);
  var formData = new FormData();
  //
  if(imgData != null) {
    formData.append("file", imgData.file); // image from jpg or png (FROM DROP)
  }
  if(imgDataBase64 != null) {
    console.log(imgDataBase64);
    formData.append("base64image", imgDataBase64.elt.toDataURL('image/png', 1.0)); // image encodee from video capture (VIDEO CAPTURE)
  }
  formData.append("language", "eng"); // eng
  formData.append("apikey", apikey); // ADD API KEY !!!!
  formData.append("isOverlayRequired", true);
  //
  $.ajax({
    url: "https://api.ocr.space/parse/image",
    data: formData,
    dataType: 'json',
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',
    timeout: 30000,
    success: function(ocrParsedResult) {
      console.log("success");
      //Get the parsed results, exit code and error message and details
      var parsedResults = ocrParsedResult["ParsedResults"];
      var ocrExitCode = ocrParsedResult["OCRExitCode"];
      var isErroredOnProcessing = ocrParsedResult["IsErroredOnProcessing"];
      var errorMessage = ocrParsedResult["ErrorMessage"];
      var errorDetails = ocrParsedResult["ErrorDetails"];
      var processingTimeInMilliseconds = ocrParsedResult["ProcessingTimeInMilliseconds"];
      //If we have got parsed results, then loop over the results to do something
      // console.log(parsedResults);
      // console.log(ocrExitCode);
      // console.log(isErroredOnProcessing);
      // console.log(errorMessage);
      // console.log(errorDetails);
      // console.log(processingTimeInMilliseconds);
      if (parsedResults != null) {
        //console.log();
        //Loop through the parsed results
        $.each(parsedResults, function(index, value) {
          var exitCode = value["FileParseExitCode"];
          var parsedText = value["ParsedText"];
          var errorMessage = value["ParsedTextFileName"];
          var errorDetails = value["ErrorDetails"];

          var textOverlay = value["TextOverlay"];
          var pageText = '';
          switch (+exitCode) {
            case 1:
              pageText = parsedText;
              break;
            case 0:
            case -10:
            case -20:
            case -30:
            case -99:
            default:
              pageText += "Error: " + errorMessage;
              break;
          }
          //console.log("xxx");
          //console.log(textOverlay);
          //console.log(textOverlay.ParsedText);
          callback(textOverlay);
          // $.each(textOverlay["Lines"], function(index, value) {
          //   //
          //   //console.log("-----");
          //   //console.log(value);
          //   //console.log("-----");
          //   $.each(value.Words, function(index, value2) {
          //     console.log(value2.WordText);
          //     $("body").append("<br/>");
          //     $("body").append(value2.WordText);
          //   });
          //   //$("body").append("//"+value);
          // });
          //
        });
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("error: " + jqXHR + " /// " + textStatus + " /// " + errorThrown);
      console.log(jqXHR);
    },
  });
}
