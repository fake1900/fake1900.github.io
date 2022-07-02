console.info('hello~~~~~~~~~~~~')

let routes = JSON.parse(localStorage.getItem('routes')||'[]')
let index = routes.indexOf(window.location.href)
if(index!=-1) {
    routes.length = index + 1
} else {
    routes.push(window.location.href)
}
localStorage.setItem('routes', JSON.stringify(routes))
    

