import React, {useEffect, useImperativeHandle, useRef, forwardRef} from 'react';
import {defaultTheme} from '../../styles/theme';
import {TextInputProps} from 'react-native';

import {useField} from '@unform/core';

import {TextInput, Container, Icon} from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, IInputProps> = (
  {name, icon, ...rest},
  ref,
) => {
  const InputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const InputValueRef = useRef<InputValueReference>({value: defaultValue});

  useImperativeHandle(ref, () => ({
    focus() {
      InputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: InputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        InputValueRef.current.value = value;
        InputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        InputValueRef.current.value = '';
        InputElementRef.current.clear();
      },
    });
  }, [fieldName, InputValueRef, registerField]);

  return (
    <Container isErrored={!!error}>
      {icon ? (
        <Icon name={icon} size={20} color={defaultTheme.colors.darkGrey} />
      ) : null}
      <TextInput
        ref={InputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor={defaultTheme.colors.darkGrey}
        onChangeText={(value: string) => {
          InputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
