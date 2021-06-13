let malebtn = document.getElementById('malegender');
let femalebtn = document.getElementById('femalegender');

submitbtn = document.getElementById('formuser_btn');
form = document.getElementById('form');
p = document.getElementsByTagName('p');
console.log(p);
gender = document.getElementById('gender');

input = document.getElementsByTagName('input');
console.log(input.length);










femalebtn.addEventListener('click', ()=>
{
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
    for(i=0;i<input.length;i++)
    {
        console.log(input[i]);
    }
   
    for(i=0;i<p.length;i++)
    {
        p[i].style.color ='#E15197'
    }
    gender.style.cssText ='Border: 1px solid #e15197'
    malebtn.style.cssText = 'Border-left: 1px solid #e15197; Border-bottom: 1px solid #e15197';
    
    


})

malebtn.addEventListener('click', ()=>
{
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
    gender.style.cssText ='Border: 1px solid #796BCB'
    malebtn.style.cssText = 'Border-left: 1px solid #796BCB; Border-bottom: 1px solid #796BCB';


})
