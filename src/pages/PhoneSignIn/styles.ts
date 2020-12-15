import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {defaultTheme} from '../../styles/theme';

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  margin-left: 16px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const GoBackButtonText = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
