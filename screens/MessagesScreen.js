import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import MessageListItem from "../components/MessageListItem";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          largeAvatar: { uri: "http://placekitten.com/256/256" },
          smallAvatar: { uri: "http://placekitten.com/128/128" },
          name: "Mrs. Meowmers",
          time: "3:43 pm",
          message:
            "Do you want to head to the park meow? I'm not kitten this time 😺"
        },
        {
          largeAvatar: { uri: "http://placekitten.com/256/256" },
          smallAvatar: { uri: "http://placekitten.com/128/128" },
          name: "Mr. Meowmers",
          time: "9:39 am",
          message: "Go watch the new spiderman movie\nTom Holland is 😻"
        },
        {
          largeAvatar: { uri: "http://placekitten.com/256/256" },
          smallAvatar: { uri: "http://placekitten.com/128/128" },
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
            {this.state.messages.map((message, index) => (
              <TouchableOpacity key={`${index}${JSON.stringify(message)}`}>
                <MessageListItem
                  largeAvatar={message.largeAvatar}
                  smallAvatar={message.smallAvatar}
                  name={message.name}
                  time={message.time}
                  message={message.message}
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
