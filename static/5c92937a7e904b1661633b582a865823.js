
fetch('/details/381284').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{/console.log(company.id,companies)
const style=companies.indexOf(company.id)!=-1?"text-success":"text-primary";$('#company-381284').append(`<span class=${style}>${company.name}</span>`);});})
