import React from 'react';
import { Link } from 'react-router-dom';
import ErrorWrapper from 'crud/view/shared/errors/styles/ErrorWrapper';
import { i18n } from 'crud/i18n';

const Error404Page = () => {
  return (
    <ErrorWrapper>
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{
              backgroundImage: `url(/images/404.svg)`,
            }}
          />
        </div>
        <div className="content">
          <h1>404</h1>
          <div className="desc">{i18n('errors.404')}</div>
          <div className="actions">
            <Link to="/">
              <button
                className="btn btn-primary"
                type="button"
              >
                {i18n('errors.backToHome')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ErrorWrapper>
  );
};

export default Error404Page;
