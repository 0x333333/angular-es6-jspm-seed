class MainController {
  constructor() {
    this.init();
    this.templates = {
      navbar: 'app/views/navbar.tpl.html',
      upload: 'app/views/upload.tpl.html'
    };
  }

  init() {
    console.log('-- MainController');
  }
}

MainController.$inject = ['$scope'];

export default MainController;
