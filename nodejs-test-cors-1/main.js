window.jQuery = function(){
}

window.jQuery.ajax = function({url,method,body,successFn,failFn,headers}){
  let request = new XMLHttpRequest()
  request.open(method,url)
  for(let key in headers){
    let value = headers[key]
    request.setRequestHeader(key,value)
  }
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >=200 &&request.status <300){
        successFn.call(undefined,request.responseText)
      }else if(request.status >=400){
        failFn.call(undefined,request)
      }
    }
  }
  request.send(body)
}

function f1 (responseText){}
function f2 (responseText){}

myButton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    headers: {
      'content-type': 'x-www-form-urlencoded',
      'jing': 18 
    },
    successFn: (x) => {
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    failFn: (x) => {
      console.log(x)
      console.log(x.status)
      console.log(x.responseText)
    }
  })
})


