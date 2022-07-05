console.info('hello~~~~~~~~~~~~')


// 记录跳转历史
localStorage.setItem('lastpage', window.location.href)


/*
 
// 数据存储
let store = {
    backUrl: null,
    nextUrl: null
}

// 返回
function back() {
    location.href = store.backUrl || '/'
}
// 下一篇
function next() {
    if(store.next) {
        location.href = store.next
    } else {
        alert('开发中...')   
    }
}

// 添加底部跳转链接
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

// 滚动到底部事件
window.onscroll = function() {
 if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    addBottomBar()
 }
}

*/