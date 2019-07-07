import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import MessageListItem from "../components/MessageListItem";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messengers: [
        {
          largeAvatar: "http://placekitten.com/256/256",
          smallAvatar: "http://placekitten.com/128/128",
          name: "Mrs. Meowmers",
          time: "9:39 am",
          message: "Go watch the new spiderman movie\nTom Holland is 😻"
        },
        {
          largeAvatar: "http://placekitten.com/257/257",
          smallAvatar: "http://placekitten.com/129/129",
          name: "Mr. Meowmers",
          time: "3:43 pm",
          message:
            "Do you want to head to the park meow? I'm not kitten this time 😺"
        },
        {
          largeAvatar: "http://placekitten.com/258/258",
          smallAvatar: "http://placekitten.com/130/130",
          name: "Shiba Inu",
          time: "6:26 pm",
          message: "Meet me at the park in an hour\nI'll bring the treats"
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.messengers.map((messenger, index) => (
              <TouchableOpacity
                key={`${index}${JSON.stringify(messenger)}`}
                onPress={() =>
                  this.props.navigation.navigate("Chat", {
                    name: messenger.name,
                    avatar: messenger.largeAvatar
                  })
                }
              >
                <MessageListItem
                  largeAvatar={messenger.largeAvatar}
                  smallAvatar={messenger.smallAvatar}
                  name={messenger.name}
                  time={messenger.time}
                  message={messenger.message}
                />
              </TouchableOpacity>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Messages"
};
