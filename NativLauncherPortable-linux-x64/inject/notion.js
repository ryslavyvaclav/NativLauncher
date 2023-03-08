/* notion.js */

// First, we replace all placeholders in our Notion page to add our interactive buttons to it.
window.onload = 
  setTimeout(function(){
    let htmlCode = document.body.getElementsByTagName("*");
    for (let i = 0; i <= htmlCode.length; i++) {
      if(htmlCode[i] && htmlCode[i].innerHTML){
        let match = htmlCode[i].innerHTML.match(/\[notionbutton\]([\s\S]*?)\[\/notionbutton\]/);
        if (match && typeof match == 'object'){
          let btnarray = match['1'].split("|");
          let btn_text = btnarray[0];
          let btn_action = btnarray[1];
          htmlCode[i].innerHTML = htmlCode[i].innerHTML.replace(match['0'], "<button class=\"btn-notion\" btnaction=\"" + btn_action + "\"  >"+btn_text+"</button>");
        }
      }
    }
    let buttons = document.querySelectorAll(".btn-notion");
    for (let j=0; j <= buttons.length; j++){
      if(buttons[j].hasAttribute("btnaction")){
        buttons[j].onclick = function () { runAction(buttons[j].getAttribute("btnaction")) };
      }
    }
  }, 3000);

// And then we define your action below, according to our needs
function runAction(action) {
    switch(action){
      case '1':
        alert('Nice One!');
        break;
      default:
        alert('Hello World!');
    }
}