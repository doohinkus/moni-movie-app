
fetch('http://localhost:8000/details/325133').then(function(res){return res.json();}).then(function(myJson){console.log(myJson)
myJson.production_companies.forEach(company=>{$('#company-16198').append(company);});})
