const search_btn = document.getElementById("search_btn");
const searchResult = document.getElementById("searchResult");
 // form k andr agr input aur button diya h to enter dbane se submit ho jayega.. tumhe khud se nhi define krna pdega... form mei reload hota button dbane pr to prevent deafult use kro...
const btns= document.getElementById("btns");

let page = 1;
function searching_img(){
    const input = document.getElementById("input");
    const txt = input.value.trim();
    const loader =  document.getElementById("loader");
    loader.style.display = "block"; // loader dikhega sbse phle..
    
    if(txt === ""){  // jn input mei kuchh nhi hoga..
        loader.style.display = "none";
        searchResult.innerHTML=" "; // purane wale image ko htane k liye..
        document.getElementById("errorMsg").textContent="please enter something...";// ye dikhega screen pr..
        document.getElementById("errorMsg").style.opacity = "1";
        document.getElementById("btns").style.opacity = "0";  // page button nhi dikhega..
        return ;   // code aage execute nhi hoga..
    }
    else{
        document.getElementById("errorMsg").style.opacity = "0";
    }
    const api_key = "PXrc3_FGAliCiyDZUCIaNd54HfZ81FasvUNnGj98W84";
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${txt}&per_page=12&client_id=${api_key}`)

        .then(res => { 
            if(!res.ok){  // jb code 200-299 k bahr ka rhega..
                loader.style.display = "none"; //error aane pr loader hide ho jaye..
                document.getElementById("invalidError").textContent="please enter valid input..."; // ye dikhega screen pr.. 
                document.getElementById("invalidError").style.opacity = "1";
                document.getElementById("btns").style.opacity = "0";  // page button nhi dikhega..
                return ; 
            }
            else{
                document.getElementById("invalidError").style.opacity = "0";
                document.getElementById("btns").style.opacity = "1";  // pages button dikhenge jo css mei opacity 0 h..
                
            }
            return res.json();
        })
                
        .then(data =>{
            console.log("your data is:", data);
            searchResult.innerHTML=" "; // purane wale image ko htane k liye..
            loader.style.display = "none"; //data aane pr loader hide ho jaye..
            
            // fetching image 
            data.results.forEach(result => {
                const imgs = document.createElement("img"); // creating img tag..
                imgs.src = result.urls.small;

                const imageLink = document.createElement("a"); 
                imageLink.href = result.links.html;
                imageLink.target = "_blank"; // image pr click krne se wo nye tab open hoga..
                
                imageLink.appendChild(imgs);
                searchResult.appendChild(imageLink);
                
            });


            
        })
        .catch(error =>{
            loader.style.display = "none";  //error aane pr loader hide ho jaye..
            console.log("laude lg gye", error);
        })

}

search_btn.addEventListener("click",(e)=>{
    e.preventDefault(); // tp prevent page reloading during click on search button..
    searching_img(); // calling function..
})

document.getElementById("one").addEventListener("click", () => {
    page = 1;
    searching_img();
})
document.getElementById("two").addEventListener("click", () => {
    page = 2;
    searching_img();
})
document.getElementById("three").addEventListener("click", () => {
    page = 3;
    searching_img();
})
document.getElementById("four").addEventListener("click", () => {
    page = 4;
    searching_img();
})
document.getElementById("five").addEventListener("click", () => {
    page = 5;
    searching_img();
})
document.getElementById("six").addEventListener("click", () => {
    page = 6;
    searching_img();
})
document.getElementById("seven").addEventListener("click", () => {
    page = 7;
    searching_img();
})
document.getElementById("eight").addEventListener("click", () => {
    page = 8;
    searching_img();
})




