import * as toastr from 'toastr';
import 'toastr/build/toastr.css';

export default class Message {
  static success(arg) {
    // must be changed change because Bootstrap UI
    // css overrides the style
    toastr.options.toastClass = 'toastr';

    toastr.success(arg);
  }

  static error(arg) {
    // must be changed change because Bootstrap UI
    // css overrides the style
    toastr.options.toastClass = 'toastr';

    toastr.error(arg);
  }
}
