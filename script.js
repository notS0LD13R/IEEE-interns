

//Burger Menu
const burger=document.getElementById('burger')
burger.addEventListener('click',(e)=>{
    const burgermenu=document.getElementById('nav')
    burgermenu.classList.toggle('active')
})


//submit listener
const form=document.getElementById('mainform')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let form_data=new FormData(form)
    const check_value=checkdata(form_data)


    if (check_value[0]){
        show_form_error(check_value[1],reset=true)
        form_data=convert_data(form_data)
        console.log(Array.from(form_data.values()))
        post_form(form_data).then((stat)=>{
            console.log("Status of post:",stat)
            if(stat===200){
                form.classList.add('success')
                form.classList.remove('fail')
            }
            else{
                form.classList.add('fail')
                form.classList.remove('success')
            }

        })
    }
    else
        show_form_error(check_value[1])

        
})


//visualise invalid outputs on the site
function show_form_error(form_error,reset=false){
    
    form.classList.add('fail')
    form.classList.remove('success')
    
    doms={
        'name':document.getElementById('Name'),
        'email':document.getElementById('Email'),
        'phone':document.getElementById('PhoneNo'),
        'description':document.getElementById('Description'),
    }
    
    for (i of Object.keys(form_error)){
        if(reset){
            doms[i].classList.remove('error');
        }
        else if(!form_error[i]){
            doms[i].classList.add('error');
        }
    }
    
}

//convert formdata values to be suitable for api post
function convert_data(form_data){
    const mainkey=['name','email','phone','description']
    const services=[]
    let temp=Array.from(form_data.keys()) 
    for (i of temp){
        if (!mainkey.includes(i)){
            form_data.delete(i)
            services.push(i)
        }
    }

    form_data.append('services',`${services}`)
    form_data.append('formId','task')

    return new URLSearchParams(form_data) 

}

//check if the values in the inputs are valid
function checkdata(form_data){
    const flag={'name':true,'email':true,'phone':true,'description':true}
    const pattern={'name':/^[a-zA-z ]{2,30}$/g,'email':/\w+@[a-z]+.[a-z]{1,3}$/g,'phone':/^\d{10}$/g,'description':/\w+/g}

    for (i of form_data.keys()){
        if (i in flag)
            flag[i]=pattern[i].test(form_data.get(i))
    }
    
    return [Object.values(flag).every(i=>i===true),flag]
    
}


async function post_form(form_data){
    const url="https://mint-forms.ieee-mint.org/api/form/addresponse"
    const response=await fetch(url,{
        method:"POST",
        body:form_data
    })  
    return response.status
}


