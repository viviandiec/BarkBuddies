import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import MessageListItem from "../components/MessageListItem";

import { connect } from "react-redux";
import { sendMessage } from "../actions/actions";

export class MessagesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messengers: [
        {
          username: "mrs_meowmers",
          largeAvatar: "http://placekitten.com/256/256",
          smallAvatar: "http://placekitten.com/128/128",
          name: "Mrs. Meowmers",
          date: new Date(2019, 6, 6, 9, 39, 30),
          message: "Go watch the new spiderman movie\nTom Holland is 😻"
        },
        {
          username: "mr_meowmers",
          largeAvatar: "http://placekitten.com/257/257",
          smallAvatar: "http://placekitten.com/129/129",
          name: "Mr. Meowmers",
          date: new Date(2019, 6, 6, 15, 43, 23),
          message:
            "Do you want to head to the park meow? I'm not kitten this time 😺"
        },
        {
          username: "shiba_inu",
          largeAvatar: "http://placekitten.com/258/258",
          smallAvatar: "http://placekitten.com/130/130",
          name: "Shiba Inu",
          date: new Date(2019, 6, 6, 18, 26, 51),
          message: "Meet me at the park in an hour\nI'll bring the treats"
        }
      ]
    };

    this.state.messengers.forEach(messenger =>
      this.props.sendMessage(
        messenger.username,
        1,
        messenger.date,
        messenger.message,
        {
          id: 2,
          name: messenger.name,
          avatar: messenger.largeAvatar,
          avatar2: messenger.smallAvatar,
          username: messenger.username
        }
      )
    );
  }

  orderedMessages() {
    let messages = this.props.chat;
    return Object.keys(messages)
      .map(key => messages[key][0])
      .sort((a, b) => a.createdAt < b.createdAt);
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.orderedMessages().map((messenger, index) => (
              <TouchableOpacity
                key={`${index}${JSON.stringify(messenger)}`}
                onPress={() =>
                  this.props.navigation.navigate("Chat", {
                    username: messenger.user.username,
                    name: messenger.user.name,
                    avatar: messenger.user.avatar,
                    avatar2: messenger.user.avatar2,
                    lastMessage: messenger.text,
                    lastDate: messenger.createdAt
                  })
                }
              >
                <MessageListItem
                  largeAvatar={messenger.user.avatar}
                  smallAvatar={messenger.user.avatar2}
                  name={messenger.user.name}
                  date={messenger.createdAt}
                  message={messenger.text}
                />
              </TouchableOpacity>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

MessagesScreen.navigationOptions = {
  title: "Messages"
};

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(MessagesScreen);
