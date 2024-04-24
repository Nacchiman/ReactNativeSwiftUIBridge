import {ViewStyle, requireNativeComponent} from 'react-native';
const SimpleNativeView = requireNativeComponent(
  'SimpleView',
) as unknown as React.FC<{
  title?: string;
  onPressed?: (event: any) => void;
  style: ViewStyle;
}>;
export default SimpleNativeView;
