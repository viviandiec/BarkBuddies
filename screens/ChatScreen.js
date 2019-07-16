import React, { Component } from "react";
import { Platform, View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";

import { connect } from "react-redux";
import { sendMessage } from "../actions/actions";

export class ChatScreen extends Component {
  constructor(props) {
    super(props);

    state = {
      messages: []
    };

    this.onSend = this.onSend.bind(this);
  }

  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.name
    };
  }

  componentWillMount() {
    this.setState({
      messages: this.props.chat[
        this.props.navigation.state.params.username
      ].slice()
    });
  }

  onSend(messages = []) {
    this.props.sendMessage(
      this.props.navigation.state.params.username,
      messages[0]._id,
      messages[0].createdAt,
      messages[0].text,
      {
        avatar: this.props.navigation.state.params.avatar,
        avatar2: this.props.navigation.state.params.avatar2,
        name: this.props.navigation.state.params.name,
        username: this.props.navigation.state.params.username,
        ...messages[0].user
      }
    );
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#fec6b9"
          }
        }}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
          renderBubble={this.renderBubble}
        />
        {Platform.OS === "android" ? <KeyboardSpacer topSpacing={-42} /> : <KeyboardSpacer topSpacing={-82}/>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(ChatScreen);
