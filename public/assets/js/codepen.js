var data = {
        title : "Wicked Blocks",
        description  : "Snippets",
        html  : "",  // My Starting HTML
        html_pre_processor : "",
        css : "",  // My Starting CSS
        css_pre_processor : "",  // Maybe start it with scss?
        css_starter : "",
        css_prefix :  "",
        js : "",  // My Starting JS
        js_pre_processor : "",
        js_modernizr :  "",
        js_library :  "",
        html_classes  :  "",
    css_external: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css",
        // External CSS File - http://brandonbrule.com/css/style.css
    js_external: ""
    // External Link to JS File - Whatever library you want really.
};
var dataString = JSON.stringify(data);

// Get Input and Append
var data_input = document.getElementById('data-input');
data_input.value = dataString;