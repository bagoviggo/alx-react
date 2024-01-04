import $ from "jquery";

// Function to add three paragraphs to the page body
function addParagraphs() {
    const paragraphs = [
        'Holberton Dashboard',
        'Dashboard data for the students',
        'Copyright - Holberton School',
    ];

    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = $('<p>').text(paragraphs[i]);
        $('body').append(paragraph);
    }
}

$(document).ready(function() {
    addParagraphs();
});
