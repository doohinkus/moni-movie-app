
fetch('/details/13407').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-13407').append(company.name+" ");});})
