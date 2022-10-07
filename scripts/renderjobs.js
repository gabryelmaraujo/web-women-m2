

function jobsRender(arr = jobsData){
    arr.forEach((job)=>{

        const cardsUl = document.querySelector('.cardsUl')

        const id = job.id
        const title = job.title
        const enterprise = job.enterprise
        const location = job.location
        const descrition = job.descrition
        const modalities = job.modalities[1]

//CREATING TAGS
    let cardLi = document.createElement('li')
        cardLi.classList.add('cardLi')
        cardLi.id = id

        let jobTitleDiv = document.createElement('div')
            jobTitleDiv.classList.add('jobTitle')

            let jobTitleParag = document.createElement('p')
                jobTitleParag.innerText = title


        let companyInfosDiv = document.createElement('div')
            companyInfosDiv.classList.add('companyInfos')

            let compNameParag = document.createElement('p')
                compNameParag.classList.add('companyName')
                compNameParag.innerText = enterprise

            let compCityParag = document.createElement('p')
                compCityParag.classList.add('companyCity')
                compCityParag.innerText = location


        let jobDescriptDiv = document.createElement('div')
            jobDescriptDiv.classList.add('jobDescript')
            
            let jobDescripParag = document.createElement('p')
                jobDescripParag.innerText = descrition
                
        let cardFooter = document.createElement('footer')
            cardFooter.classList.add('cardFooter')
        
            let jobTypeDiv = document.createElement('div')
                jobTypeDiv.classList.add('jobType')

                let typeParag = document.createElement('p')
                    typeParag.innerText = modalities

            let applyButtonDiv = document.createElement('div')
                applyButtonDiv.classList.add('applyButton')

                let applyButton = document.createElement('button')
                    applyButton.classList.add('applyBttn')
                    applyButton.type = 'submit'
                    // applyButton.innerText = 'Candidatar'

//APPLY BUTTON EVENT

if(alreadyApply(job) >= 0){
    applyButton.innerText = 'Remover candidatura'
}else{
    applyButton.innerText = 'Candidatar'
    
}

applyButton.addEventListener('click', ()=>{
    applyAndRemove(job, applyButton)
    if(applyButton.innerText == 'Remover candidatura'){
        let asideUl = document.querySelector('.selectedUl')

        let asideLi = document.createElement('li')
            asideLi.classList.add('selectedLi')
            asideLi.id = id
    
            let asideHeaderDiv = document.createElement('div')
                asideHeaderDiv.classList.add('selectedLiHeader')
    
                let asideHeaderTitle = document.createElement('p')
                    asideHeaderTitle.classList.add('selectedTitle')
                    asideHeaderTitle.innerText = title
    
                let bttnRemove = document.createElement('button')
                    bttnRemove.classList.add('selectedRemove')
                    
                    let imgRemove = document.createElement('img')
                        imgRemove.src = "/assets/img/trash.svg"
                        imgRemove.alt = 'Remover vaga'
                //BTTN REMOVE EVENT
                    bttnRemove.addEventListener('click', ()=>{
                        applyAndRemove(job, applyButton)
                        
                        asideLi.remove()
                    })
    
    
            let companyDiv = document.createElement('div')
                companyDiv.classList.add('selectedCompany')
    
                let companyName = document.createElement('p')
                    companyName.classList.add('companyName')
                    companyName.innerText = enterprise
    
                let companyCity = document.createElement('p')
                    companyCity.classList.add('companyCity')
                    companyCity.innerText = location
    
    //APPENDS
    companyDiv.append(companyName, companyCity)
    
    bttnRemove.append(imgRemove)
    asideHeaderDiv.append(asideHeaderTitle, bttnRemove)
    
    asideLi.append(asideHeaderDiv, companyDiv)
    
    asideUl.append(asideLi)
    }else{
        let selectedUl = document.querySelector('.selectedUl')
            ulChilds = Array.from(selectedUl.children)
            ulChilds.forEach((li)=>{
                if(li.id == id){
                    li.remove()
                }
            })
    }

})

//APPENDS
applyButtonDiv.append(applyButton)
jobTypeDiv.append(typeParag)
cardFooter.append(jobTypeDiv, applyButtonDiv)

jobDescriptDiv.append(jobDescripParag)

companyInfosDiv.append(compNameParag, compCityParag)

jobTitleDiv.append(jobTitleParag)

cardLi.append(jobTitleDiv, companyInfosDiv, jobDescriptDiv, cardFooter)

cardsUl.append(cardLi)


    })


}
jobsRender()

// function cardsUlEmpty(){
//     const cardsUl = document.querySelector('.selectedUl')
//     const emptyUlParag = document.querySelector('.emptyUlParag')
//     if(cardsUl.childElementCount == 0){
//         emptyUlParag.classList.add('emptyUlHidden')
//     }else{
//         emptyUlParag.classList.remove('emptyUlHidden')
//     }
// }
// cardsUlEmpty()