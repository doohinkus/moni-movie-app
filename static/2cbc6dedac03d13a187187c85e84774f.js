
fetch('/details/365942').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.name)!=-1?"text-success":"text-primary";$('#company-365942').append(`<span class=${style}>${company.name}</span>`);});})
