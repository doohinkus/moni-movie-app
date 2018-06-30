
fetch('/details/10140').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id.toString())!=-1?"text-success font-weight-bold text-center":"text-center text-secondary";$('#company-10140').append(`<span class=${style}>${company.name}</span>`);});})
