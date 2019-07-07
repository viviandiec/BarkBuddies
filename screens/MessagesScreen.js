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
          date: new Date(2019, 6, 6, 9, 39, 30),
          message: "Go watch the new spiderman movie\nTom Holland is 😻"
        },
        {
          largeAvatar: "http://placekitten.com/257/257",
          smallAvatar: "http://placekitten.com/129/129",
          name: "Mr. Meowmers",
          date: new Date(2019, 6, 6, 15, 43, 23),
          message:
            "Do you want to head to the park meow? I'm not kitten this time 😺"
        },
        {
          largeAvatar: "http://placekitten.com/258/258",
          smallAvatar: "http://placekitten.com/130/130",
          name: "Shiba Inu",
          date: new Date(2019, 6, 6, 18, 26, 51),
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
                    avatar: messenger.largeAvatar,
                    lastMessage: messenger.message,
                    lastDate: messenger.date
                  })
                }
              >
                <MessageListItem
                  largeAvatar={messenger.largeAvatar}
                  smallAvatar={messenger.smallAvatar}
                  name={messenger.name}
                  date={messenger.date}
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
