
console.log(companies);fetch('/details/449450').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-449450').append(company.name+" ");});})
