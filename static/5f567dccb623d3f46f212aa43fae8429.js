
console.log(companies);fetch('/details/328425').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-328425').append(company.name+" ");});})
