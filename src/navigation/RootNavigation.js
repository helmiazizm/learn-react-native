import {createNavigationContainerRef, StackActions} from '@react-navigation/native';
// navigating without the navigation prop
export const navigationRef = createNavigationContainerRef()

export function navigate(name, params, isReplace = false) {
    if (navigationRef.isReady()) {
        if (isReplace) {
            navigationRef.current.dispatch(StackActions.replace(name))
        } else {
            navigationRef.navigate(name, params);
        }

    }
}