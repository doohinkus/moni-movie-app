
fetch('/details/59860').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{console.log(company.id,companies)
const style=companies.indexOf(company.id)!=-1?"text-success":"text-primary";$('#company-59860').append(`<span class=${style}>${company.name}</span>`);});})
