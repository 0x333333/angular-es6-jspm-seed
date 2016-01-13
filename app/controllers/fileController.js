import dropzone from 'dropzone';

class FileController {
  constructor() {
    this.init();
  }

  init() {
    console.log('-- FileController');
    $("form.dropzone").dropzone({ url: "/upload" });
  }
}

FileController.$inject = [];

export default FileController;
