import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Button,
    Modal,
    TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import StyledModal from '../components/StyledModal';

class SwipeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: ["hello", "kms", "lol", "i", "stole", "this", "code"],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0,
            modalVisible: false
        }
    }

    componentWillUnmount() {
        this.setState({ modalVisible: false })
    }

    renderCard = (card, index) => {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>{card}</Text>

            </View>
        )
    };

    onSwiped = (type) => {
        switch (type) {
            case "general":
                return this.setState({ modalVisible: false })
            case "right":
                return this.setState({ modalVisible: true })
            default:
                return this.setState({ modalVisible: false })
        }
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    onSwiped={() => this.onSwiped('general')}
                    onSwipedLeft={() => this.onSwiped('left')}
                    onSwipedRight={() => this.onSwiped('right')}
                    onTapCard={this.swipeLeft}
                    cards={this.state.cards}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    onSwipedAll={this.onSwipedAllCards}
                    stackSize={3}
                    verticalSwipe={false}
                    stackSeparation={15}
                    backgroundColor={"f7c5b8"}
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
                            title: 'LIKE',
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
                        },
                    }}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard>
                </Swiper>
                {this.state.modalVisible ?
                    <StyledModal
                        visible={true}
                    >
                    </StyledModal> : <View></View>
                }
            </View>
        )
    }
}


SwipeScreen.navigationOptions = {
    title: 'Swipe',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7c5b8',
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
});

export default SwipeScreen;