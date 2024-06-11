import { auth } from './firebase.js'
import { } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'

document.addEventListener('DOMContentLoaded',()=>{
   const emailInput = document.querySelector('.emailAdmin')
   const senhaInput = document.querySelector('.senhaAdmin')
   const formLogin = document.querySelector('.form-login')
   const linkSair = document.querySelector('.link-admin')
   const formPost = document.queryselector('.form-post')
   const tituloLogin = document.queryselector('.titulo-login')

   if(formLogin){
    formLogin.addEventListener('submit',(e) => {
    e.preventDefault()
   const email = emailInput.value
   const password = senhaInput.value
   signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{

    const user = userCredential.user
    emailInput.value = ''
    senhaInput.value = ''
    alert('Deu certo')
    console(user)

    })
    .cath((error)=>alert(error.message))

  })
   }

   onAuthstateChanged(auth,(user)=>{
    if(user){
        const uid = user.uid
        linkAdmin.classList.add('hide')
        linkSair.classList.remove('hide')
        linkAdmin.classList.add('hide')
        linkSair.classList.remove('hide')
        tituloLogin.innerHTML = 'ACESSO AO ADMINISTRADOR LIBERADO'
        
    }else{
        linkAdmin.classList.remove('hide')
        linkSair.classList.add('hide')
        linkAdmin.classList.remove('hide')
        linkSair.classList.add('hide')
        tituloLogin.innerHTML = 'FAÇA O LOGIN COMO ADMINISTRADOR'
    }
   })
    
})
