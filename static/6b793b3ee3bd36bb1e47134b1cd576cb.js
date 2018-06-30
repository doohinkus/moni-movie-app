
fetch('/details/347375').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-347375').append(company.name+" ");});})
