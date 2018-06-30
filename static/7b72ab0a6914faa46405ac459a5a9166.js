
fetch('/details/316029').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-316029').append(company.name+" ");});})
