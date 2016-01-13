import './vendor';

import MainController from './controllers/mainController';
import FileController from './controllers/fileController';

let mainModule = angular.module('app', [])
  .controller(MainController.name, MainController)
  .controller(FileController.name, FileController);

export default mainModule;
