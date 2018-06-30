
fetch('/details/417261').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-417261').append(company.name+" ");});})
