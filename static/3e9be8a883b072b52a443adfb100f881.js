
fetch('/details/316002').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-316002').append(company.name+" ");});})
