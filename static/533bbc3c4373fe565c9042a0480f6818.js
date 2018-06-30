
fetch('/details/11317').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-11317').append(company.name+" ");});})
