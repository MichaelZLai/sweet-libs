//prevent script from being executed before dom is loaded
window.onload = function () {
  //define Color Factory from color.js
  var Color = net.brehaut.Color

  //instantiate a new Vue
  new Vue({
    //defines the element we want to use
    el: "#colorrender",
    //lists the variables inside our element
    data:{
      colorQuery: "",
      color:{
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      transitionColor:{}
    },
    //after instance is created, allows transitionColor to change colors
    created: function(){
      this.transitionColor = Object.assign({}, this.color)
    },
    watch:{
      //using Tween.js function for the animation
      color: function () {
        function animate (time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        new TWEEN.Tween(this.transitionColor)
          .to(this.color, 750)
          .start()
        animate()
      }
    },
    //computes the inputted color to the new RGBA
    computed: {
      transitionCSSColor: function () {
        return new Color({
          red: this.transitionColor.red,
          green: this.transitionColor.green,
          blue: this.transitionColor.blue,
          alpha: this.transitionColor.alpha
        }).toCSS()
      }
    },
    methods: {
      //converts the inputted color to RGBA
      updateColor: function () {
        this.color = new Color(this.colorQuery).toRGB()
        //clears the input box
        this.colorQuery = ''
      }
    }
  })

}
