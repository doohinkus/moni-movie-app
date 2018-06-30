
fetch('/details/496912').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-496912').append(company.name+" ");});})
