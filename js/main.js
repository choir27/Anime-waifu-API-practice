function DOM(ele){
  return document.querySelector(ele)
}


DOM('#SFW').addEventListener('click',addSFW)



function addSFW(){
  DOM('#sfw').classList.remove('hide')
  DOM('button').addEventListener('click',addSFWImage)
}

function addSFWImage(){
  let value = DOM('#SFW').value.toLowerCase()
  let category = DOM('#sfw').value.toLowerCase()
  fetch(`https://api.waifu.pics/${value}/${category}`)
  .then(res=>res.json())
  .then(data=>{
   let image = document.createElement('img')
   image.src = data.url
   image = DOM('.gridImages').appendChild(image)
   image.addEventListener('click',shrinkIt)
   function shrinkIt(){
    image.classList.add('shrink')
   }
})
}

