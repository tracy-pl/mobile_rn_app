import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { PathConfig } from '@react-navigation/core/src/types';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

function navigate(name: string, params?: PathConfig<unknown>) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export { navigate, goBack };
