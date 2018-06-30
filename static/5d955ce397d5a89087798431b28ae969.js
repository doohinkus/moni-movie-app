
fetch('/details/316015').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-316015').append(company.name+" ");});})
