const search=document.getElementById("search");
const tableBody =document.getElementById("tbody");
const searchbtn=document.getElementById("button");
const AZ=document.getElementById("sortAZ");
const ZA=document.getElementById("sortZA");
const Marks=document.getElementById("sortMarks");
const Pass=document.getElementById("sortPass");
const Class=document.getElementById("sortClass");
const Gender=document.getElementById("sortGender");
let val=[];
// window.onload =load(e);

// function search(){
    
// }











const loading=async searched=>{
    const url=`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;
    const res=await fetch(url);
    const alldata=await res.json();
    console.log(alldata);
    
    




    // ============filter======
    let found=alldata.filter(data=>{
        const regex=new RegExp(`^${searched}`,'gi');
        return data.first_name.match(regex)|| data.last_name.match(regex)|| data.email.match(regex);
    });


    // found=alldata.filter(data=>{
    //     const reg=
    //     return data.sort(regex);
    // });

    
    foundOut(found);
    // AZs(alldata);

};

    //    ==============html=============



 const foundOut=(found)=>{
    
    if(found.length> 0){
        const tbody=found.map(values=>
        `<tr>
                 <td>${values.id}</td>
                 <td class="sep"><div> <img src="${values.img_src}" alt="student photo"> </div>
                 <div> ${values.first_name} ${values.last_name} </div></td>
                 <td>${values.gender}</td>
                 <td>${values.class}</td>
                 <td>${values.marks}</td>
                 <td>${values.passing}</td>
                 <td>${values.email}</td>
                
      </tr>` 

        ).join('');
        // console.log(tbody);

        tableBody.innerHTML= tbody;
        
    }
}

 
// const selelctCategory=(e,category)=>{
//     let option =document.querySelectorAll(".option");
//     PushSubscriptionOptions.forEach((element)=>{
//         element.classList.remove("active");
//     })
// }















// searchbtn.addEventListener('click',search);



// ============================filters======================
search.addEventListener('input',()=>loading(search.value))
// AZ.addEventListener('click',AZs());
window.addEventListener("load", (event) =>loading(search.value));

AZ.addEventListener('onclick',()=>loading(search.value));











