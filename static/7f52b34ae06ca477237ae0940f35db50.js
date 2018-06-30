
fetch('/details/207703').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id)!=-1?"text-success":"text-primary";$('#company-207703').append(`<span class=${style}>${company.name}</span>`);});})
