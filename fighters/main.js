let arrayOfNames = ['devil-jin', 'alisa', 'anna', 'asuka', 'bob', 'julia', 'lars', 'leo', 'law', 'lili', 'zafina', 'steve']

let fighterurl = arrayOfNames.map( name=>{
    return (
        <img class="fighter-card" src=`https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png` alt="fighter"/>
        
    )
})

