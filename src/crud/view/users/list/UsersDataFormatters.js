import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';

function imageFormatter(cell) {
  const imageUrl =
    cell && cell.length
      ? cell[0].publicUrl
      : undefined;
  return (
      <span>{imageUrl ? <img width="60" height="60" className="rounded-circle" src={imageUrl} alt="image" /> : null}</span>
  );
};

function booleanFormatter(cell) {
    return cell
      ? 'Yes'
      : 'No';
};

function dateTimeFormatter(cell) {
    return cell
      ? moment(cell).format('YYYY-MM-DD HH:mm')
      : null;
};

function actionFormatter(cell) {
  return (
      <div>
    <Link
      className="btn btn-link"
      to={`/app/users/${cell}`}
    >
    View
    </Link>
    &nbsp;
      <Link
        className="btn btn-link"
        to={`/app/users/${cell}/edit`}
      >
      Edit
    </Link>
      </div>
   )
};

function filesFormatter(cell) {
    return (
      <div>
        { cell && cell.map((value) => {
          return (
            <div key={value.id}>
              <i className="la la-link text-muted mr-2"></i>
              <a
                href={value.publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                {truncate(value.name)}
              </a>
            </div>
          );
        })}
      </div>
	)
};

function listFormatter(cell) {
    if (!cell) return null;

    return (
      <div>
        { cell && cell.length && cell.map((value) => {
          return (
            <div key={value.id}>
              <a
                href={value.id}
              >
                {value.name}
              </a>
            </div>
          );
        })}
        { cell &&
            <div key={cell.id}>
              <a href={cell.id}>{cell.name}</a>
            </div>
        }
      </div>
	);
};

export { actionFormatter, booleanFormatter, imageFormatter, dateTimeFormatter, listFormatter, filesFormatter };
