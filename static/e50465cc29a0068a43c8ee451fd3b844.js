
fetch('/details/336843').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-336843').append(company.name+" ");});})
