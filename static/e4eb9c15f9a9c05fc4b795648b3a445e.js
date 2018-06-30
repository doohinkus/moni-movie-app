
fetch('/details/14197').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-14197').append(company.name+" ");});})
