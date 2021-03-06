const oneAway = (firstString, secondString) => {
    if (Math.abs(firstString.length - secondString.length > 1)) {
        return false
    }

    let isEdited = false
    for(let i = 0, j = 0; i < firstString.length && j < secondString.length; ++i, ++j)
    {
        if(firstString[i] !== secondString[j])
        {
            if(isEdited)
            {   // second edit
                return false
            }

            if(firstString.length > secondString.length)
            {
                --j
            }
            else if(firstString.length < secondString.length)
            {
                --i
            }
            isEdited = true
        }
    }
    return true
}


console.log(oneAway('pale', 'ple')) // true
console.log(oneAway('pale', 'bake')) // false
console.log(oneAway('pales', 'pale')) // true
console.log(oneAway('pale', 'bale')) // true