import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'
import { mainMenuStyle } from "./main-menu.style";
import { MenuOption, MenuHeader, MenuCard } from '../../components';
import { optionsList, menuCards } from '../../mocks';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { MenuCards } from '../../enums';

export class MainMenu extends PureComponent {

    constructor() {
        super()
        this.state = {
            optionsCardsList: optionsList,
            cardsList: menuCards,
            activeSlide: 0,
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

    renderMenuCard = () => {
        const enumAsList = Object.values(MenuCards)

        return <MenuCard item={enumAsList[this.state.activeSlide]} />
    }

    returnPagination = () => {
        return (
            <Pagination
              dotsLength={this.state.cardsList.length}
              activeDotIndex={this.state.activeSlide}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 12,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        )
    }

    renderCarousel = () => {
        return (
            <View style={mainMenuStyle.paginationCarouselContainer} >
                <View style={mainMenuStyle.carouselContainer} >
                    <Carousel
                        data={this.state.cardsList}
                        renderItem={this.renderMenuCard}
                        sliderWidth={380}
                        itemWidth={300}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    />
                </View>
                {this.returnPagination()}
            </View>
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
