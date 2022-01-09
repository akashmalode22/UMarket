import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/backdrop.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(157, 150, 141, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
