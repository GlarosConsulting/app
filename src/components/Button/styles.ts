import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {defaultTheme} from '../../styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${defaultTheme.colors.veryDarkGrey};
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${defaultTheme.colors.white};
  font-size: 18px;
`;
