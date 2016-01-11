$(document).ready(function () {
    $('#search').keyup(function () {
        var searchField = $('#search').val();
        var regex = new RegExp(searchField, 'i');

        $.getJSON('products.json', function (data) {
            var output = '<ul class="searchResults">';

            $.each(data, function (key, val) {
                if ((val.name.search(regex) !== -1 ||
                    val.about.search(regex) !== -1)) {
                    output += '<li>'
                        + '<p>'
                        + '<strong>'
                        + val.name
                        + '</strong>'
                        + '</p>'
                        + '<p>'
                        + val.about
                        + '</p>'
                        + "<img src='Images/" + val.url_image + "'/>'"
                        + '</li>';
                }
            });
            output += "</ul>";
            $('#productDiv').html(output);
        });
    });
});


