
fetch('/details/6477').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id)!=-1?"text-success":"text-primary";$('#company-6477').append(`<span class=${style}>${company.name}</span>`);});})
