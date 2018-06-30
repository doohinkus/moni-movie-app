
fetch('/details/200727').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-200727').append(company.name+" ");});})
