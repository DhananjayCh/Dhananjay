function saveFile(fileDataRaw, Url) {
    var fileData = new FormData();

    if (fileDataRaw != null) {
        fileData.append(fileDataRaw.name, fileDataRaw);
    }

    

    var spsite = getUrlVars()["SPHostUrl"];
    Url = Url + "?SPHostUrl=" + spsite; 
    return new Promise(function (resolve, reject) {
        var xhr =  $.ajax({
            url: Url,
            type: "POST",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: fileData,
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                resolve(err);
            }
        });


    xhr.done(function (data) {
        resolve(data);
    });
    xhr.fail(function (err) {
        reject(err);
    });

        //convertImage(fileData, fileName).then(function (data) {
        //    resolve(data);
        //})
    })
}



function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}