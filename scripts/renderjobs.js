

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
                    applyButton.type = 'submit'
                    applyButton.innerText = 'Candidatar'

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
