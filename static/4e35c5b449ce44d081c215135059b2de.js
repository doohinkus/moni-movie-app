
fetch('/details/112346').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-112346').append(company.name+" ");});})
