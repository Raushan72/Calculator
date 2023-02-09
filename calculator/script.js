
let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {//
            string = eval(string);//
            document.querySelector('input').value = string;//
        }
        else if (e.target.innerHTML == "c") {//
            string = "";//
            document.querySelector('input').value = string;//
        }
        else {//
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});




















/* <script>
function myFunction(event) {
  let text = event.target.nodeName;
  document.getElementById("demo").innerHTML = text;
}
</script> */

































// let string = "";
// let buttons = document.querySelectorAll('.button');
// console.log("buttons", buttons);
// console.log("buttonsArray", Array.from(buttons));

// buttons.forEach((button) => {
//     button.addEventListener('click', (event)=>{
//         if(event.target.innerHTML == '='){    //
//             string = eval(string);        //
//         document.querySelector('input').value = string;  //
//         }
//         else if(event.target.innerHTML == 'c'){    //
//             string = "";        //
//         document.querySelector('input').value = string;  //
//         }
//         else{
//         console.log(event.target);
//         string = string + event.target.innerHTML;
//         document.querySelector('input').value = string;
//     }
//     });
// });