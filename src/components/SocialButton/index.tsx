import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {windowHeight} from '../../utils/DImention';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

interface ISocialButtonProps extends TouchableOpacityProps {
  buttonTitle: string;
  btnType: string;
  color: string;
  backgroundColor: string;
  iconType: 'font-awesome' | 'feather';
}

const SocialButton: React.FC<ISocialButtonProps> = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  iconType,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        {iconType === 'font-awesome' ? (
          <FontAwesome
            name={btnType}
            style={styles.icon}
            size={22}
            color={color}
          />
        ) : (
          <Feather name={btnType} style={styles.icon} size={22} color={color} />
        )}
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});
