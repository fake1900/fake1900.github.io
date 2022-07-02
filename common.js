console.info('hello~~~~~~~~~~~~')

// 记录跳转历史
let routes = JSON.parse(localStorage.getItem('routes')||'[]')
let href = window.location.href

function pushRoute() {
    let index = routes.indexOf(href)
    if(index!=-1) {
        routes.length = index + 1
    } else {
        routes.push(window.location.href)
    }
    localStorage.setItem('routes', JSON.stringify(routes))
}
pushRoute()
    

