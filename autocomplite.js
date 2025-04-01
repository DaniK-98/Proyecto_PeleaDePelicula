const createAutoComplete =({root,
rederOption,OnOptionSelect,InputValue,fetchData})=>{
//Funcion autoComplete

root.innerHtml=`
<label><b>Busqueda</b></label>
<input class=¨Input¨ />
<div class="dropdown">
<div class="dropdown-menu">
<div class="dropdown-content results"></div>
</div>
</div>
`
}

const input = root.querySelector('input')
const dropdown = root.querySelector('.dropdown')
const resultWrapper = root.querySelector('.result')

const debonce =(func, delay = 1000) => {
    let timeoutid
    return(...args) => {
        clearTimeout(timeoutid)
        timeoutid = setTimeout(() => {
            func.apply(null,args)
        }, delay)
    }
}

