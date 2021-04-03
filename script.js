const navMenu=document.getElementById('nav-manu'),
      toggleMenu=document.getElementById('nav-toggle'),
      closeMenu=document.getElementById('nav-close')
 
//show Menu
      toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
      })  
      
//Remove Menu
   
      closeMenu.addEventListener('click', ()=>{
      navMenu.classList.remove('show')
      })  


//====Remove Menu===
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*============>Scroll Sections Active Link<=========== */

const sections =document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)
function scrollActive() {
    const scrollY =window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight
        const sectionTop =current.offsetTop -50
        sectionId =current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__manu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__manu a[href*='+ sectionId +']').classList.remove('active')
        }

    })

}
