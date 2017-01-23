export class MainController {
  constructor ($http) {
    'ngInject';


    this.$http = $http;
  }

  postMessage() {
    this.$http.post('http://localhost:5000/api/message', {msg: this.message});
  }
}


/*
Instead of using traditional function syntax to create Angular controller, we are using a CS6 module and we
do that via the export class syntax.
 */
