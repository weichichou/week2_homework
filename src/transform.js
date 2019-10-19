const groupAdultsByAgeRange  = (people) => {
    return people.filter((person)=>{
       return person.age >= 18
    }).reduce((acc, val)=>{
        if (val.age <= 20){
            return {
                ...acc,
                '20 and younger': (
                    acc.hasOwnProperty('20 and younger') 
                        ? acc['20 and younger'].concat(val) 
                        : [val]
                )
            }
        }else if (val.age <= 30){
            return {
                ...acc,
                '21-30': (
                    acc.hasOwnProperty('21-30') 
                        ? acc['21-30'].concat(val) 
                        : [val]
                )
            }
        }else if (val.age <= 40) {
            return {
                ...acc,
                '31-40': (
                    acc.hasOwnProperty('31-40') 
                        ? acc['31-40'].concat(val) 
                        : [val]
                )
            }
        }else if (val.age <= 50) {
            return {
                ...acc,
                '41-50': (
                    acc.hasOwnProperty('41-50') 
                        ? acc['41-50'].concat(val) 
                        : [val]
                )
            }
        }else{
            return {
                ...acc,
                '51 and older': (
                    acc.hasOwnProperty('51 and older') 
                        ? acc['51 and older'].concat(val) 
                        : [val]
                )
            }
        }

    },{})
}


module.exports = { groupAdultsByAgeRange }
