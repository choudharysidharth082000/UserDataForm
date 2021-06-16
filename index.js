let malebtn = document.getElementById('malegender');
let femalebtn = document.getElementById('femalegender');

submitbtn = document.getElementById('formuser_btn');
form = document.getElementById('form');
p = document.getElementsByTagName('p');
h3 = document.getElementsByTagName('h3');

mainform = document.getElementById('formuser');
gender = document.getElementById('gender');
resultbutton = document.getElementById('result_button_website');
console.log(resultbutton);

var male = true;

input = document.getElementsByTagName('input');

results = document.getElementById('results');

mainbuttons = document.getElementsByTagName('button');


console.log(mainbuttons[1]);





// for the values int the result section

formname = document.getElementById('formuser_name');
formemail = document.getElementById('formuser_email');
formwebsite = document.getElementById('formuser_website');
formimage = document.getElementById('formuser_imagelink');


femalebtn.addEventListener('click', ()=>
{

    male = false;
    malebtn.classList.toggle('active');
    malebtn.classList.toggle('femalefont');
    femalebtn.classList.toggle('female');
    submitbtn.classList.toggle('btnfemale');
    form.classList.toggle('allfemale');
    

    for(i=0;i<input.length-1;i++)
    {
        input[i].classList.add('femaleplaceholder');
        input[i].style.cssText ='border: 1px solid #e15197'
    }
   
    for(i=0;i<p.length;i++)
    {
        p[i].style.color ='#E15197';
        
    }
    
    for(i=0;i<h3.length;i++)
    {
        h3[i].style.color = '#e15197'
    }
   
    gender.style.cssText ='Border: 1px solid #e15197'
    malebtn.style.cssText = 'Border-left: 1px solid #e15197; Border-bottom: 1px solid #e15197';
    console.log(male);
       mainbuttons[0]

    
    
    


})

malebtn.addEventListener('click', ()=>
{
    male= true;
    malebtn.classList.toggle('active');
    malebtn.classList.remove('femalefont');
    femalebtn.classList.remove('female');
    submitbtn.classList.remove('btnfemale');
    form.classList.remove('allfemale');
    for(i=0;i<input.length-1;i++)
    {
        input[i].classList.remove('femaleplaceholder');
        input[i].style.cssText ='border: 1px solid ##796BCB'
    }
        for(i=0;i<p.length;i++)
    {
        p[i].style.color ='#796BCB'
    }
    for(i=0;i<h3.length;i++)
    {
        h3[i].style.color = '#796BCB'
    }
    gender.style.cssText ='Border: 1px solid #796BCB'
    malebtn.style.cssText = 'Border-left: 1px solid #796BCB; Border-bottom: 1px solid #796BCB';
    console.log(male);
    


})













mainform.addEventListener('submit', (e)=>
{
    e.preventDefault();
    

    // working on this feature to have value from form and displaying it


    if(formname.value == '' || formemail.value == '' || formimage.value == '' ||formwebsite.value=='')
    {
        alert('Fields are empty');

        formemail.value ='';
        formname.value ='';
        formwebsite.value ='';
        formimage.value ='';
    }
    else
    {
        const result_content = document.createElement('div');
        const result_content_upper = document.createElement('div');
        const result_content_image = document.createElement('div');
        const result_content_information = document.createElement('div');
        const result_button = document.createElement('div');
    
    
    
        // making the attributes for the containor of result 
    
    
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        button = document.createElement('button');


        
    
        //putting classes in the attributes 
    
        button.classList.add('result_button_website');
    
        
    
    
    
        // putting values in the attributes 
    
        image.src = formimage.value;
        
        h3.innerText = formname.value;
        p1.innerText = formemail.value;
        if(male == true)
        {
    
            p2.innerText =' Male';
    
        }
        else
        {
            p2.innerText = 'Female';
    
        }
        button.innerText ='View Website'
    
    
    
        
        
    
    
    
    
        // adding classes to the elements
    
    
        result_content.classList.add('result_content');
        result_content_upper.classList.add('result_content_upper');
        result_content_image.classList.add('result_content_image');
        result_content_information.classList.add('result_content_information');
        result_button.classList.add('result_button');
    
    
    
    
       
    
        result_content.appendChild(result_content_upper);
        result_content_upper.appendChild(result_content_image);
        result_content_upper.appendChild(result_content_information);
    
    
        result_content.appendChild(result_button);
    
        //apending the attributes to the the desired divs
    
        result_content_image.appendChild(image);
    
        result_content_information.appendChild(h3);
        result_content_information.appendChild(p1);
        result_content_information.appendChild(p2);
        result_button.appendChild(button);
        console.log(formwebsite.value);
    
    
        button.onclick = ()=>
        {
            window.open(formwebsite.value);
        }
    
    
    
    
        results.appendChild(result_content);
        formname.value = '';
        formemail.value ='';
        // formwebsite.value = '';
        formimage.value= '';
    
    
    
    
    
       
    
    
    
        
    
    
        
    
    
    
        
        
        
    }


    

   

})









