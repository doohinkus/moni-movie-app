
fetch('/details/447061').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-447061').append(company.name+" ");});})
