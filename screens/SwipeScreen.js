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
    if (cardIndex != undefined) {
      return <Card description={false} index={cardIndex} />;
    }
    return <View />;
  };

  onSwiped = type => {
    switch (type) {
      case 'general':
        console.log(this.state.currentIndex);
        return this.setState({
          modalVisible: false,
          currentIndex:
            this.state.currentIndex < 10 ? this.state.currentIndex + 1 : 0
        });
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
          onTapCard={() =>
            this.props.navigation.navigate('Desc', {
              index: this.state.currentIndex
            })
          }
          cardVerticalMargin={40}
          stackSeparation={0}
          marginBottom={25}
          backgroundColor={'#b5d4d8'}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          verticalSwipe={false}
          stackSize={3}
          infinite={true}
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
        {this.state.modalVisible ? (
          <StyledModal visible={true} index={this.state.currentIndex} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

SwipeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5d4d8'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
});

export default SwipeScreen;
