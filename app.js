const item=document.querySelector("#item")
const todoBox=document.querySelector("#todobox")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter")  //event.key will tell you about the key you are pressing
        {
            addtodo(this.value)  //this refering to the parent object
            this.value=""
        }
    }
)
const addtodo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
        ${item}
        <i class="fas fa-times"></i>
`;
listItem.querySelector("i").addEventListener(
    "click",
    function(){
        listItem.remove()
    }
)
todoBox.appendChild(listItem);
}