
console.log(companies);fetch('/details/527628').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-527628').append(company.name+" ");});})
