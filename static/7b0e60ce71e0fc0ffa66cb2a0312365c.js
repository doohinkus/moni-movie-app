
fetch('/details/23398').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{console.log(company.id,companies.indexOf(company.id))
const style=companies.indexOf(company.id)!=-1?"text-success":"text-primary";$('#company-23398').append(`<span class=${style}>${company.name}</span>`);});})
