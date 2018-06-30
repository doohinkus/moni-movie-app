
fetch('/details/109091').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-109091').append(company.name+" ");});})
