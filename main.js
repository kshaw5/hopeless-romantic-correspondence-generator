console.log("better poem example - page loaded!");


//detect submit button being clicked - attach a listener to the button - this should ahppen as soon at the page loads
var my_submit_button = document.getElementById('submit-button');
my_submit_button.onmouseup = get_form_inputs;

//get user inputs,
//defined - as soon as the page loads
//use - when the submit button is clicked
function get_form_inputs(){
  //TODO
  console.log('inside get_form_inputs');
  //TODO - collect form input
  var author_name       = document.getElementById('input-name').value;
  var dream_vacation    = document.getElementById('input-vacation').value;
  var hometown          = document.getElementById('input-hometown').value;
  var fav_book          = document.getElementById('input-book').value;
  var quality           = document.getElementById('input-quality').value;
  var fav_restaurant    = document.getElementById('input-restaurant').value;
  var partner_crush     = document.getElementById('input-partner-crush').value;
  console.log(author_name, dream_vacation, hometown, fav_book, quality, fav_restaurant, partner_crush);
  //TODO - then call create poem with the inputs
  create_poem(author_name, dream_vacation, hometown, fav_book, quality, fav_restaurant, partner_crush); // use of function create_poem
  //end of function get_form_inputs
}

// create the poem - based on user inputs
//defined - as soon as the page loads
//use - after user input is collected
function create_poem(author_name, dream_vacation, hometown, fav_book, quality, fav_restaurant, partner_crush){
  //TODO
  console.log('inside create_poem');
  console.log(author_name, dream_vacation, hometown, fav_book, quality, fav_restaurant, partner_crush);
  //TODO create the poem using user inputs from get_form_inputs
  var poem_string = "Dearest " + author_name + "," + "<br><br>" + "In the sennight I’ve spent in "
  + dream_vacation + ", " + "I hope not that you have forgotten me. " + "<br>" + "I’ve made plenty of acquaintances during my forced stay, but my heart aches for your company."
  + "<br>" + "If not for your parent's disapproval, I would be in " + hometown + ", " + "<br>" +
  "laying in the grassy fields with your head upon my lap as you read aloud " + fav_book + "." + "<br><br>" +
  "I may not hold any titles or offer a fancy estate, but I hold you in my every being." + "<br>" +
  "If this letter is any indication of my fervent love for you, let it be taken with no doubt." + "<br><br>" +
  "I miss your wit, your unwavering " + quality + ",  and even the way you only attend afternoon teas with a " + "<br>" + "company who can keep good conversation." +
  "<br><br>" + "With the money I have from working at " + fav_restaurant + ", I hope to obtain a way of passage to you soon, " + "<br>" +
  "whether by carriage, boat, horse, or even by foot." + "<br><br>" + "Let the hope I have keep you steady in yours." + "<br><br>" +
  "With all my love, " + "<br>" + partner_crush
  console.log(poem_string);
  //TODO call display poem when poem is ready
  display_poem(poem_string);
  //end of function create_poem
}
//display the poem to the user
//defined - as soon as the page loads
//use - after button click, then get_form_inputs(), then create_poem(), then this for (var variable in object) {
function display_poem(poem_string){
  //TODO
  console.log('inside display_poem');
  var my_output_para = document.getElementById('poem-paragraph');
  my_output_para.innerHTML = poem_string;
  //TODO show poem to user
  //end of function display_name
}
