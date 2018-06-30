
fetch('/details/447061').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)!=-1?"text-success":"text-primary";$('#company-447061').append(`<span class=${style}>${company.name}</span>`);});})
