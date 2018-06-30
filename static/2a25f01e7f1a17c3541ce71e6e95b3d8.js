
fetch('/details/1817').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-1817').append(company.name+" ");});})
