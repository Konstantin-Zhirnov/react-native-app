import React, { useState } from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity, Modal,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import { THEME } from '../theme'
import ReviewForm from './reviewForm'


export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReview] = useState([
        {
            key: '1',
            img: 1,
            title: 'Одноместные номера',
            body: `
            Скандинавский стиль интерьера погружает в атмосферу уюта и комфорта. Каждый из одноместных номеров отличается уникальным дизайном и станет красивым продолжением вашего отдыха. Помимо красоты интерьера, он также подкупает прекрасным видом на Петербург.
    
            В номере есть всё самое необходимое: шкаф для одежды, тумбочка, ЖК-телевизор, кондиционер и бесплатный Wi-Fi интернет.
    
            Мы предоставим Вам комплект одноразовых туалетно-косметических принадлежностей, а также халат и одноразовые тапочки.
    
            Этот небольшой номер площадью 14 кв.м  порадует вас удобнейшей кроватью и большими панорамными окнами и отлично подойдёт для тех, кто предпочитает путешествовать один.
            `,
            rating: 4
        },
        {
            key: '2',
            img: 2,
            title: 'Двухместные номера',
            body: `
            Насладитесь атмосферой Петербурга и подарите себе отдых в стильной обстановке номеров отеля «Loft Garden» (17,5 кв.м)
    
            Качественная деревянная отделка, большие окна, а также такие удобства, как кровать Twin, шкаф для одежды, телевизор с плоским ЖК-экраном, кондиционер и Wi-Fi интернет сделают Ваше пребывание в нашем отеле радостным и приятным.
    
            В современной ванной комнате в вашем распоряжении дождевой душ или ванная, раковина, туалет, а также комплект одноразовых туалетных принадлежностей, в который входит: мыло, гель для душа, шампунь-кондиционер, а также халаты и тапочки.
            `,
            rating: 5
        },
        {
            key: '3',
            img: 3,
            title: 'Улучшенный двухместный номер',
            body: `
            Насладитесь атмосферой Петербурга в приятной обстановке номеров «Loft Garden». Светлый интерьер, зелень и большие панорамные окна создают ощущения уюта.
    
            Получайте удовольствие от пребывания в наших комфортабельных номерах 18 кв.м, в вашем
            распоряжении будет: шкаф для одежды, тумбочки, ЖК-телевизор, кондиционер и бесплатный Wi-Fi интернет.
    
            В ванной комнате вы найдёте комплект туалетных принадлежностей, который в вашем распоряжении в течение всего пребывания в отеле. В него входит: мыло, гель для душа, шампунь-кондиционер, зубная щетка и паста, а также халаты и тапочки.
            `,
            rating: 5
        },
        {
            key: '4',
            img: 4,
            title: 'Номер Делюкс',
            body: `
            Просторный дизайнерский номер на 19 кв.м с панорамными окнами. Большая кровать Queen Size, ковровое покрытие и художественно расписанные стены дарят ощущение уюта и комфорта.
    
            В номере есть всё самое необходимое: шкаф для одежды, диван, ЖК-телевизор, кондиционер и бесплатный Wi-Fi интернет.
            
            Нашим гостям предоставляется комплект одноразовых туалетных принадлежностей, в который входит: мыло, гель для душа, шампунь-кондиционер, зубная щетка и паста, а также халат и тапочки.
            `,
            rating: 3
        },
        {
            key: '5',
            img: 5,
            title: 'Номер Люкс',
            body: `
            Наслаждайтесь простором и располагающей атмосферой люкса размером 39 кв.м. Современный дизайн, панорамные окна, большая кровать и просторная ванная комната с джакузи — преимущества этого люкса. Убедитесь на опыте в достоинстве номеров
            «Loft Garden».
    
            В Вашем распоряжении уютная спальня и гостиная зона c ЖК-телевизором и раскладывающимся диваном. Для комфорта в номере присутствует кондиционер и бесплатный Wi-Fi интернет.
    
            Комплект туалетных принадлежностей (мыло, гель для душа, шампунь-кондиционер, зубная щетка и паста), а также халаты и тапочки предлагаются гостям в течении всего пребывания в отеле.
    
            Данный номер рассчитан на 4 человека и отлично подойдет как для отдыха вдвоем, так и для семей с детьми.
            `,
            rating: 5
        },
    ])

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReview((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            {/* <Button title='Подробнее' onPress={pressHandler} /> */}

            <Modal visible={modalOpen} animationType='slide' >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)} >
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        padding: 10,
        borderRadius: 50,
        alignSelf: 'center',
        color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
    modalClose: {
        // backgroundColor: '#fff',
        color: 'red',
        borderWidth: 0,
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
})