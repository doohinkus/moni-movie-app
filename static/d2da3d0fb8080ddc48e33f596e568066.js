
fetch('/details/226857').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-226857').append(company.name+" ");});})
