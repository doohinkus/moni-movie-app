
fetch('/details/425136').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{console.log(company,companies)
const style=companies.indexOf(company)!=-1?"text-success":"text-primary";$('#company-425136').append(`<span class=${style}>${company.name}</span>`);});})
