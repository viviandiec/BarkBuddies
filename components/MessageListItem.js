import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { ListItem, Left, Body, Thumbnail, Text } from "native-base";

export default function MessageListItem(props) {
  return (
    <ListItem avatar>
      <Left style={{ width: 64 }}>
        <Thumbnail />
        <Image source={{ uri: props.largeAvatar }} style={largeAvatar} />
        <Image source={{ uri: props.smallAvatar }} style={smallAvatar} />
      </Left>
      <Body>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text>{props.name}</Text>
          <Text note>{props.time}</Text>
        </View>
        <Text note>{props.message}</Text>
      </Body>
    </ListItem>
  );
}

const largeAvatar = {
  height: 45,
  width: 45,
  position: "absolute",
  right: 0,
  top: 10,
  borderRadius: 50
};

const smallAvatar = {
  height: 36,
  width: 36,
  position: "absolute",
  left: 0,
  bottom: 0,
  borderRadius: 50,
  borderWidth: 4,
  borderColor: "#fff"
};

MessageListItem.propTypes = {
  largeAvatar: PropTypes.string.isRequired,
  smallAvatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
