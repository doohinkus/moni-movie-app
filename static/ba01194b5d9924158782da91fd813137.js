
fetch('/details/343668').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{console.log(company.id,companies)
const style=companies.indexOf(company.name)!=-1?"text-success":"text-primary";$('#company-343668').append(`<span class=${style}>${company.name}</span>`);});})
