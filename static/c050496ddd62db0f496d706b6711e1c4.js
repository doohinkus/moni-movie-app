
fetch('/details/381284').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-381284').append(company.name+" ");});})
