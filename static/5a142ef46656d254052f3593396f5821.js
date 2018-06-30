
fetch('/details/23398').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id.toString())!=-1?"text-success":"text-primary";$('#company-23398').append(`<span class=${style}>${company.name}</span>`);});})
