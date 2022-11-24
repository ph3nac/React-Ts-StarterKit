/* eslint-disable import/prefer-default-export */
import { colorCode } from '@/components/styles/colorCode';
import { css } from '@emotion/react';

export const BookmarkStyle = {
  liStyle: css`
    list-style-type: none;
    margin-top: 2px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 0.25rem 0.5rem;
    background-color: ${colorCode.green};
    border-radius: 0.5rem;
    max-height: 20px;
    &:hover {
      background-color: ${colorCode.light_green};
    }
  `,
  imgStyle: css`
    vertical-align: middle;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  `,
};

export const FolderStyle = {
  ulStyle: css`
    margin: 0;
    padding: 0;
    border-radius: 0.5rem;
    list-style: none;
    background-color: ${colorCode.dark_green};
  `,
  titleStyle: css`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-top: 2.5px;
    text-align: center;
    &:hover {
    }
  `,
};

export const BarStyle = {
  BarStyles: css`
    background-color: ${colorCode.blue};
    color: white;
    font-size: 28px;
    border-radius: 0.2rem;
    margin: 20px;
  `,
  titleStyles: css`
    margin-left: 10px;
  `,
  gridStyles: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 10px;
    text-align: justify;
    padding: 0px 0.5rem 0.5rem 0.5rem;
  `,
};
