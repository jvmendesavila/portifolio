import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  height: 60px;
  padding: 0px 24px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  padding: 24px 12px;
  &.active {
    color: ${theme.colors.purple_100};
  }
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Occupation = styled.p`
  font-size: 12px;
`;
