//prevent script from being executed before dom is loaded
window.onload = function () {
  
  new Vue({
    el: ".app",
    data: {
      "message": "hello world"
    }
  })

}
