var inFormOrLink;
$('a').live('click', function() { inFormOrLink = true; });
$('form').on('submit', function() { inFormOrLink = true; });

$(window).bind("beforeunload", function() { 
    return inFormOrLink ? "Do you really want to close?" : null; 
})