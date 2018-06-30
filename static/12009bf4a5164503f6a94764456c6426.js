
fetch('http://localhost:8000/details/325133').then(function(res){return res.json();}).then(function(myJson){$('company-16198').append(myJson);})
