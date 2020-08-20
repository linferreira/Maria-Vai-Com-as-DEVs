import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  height: 150px;
  background: #323a50;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.p`
  display: flex;
  align-self: center;
  margin-bottom: 40px;
  color: black;
  font-weight: bold;
  font-family: arial;
`;

export const Paragraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 200px;
  height: 450px;
  text-align: justify;
  color: #6c757d;
  line-height: 30px;
  font: arial;
`;

export const Serasa = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 70px;
  height: 200px;
  background: #e63888;
`;

export const Circle = styled.img`
  height: 100;
  margin-right: 100px;
`;

export const CircleText = styled.p`
  color: #fff;
  text-align: justify;
  line-height: 27px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #323a50;
  color: #fff;
  font-family: Arial;
  height: 50px;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 150px 200px;
`;

export const Box = styled.div`
  background: #c4c4c4;
  height: 150px;
  width: 250px;
  background: #e63888;
  border-radius: 10px;
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  padding-top: 35px;
`;

export const Collapse = styled.div`
  display: flex;
  padding: 40px;
  margin: 0 130px 116px;
  flex-direction: column;
  background: #c4c4c4;
  border-radius: 10px;
  color: black;
`;

export const C1 = styled.p`
  color: #fb92a2;
  font-weight: bold;
  margin: 0;
`;

export const C2 = styled.p`
  color: #4dbad1;
  font-weight: bold;
  margin: 0;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 65px;
  font-family: Arial;
  border-bottom: 1px solid #c4c4c4;
`;

export const Program = styled.p`
  display: flex;
  align-self: center;
  font-size: 20px;
  font-family: Arial;
  color: #c4c4c4;
`;
