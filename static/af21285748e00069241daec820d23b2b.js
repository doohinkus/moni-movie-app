
fetch('/details/343668').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-343668').append(company.name+" ");});})
