import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import StyledModal from '../components/StyledModal';
import { cards } from '../constants/Data';
import Card from '../components/Card';

class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipedAllCards: false,
      modalVisible: false,
      currentIndex: 0
    };
  }

  componentWillUnmount() {
    this.setState({ modalVisible: false });
  }

  renderCard = (card, cardIndex) => {
    console.log(cardIndex);
    if (cardIndex != undefined) {
      return <Card description={false} index={cardIndex} />;
    }
    return <View />;
  };

  onSwiped = type => {
    switch (type) {
      case 'general':
        return this.setState({ modalVisible: false });
      case 'right':
        return this.setState({ modalVisible: true });
      default:
        return this.setState({ modalVisible: false });
    }
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          cards={cards}
          cardIndex={0}
          infinite={true}
          onTapCard={() => this.props.navigation.navigate('Desc')}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          verticalSwipe={false}
          stackSize={11}
          backgroundColor={'#f7c5b8'}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'CHAT!',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />
        {this.state.modalVisible ? <StyledModal visible={true} /> : <View />}
      </View>
    );
  }
}

SwipeScreen.navigationOptions = {
  title: 'Swipe'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7c5b8'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
});

export default SwipeScreen;
