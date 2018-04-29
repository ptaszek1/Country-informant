$(function () {





    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all',
        dataType: 'json',
        data: {
            name: name,

        }
    }).done(function (el) {

        const $search = $('#search');


        console.log(el.population);



        // Generate informations

        el.forEach(function (value) {

            // Get currency from every country

            const arr = [];
            value.currencies.forEach(function (e) {
                arr.push(e.name);
            });

            // Sorting :
            const arr2 = [];
            let items = $(value.population).get();
            items.sort(function(a, b) {
                return a - b;
            });
            console.log(items);
            arr2.push(items[0]);
            console.log(arr2)


            const $names = $(`
                <h1>${value.name}</h1>
                <div class="description" style="display: none;">
                <p>Ilość mieszkańców: ${value.population}</p>
                <p>Region: ${value.region}</p>
                <p>Podregion: ${value.subregion}</p>
                <p>Stolica: ${value.capital}</p>
                <p>Powierzchnia: ${value.area}m&sup2;</p>
                <p>Numer Kierunkowy: ${value.callingCodes}</p>
                <p>Strefa czasowa: ${value.timezones}</p>
                <p>Waluta: ${arr}</p>
                <img src="${value.flag}">
                
                </div>
                `);
            $search.append($names);
            $names.on('click', function () {
                $(this).next().toggle()
            });
        });




        $(".inputSearch").on("keyup", function() {
            let g = $(this).val();
            $("h1").each( function() {
                let s = $(this).text().toLowerCase();
                if (s.indexOf(g)!=-1) {
                    $(this).fadeIn();
                }
                else {
                    $(this).fadeOut();
                }
            })
        })

    });




});