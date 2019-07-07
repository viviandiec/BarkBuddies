import React, { Component } from "react";
import { Platform, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default class Example extends Component {
  constructor(props) {
    super(props);
    state = {
      messages: []
    };
  }

  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.name
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: this.props.navigation.state.params.lastMessage,
          createdAt: this.props.navigation.state.params.lastDate,
          user: {
            _id: 2,
            name: this.props.navigation.state.params.name,
            avatar: this.props.navigation.state.params.avatar
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
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
        />
        {Platform.OS === "android" ? <KeyboardSpacer topSpacing={-42} /> : null}
      </View>
    );
  }
}
