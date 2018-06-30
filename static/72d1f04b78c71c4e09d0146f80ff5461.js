
console.log(companies);fetch('/details/290751').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-290751').append(company.name+" ");});})
