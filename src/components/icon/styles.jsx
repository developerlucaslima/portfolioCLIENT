import styled from "styled-components";

export const Container = styled.div`
  border-radius: 50%;
  width: 5.4rem;
  height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: ${({theme}) => theme.link};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  &:hover:nth-child(1) {
    background-color: #0E76A8;
  }

  &:hover:nth-child(2) {
    background-color: white;

    i {
      color: black;
    }
  }

  &:hover:nth-child(3) {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  i {
    font-size: 3rem;
    color: ${({theme}) => theme.textColor};
  }
`