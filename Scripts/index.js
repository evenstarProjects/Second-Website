/* Button Method Broken Down Into Steps:
1. document.querySelector is good method for IDs and Classes.
2. const headerButton = document.querySelector('.headerButton'); retrieves the Button from the HTML using its Class name.
3. if (headerButton) { is a safety check: ensures variable headerButton isn't null. If it doesn't exist in the HTML, the JS won't work.
4. headerButton.addEventListener('click', (event) => { listens for a cue (the button click) and executes the function if heard.
    - (event) => {} is the function.
5. event.preventDefault(); stops the button's default behaviour. 
    - by default, the browser instant jumps. Smooth Scrolling is a custom behaviour. It mustn't be overridden by the default behaviour.
6. const target = document.querySelector('#headerButtonDestination'); identifies the element that is the target destination.
7. target.scrollIntoView({ behavior: 'smooth', block: 'start' }); tells browser to scroll to the target.
    behavior: "smooth" is the bit that tells browser to do it smoothly, not instantaneously.
    block: "start" tells browser to align top edge of target element with top edge of viewport.
        "center" would align to centre. "end" would align to bottom.
*/

// HEADER BUTTON
// Select button using class
const headerButton = document.querySelector('.headerButton');

// Add event listener to button
if (headerButton) { 
    headerButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Smooth Scroll to target
        const target = document.querySelector('#headerButtonDestination');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ABOUT US SECTION BUTTON
const aboutUsButton = document.querySelector('.aboutUsButton');

if (aboutUsButton) { 
    aboutUsButton.addEventListener('click', (event) => {
        event.preventDefault();

        const target = document.querySelector('#aboutUsButtonDestination');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}