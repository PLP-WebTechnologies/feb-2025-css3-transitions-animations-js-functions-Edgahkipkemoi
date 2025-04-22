document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('click');

    // Check if color preferences exists in localStorage
    const storedColor = localStorage.getItem('buttonColor');
    if(storedColor){
        button.style.backgroundColor = storedColor;
    }

    //Add event listener to change color and trigger animation
    button.addEventListener('click', () => {
        const newColor = button.style.backgroundColor === 'rgb(76, 175, 80)' ? 'blue' : 'rgb(76, 175, 80)';
        button.style.backgroundColor = newColor;

        // Store new color preference in localStorage
        localStorage.setItem('buttonColor', newColor);

        //Trigger animation by adding a class for the animation
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        },500 ); //Remove the animation class after it finishes

    });
});
