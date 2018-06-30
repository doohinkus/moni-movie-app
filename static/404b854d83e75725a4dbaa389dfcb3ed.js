
fetch('/details/58462').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-58462').append(company.name+" ");});})
