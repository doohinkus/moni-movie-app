
console.log(companies);fetch('/details/431530').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-431530').append(company.name+" ");});})
