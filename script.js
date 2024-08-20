

function Addnotes(){
    const Main = document.querySelector('.main')
    const newdiv = document.createElement("div")
    newdiv.classList.add("Storenotes")
    newdiv.innerHTML = `
       <textarea name="" id="addnotes" cols="30" rows="10" placeholder="You can right your notes Here...">
                </textarea>
                <i class="fa-solid fa-trash deletebtn"></i> 
    `
    Main.appendChild(newdiv)
    
   
    const textarea = newdiv.querySelector('textarea')
    textarea.textContent = document.getElementById("mainnotes").value;
    document.getElementById("mainnotes").value = '';

     
    const deletebtn = newdiv.querySelector('.deletebtn')
    deletebtn.addEventListener("click", function(){
         newdiv.remove()
    })
        
    const Clearbtn = document.getElementById("clear");
    Clearbtn.addEventListener("click", function(){
        const Mainnotes = document.getElementById("mainnotes");
        Mainnotes.value = ""
    })
     
}



