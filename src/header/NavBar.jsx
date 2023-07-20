import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaSun } from 'react-icons/fa';
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  width: 100%;
  background-color: #8ec4eb;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.dark &&
    css`
      background-color: black;
    `}
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function NavBar() {
  return (
    <NavWrapper>
      <div className="mt-3 h-2/3 flex flex-row justify-center">
        <IconWrapper className="text-4xl text-yellow-500 font-semibold">
          <FaSun />
        </IconWrapper>
        <br />
        <LinkWrapper>
          <Link
            to="/react"
            className="text-4xl text-pink-500 font-semibold hover:text-pink-400"
          >
            공공 API 대기질 확인
          </Link>
        </LinkWrapper>
        <IconWrapper className="text-4xl text-yellow-500 font-semibold">
          <FaSun />
        </IconWrapper>
      </div>
      <nav className="h-1/3 w-full flex flex-row items-center justify-start space-x-10 p-4">
        <Link
          to="/react/kids"
          className="text-pink-500 hover:text-pink-400 font-semibold hover:origin-center hover:rotate-12"
        >
          기상센터
        </Link>

        {/* <Link
          to="/react/checkPage"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          자동화
        </Link> */}
      </nav>
    </NavWrapper>
  );
}
