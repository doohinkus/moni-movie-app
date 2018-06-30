
fetch('http://localhost:8000/details/325133').then(function(res){console.log(res.json())
return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-133601').append(company);});})
