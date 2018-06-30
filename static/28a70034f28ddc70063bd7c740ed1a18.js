
fetch('/details/109091').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.name)!=-1?"text-success":"text-primary";$('#company-109091').append(`<span class=${style}>${company.name}</span>`);});})
