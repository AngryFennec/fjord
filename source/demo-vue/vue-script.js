new Vue({
  el: '#app',
  data: {
    userName: 'USER',
    isTrue: false,
    url: "http://google.com",
    template: "<button type=button>Кнопка 2</button>"
  },
  methods: {
    setName: function(event) {
      this.userName = event.target.value;
    },
    consoleLog: function(event) {
      console.log(event);
    }
  }
});

//preventDefault() - отменить стандартное поведение
//v-on:click.prevent

//stoprPropagation() - остановить "распространение" события
//v-on:click.stop

//:keyup.escape.enter.space
