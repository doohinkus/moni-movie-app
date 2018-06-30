
fetch('/details/271714').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-271714').append(company.name+" ");});})
