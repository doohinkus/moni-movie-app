
fetch('/details/246655').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{console.log(company.id,companies)
const style=companies.indexOf(company.name)!=-1?"text-success":"text-primary";$('#company-246655').append(`<span class=${style}>${company.name}</span>`);});})
