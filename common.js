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

 
function addBottomBar() {
    let div = document.querySelector('#bottom-bar')
    if(!div) {
        div = document.createElement("div");
        div.id = 'bottom-bar'
        div.style = 'font-size: 20px; display: flex; justify-content: space-between; align-items: center; max-width: 46.25rem; height: 5em; margin: 0 auto; padding: 2em; box-sizing: border-box; font-weight: bold; color: #fa8919;'
        div.innerHTML = '<a onclick="back()">返回</a><a onclick="next()">下一篇</a>'
        document.body.appendChild(div);
    }
}
// 返回
function back() {
    routes.pop()
    localStorage.setItem('routes', JSON.stringify(routes))
    console.info(routes[routes.length-1])
    location.href = routes.length==0 ? '/' : routes[routes.length-1]
}
// 下一篇
function next() {
    alert('开发中...')
}
 
window.onscroll = function() {
 if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    addBottomBar()
 }
}

