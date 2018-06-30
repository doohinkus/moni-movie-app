
console.log(companies);fetch('/details/365942').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-365942').append(company.name+" ");});})
