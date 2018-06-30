
fetch('/details/23398').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-23398').append(company.name+" ");});})
