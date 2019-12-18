import React, { PureComponent } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import { mainMenuStyle } from "./main-menu.style";
import { MenuOption, MenuHeader, MenuCard } from '../../components';
import { optionsList, menuCards } from '../../mocks';
import SideSwipe from 'react-native-sideswipe';

export class MainMenu extends PureComponent {

    constructor() {
        super()
        this.state = {
            optionsCardsList: optionsList,
            cardsList: menuCards,
            currentIndex: 0,
            user: {
                username: 'Lucas'
            }
        }
    }

    renderOptionsCards = () => {
        return (
            this.state.optionsCardsList.map((option, key) => {
                return <MenuOption icon={option.icon} title={option.title} key={key} />
            })
        )
    }

    renderMenuCards = () => {
        return <MenuCard />
    }

    renderCarousel = () => {
        return (
            <SideSwipe
                index={this.state.currentIndex}
                itemWidth={MenuCard.WIDTH}
                style={{ width: 200 }}
                data={this.state.cardsList}
                onIndexChange={index =>
                    this.setState({ currentIndex: index })
                }
                renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                    <MenuCard
                        {...item}
                        index={itemIndex}
                        currentIndex={currentIndex}
                        animatedValue={animatedValue}
                    />
                )}
            />
        )
    }

    render() {
        return (
            <View style={mainMenuStyle.mainMenuContainer} >
                <MenuHeader username={this.state.user.username} />

                {this.renderCarousel()}

                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={mainMenuStyle.menuOptionsContainer} >
                    {this.renderOptionsCards()}
                </ScrollView>
            </View>
        )
    }

}
