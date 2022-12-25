// async function post_form(){

//     form={
//         name:'Tom Holland',
//         email:'tomholland@gmail.com',
//         phone:'1234567890',
//         description:'This is the real Tom',
//         services:'[]',
//         formId:'task'
//     }
//     console.log(form)

//     const response=await fetch('https://mint-forms.ieee-mint.org/api/form/addresponse',{
//         method:'POST',
//         body:new URLSearchParams(form),
        
//     })
//     console.log(response)
//     const data=await response.json()
//     console.log(data)
//     return data
// }




//Burger Menu
const burger=document.getElementById('burger')
burger.addEventListener('click',(e)=>{
    const burgermenu=document.getElementById('nav')
    burgermenu.classList.toggle('active')
})



const form=document.getElementById('mainform')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const form_data=new FormData(form)
    form_data.append('formId','task')
    console.log(Array.from(new URLSearchParams(form_data)))

    
    post_form(new URLSearchParams(form_data)).then((stat)=>{
        console.log(stat)
    })
})


async function post_form(form_data){
    const url="https://mint-forms.ieee-mint.org/api/form/addresponse"
    const response=await fetch(url,{
        method:"POST",
        body:form_data
    })  
    return response.status
}


