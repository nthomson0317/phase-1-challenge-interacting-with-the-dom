
    //grab the necessary objects by their IDs
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const pause = document.getElementById('pause');
    const heart = document.getElementById('heart');
    // const likes = document.getElementsByClassName('likes')[0];
    // const comment_form = document.getElementById("comment-form")
    // const comments = document.querySelector('#list')
    // let pasued = false
    // let numberTracker = {}

 


    let interval = setInterval(incrementCounter,1000)

//add plus and minus counters on click

//INCREMENT COUNTER
function incrementCounter(event) {
    counter.innerText = parseInt(counter.innerText) + 1

//DECREMENT COUNTER
function decrementCounter(event) {
    counter.innerText = parseInt(counter.innerText) -1

}
 //add event listeners on relevant objects
 plus.addEventListener("click", incrementCounter)
 minus.addEventListener("click", decrementCounter)


    //add pause counter on click
    // pause.addEventListener("click", togglePaused)

    //add hearts on click
    // heart.addEventListener("click", addLike)


    // pause.addEventListener("click", togglePaused)
    // heart.addEventListener("click", addLike)
    // comment_form.addEventListener("submit", handleSubmit)


}


















 