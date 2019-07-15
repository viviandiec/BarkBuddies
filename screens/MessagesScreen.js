import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import MessageListItem from "../components/MessageListItem";

import { connect } from "react-redux";
import { sendMessage } from "../actions/actions";

export class MessagesScreen extends Component {
  constructor(props) {
    super(props);
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
