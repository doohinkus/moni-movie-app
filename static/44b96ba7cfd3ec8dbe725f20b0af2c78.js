
fetch('/details/54320').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-54320').append(company.name+" ");});})
