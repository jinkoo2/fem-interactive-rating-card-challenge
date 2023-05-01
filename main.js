
function print(str){
    console.log(str)
}


var selected_index = -1;

// listen on click event
// record the user selection
var buttons = document.querySelectorAll('button.circle')
for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click',e=>{        
        // deselect all, but the current button
        for(let j=0; j<buttons.length; j++)
            if(i===j) {
                buttons[j].classList.add('selected')
                selected_index = j;
                document.querySelector('#selected_rating').innerHTML = selected_index+1;
            }   
                
            else
                buttons[j].classList.remove('selected')
    })
}   

var submit_btn = document.querySelector('#submit')
submit_btn.addEventListener('click', e=>{
    // when clicked, hide the rating card, so that it pops up

    if(selected_index === -1){
        alert('Please select a rathing!')
    }else{
        document.querySelector('.rating').style.display = 'none';
    }


})


