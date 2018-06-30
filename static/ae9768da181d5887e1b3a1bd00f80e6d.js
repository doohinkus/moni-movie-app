
fetch('/details/258509').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-258509').append(company.name+" ");});})
