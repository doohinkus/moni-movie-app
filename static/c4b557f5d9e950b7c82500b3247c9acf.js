
fetch('/details/281338').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-281338').append(company.name+" ");});})
