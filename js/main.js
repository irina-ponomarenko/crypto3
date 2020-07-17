$(function () {
    $el_languages = $('.languages');
    $el_languages.hover(function () {
        $el_languages.find('li').show();
    }, function () {
        $el_languages.find('li:not(.active)').hide();
    });
});