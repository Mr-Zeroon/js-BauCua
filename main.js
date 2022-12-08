function main(){
    const arr = [
    "./images/bau.jpg",
    "./images/tom.png",
    "./images/ca.jpg",
    "./images/nai.jpg",
    "./images/bau.jpg",
    "./images/cua.jpg"]
const eleBtnXocDia = document.querySelector('.js_xoc_dia');
const eleXoc=document.querySelector('.xoc');
const eleImg = document.querySelector('.js_result_Img');
const eleImg2 = document.querySelector('.js_result_Img2');
const eleImg3 = document.querySelector('.js_result_Img3');
eleBtnXocDia.addEventListener('click',()=>{
    eleXoc.style.display = 'block'
    eleImg.style.display = 'none'
    eleImg2.style.display = 'none'
    eleImg3.style.display = 'none'
    setTimeout(()=>{
    const ramdomNumber = Math.floor(Math.random()*6);
    const ramdomNumber2 = Math.floor(Math.random()*6);
    const ramdomNumber3 = Math.floor(Math.random()*6);
    eleXoc.style.display = 'none'

    eleImg.style.display = 'block'
    eleImg2.style.display = 'block'
    eleImg3.style.display = 'block'

    eleImg.src = arr[ramdomNumber]
    eleImg2.src = arr[ramdomNumber2]
    eleImg3.src = arr[ramdomNumber3]
    },1000)
})
}
main()