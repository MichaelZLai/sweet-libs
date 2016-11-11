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

    }
  })







  new Vue({
    el: '#colorrender',
    data: {
      colorQuery: '',
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      transitionColor: {}
    },
    created: function () {
      this.transitionColor = Object.assign({}, this.color)
    },
    watch: {
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
      updateColor: function () {
        this.color = new Color(this.colorQuery).toRGB()
        this.colorQuery = ''
      }
    }
  })

}
