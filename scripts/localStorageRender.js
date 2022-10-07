// const dmPref = localStorage.getItem('darkmode')
// const dmIcon = document.querySelector('.dmIcon')

// if(dmPref){
//     const html = document.querySelector('html')
//     html.classList.add('darkMode')
//     dmIcon.src = "/assets/img/sun.svg"
// }


const appliedList = localStorage.getItem('@WebWomen:AppliedVacancies')
if(appliedList){
    let localApplys = JSON.parse(appliedList)
    localApplys.forEach((job) => {

        const id = job.id
        const title = job.title
        const enterprise = job.enterprise
        const location = job.location
        const descrition = job.descrition
        const modalities = job.modalities[1]


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
    });
}