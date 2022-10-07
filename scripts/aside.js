


function getLocalJobs(){
    if(JSON.parse(localStorage.getItem('@WebWomen:AppliedVacancies'))){
        return JSON.parse(localStorage.getItem('@WebWomen:AppliedVacancies'))
    }else{
        return []
    }
}


function alreadyApply(job){
    return getLocalJobs().findIndex(element => element.id === job.id)
}

function applyAndRemove(job, button){
    const appliedVancies = alreadyApply(job)
    let selectedJobs = getLocalJobs()

    if(appliedVancies < 0){
        selectedJobs.push(job)
        button.innerText = 'Remover candidatura'
    }else{
        selectedJobs.splice(appliedVancies, 1)
        button.innerText = 'Candidatar'
    }

    localStorage.setItem('@WebWomen:AppliedVacancies', JSON.stringify(selectedJobs))
}