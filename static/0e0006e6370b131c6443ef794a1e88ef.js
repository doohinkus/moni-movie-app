
fetch('/details/152760').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id.toString())!=-1?"text-success font-weight-bold text-center ml-1":" ml-1 text-center text-secondary";$('#company-152760').append(`<span class="${style}">${company.name}</span>`);});})
