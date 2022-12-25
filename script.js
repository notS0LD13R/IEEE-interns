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


const burger=document.getElementById('burger')
console.log(burger)
burger.addEventListener('click',(e)=>{
    const burgermenu=document.getElementById('nav')
    burgermenu.classList.toggle('active')
})
