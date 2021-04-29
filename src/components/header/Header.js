import React from 'react';
// import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Container, Profile, Input } from './styles';
import userIcon from '../../assets/images/userIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import cartIcon from '../../assets/images/cartIcon.svg';
import Img from '../../assets/images/logo.svg';

export default function Header() {
  // const counter = useSelector((state) => state);
  return (
    <Container>
      <nav>
        <span className="menu_hamburger">
          <GiHamburgerMenu />
        </span>
        <img className="logo" src={Img} alt="logo_corebiz" />
      </nav>
      <Input>
        <input type="text" placeholder="O que você está procurando?" />
        <img src={searchIcon} style={{ height: '18px ' }} alt="search" />
      </Input>
      <Profile>
        <div className="profile_items">
          <div className="user">
            <img src={userIcon} style={{ height: '18px ' }} alt="User" />
            <button type="button">
              <p>Minha Conta</p>
              {' '}
            </button>
          </div>
          <div className="cart">
            <img src={cartIcon} style={{ height: '18px ' }} alt="cart" />

            {' '}
          </div>
        </div>
      </Profile>
    </Container>
  );
}
