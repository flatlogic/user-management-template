import styled from 'styled-components';
import React, { Component } from 'react';

const AvatarWrapper = styled.span`
  .avatar {
    font-size: 16px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
  }

  .avatar.avatar-square {
    border-radius: 4px;
  }

  .avatar.avatar-rounded {
    border-radius: 50%;
  }

  .avatar.avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  .avatar.avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px;
  }

  .avatar.avatar-image {
    background: transparent;
  }

  .avatar > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

class Avatar extends Component {
  render() {
    const { shape, size, src } = this.props;

    const sizeClass =
      {
        large: 'avatar-lg',
        small: 'avatar-sm',
      }[size] || '';

    return (
      <AvatarWrapper>
        <span
          className={`avatar ${
            shape === 'square'
              ? 'avatar-square'
              : 'avatar-rounded'
          } ${sizeClass}`}
        >
          {src ? <img src={src} alt="Avatar" /> : null}
        </span>
      </AvatarWrapper>
    );
  }
}

export default Avatar;
