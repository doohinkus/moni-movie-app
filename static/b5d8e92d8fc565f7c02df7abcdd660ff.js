
console.log(companies);fetch('/details/412988').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-412988').append(company.name+" ");});})
