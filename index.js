$('#search-btn').click(function(){
    let inputText = document.querySelector("input").value;
    $.ajax({

        method: 'GET',

        url: 'https://pokeapi.co/api/v2/pokemon/' + inputText + '/',

        dataType: 'json'

    })

    .done(function(data){
        console.log(data);
        document.querySelector("#pokemon").innerHTML = '<div class="card" style="width: 18rem;"> ' +
        '<div class="card-body">' +
        '   <h5 class="card-title"> ' + data.name + ' </h5>'+
        '   <p class="card-text"> ' + data.height + ' </p> '+
        '   <p class="card-text"> ' + data.weight + ' </p> '+
        '   <p class="card-text"> ' + data.abilities[0].ability.name + ' </p> '+
        '</div>' +
        '</div>';

        $.ajax({

            method: 'GET',
    
            url: data.abilities[0].ability.url,
    
            dataType: 'json'
    
        })
    
        .done(function(data){
            console.log(data);
            document.querySelector("#poke").innerHTML = '<div class="card" style="width: 18rem;"> ' +
            '<div class="card-body">' +
             '   <h5 class="card-title"> ' + data.pokemon[1].pokemon.name + ' </h5>'+
         '   <h5 class="card-title"> ' + data.pokemon[2].pokemon.name + ' </h5>'+
            '</div>' +
            '</div>';
            
        })
    
        .fail(function(){
            console.log('Error');
        })

    })

    .fail(function(){
        console.log('Error');
    })

});