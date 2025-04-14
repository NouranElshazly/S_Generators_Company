$(document).ready(function () {
    // Initially hide both languages
    $('[lang="en"]').show();  // show English content initially
    $('[lang="ar"]').hide();  // Hide Arabic content initially
    
    // Log to confirm the initial state
    console.log('Page loaded. Both Arabic and English content are hidden.');

    // Check localStorage for saved language, default to 'en' if not found
    const savedLang = localStorage.getItem('language') || 'en'; // if loading saved the choicen language in local storage

    // Set the language on page load (default or saved)
    if (savedLang === 'en') {
                $('[lang="en"]').show();

        $('[lang="ar"]').hide();
        //fixed appeared of two language in same time
    } else if (savedLang === 'ar') {
        $('[lang="en"]').hide();  // hidden Arabic content

        $('[lang="ar"]').show();  // Show Arabic content
    }

    // Set language switcher dropdown to the current language
    $('#language-switch').val(savedLang);

    // Language switch event handler
    $('#language-switch').change(function () {
        var lang = $('#language-switch').val();  // Get the selected language
        // console.log('Language changed to:', lang);  // Log the selected language

        // Save the selected language in localStorage
        localStorage.setItem('language', lang);

        // Hide both languages initially
        $('[lang="ar"]').hide();

        $('[lang="en"]').hide();

        // Show the selected language
        if (lang === 'en') {
            $('[lang="ar"]').hide();

            $('[lang="en"]').show();  // Show English content
        } else if (lang === 'ar') {
            $('[lang="ar"]').show();  // Show Arabic content
            $('[lang="en"]').hide();
        }
    });
});
