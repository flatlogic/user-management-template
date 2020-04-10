import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'crud/i18n';
import IamNewForm from 'crud/view/iam/new/IamNewForm';
import Errors from 'crud/modules/shared/error/errors';
import IamService from 'crud/modules/iam/iamService';

class IamNewFormModal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      saveLoading: false,
    };
  }

  componentDidMount() {
    window.$(this.modalRef.current).modal('show');
    window
      .$(this.modalRef.current)
      .on('hidden.bs.modal', this.props.onClose);
  }

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      await IamService.create(data);
      const { rows } = await IamService.fetchUsers(
        {
          email: data.emails[0],
        },
        null,
        1,
        0,
      );
      window.$(this.modalRef.current).modal('hide');
      this.props.onSuccess(rows[0]);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  doCancel = () => {
    window.$(this.modalRef.current).modal('hide');
  };

  render() {
    return ReactDOM.createPortal(
      <div
        ref={this.modalRef}
        className="modal"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {i18n('iam.new.titleModal')}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <IamNewForm
                saveLoading={this.state.saveLoading}
                onSubmit={this.doSubmit}
                onCancel={this.doCancel}
                modal
                single
              />
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

export default IamNewFormModal;
