import { StyleSheet, Dimensions } from 'react-native'

// Primary Style Guide for entire application
const primary = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        marginHorizontal: 50,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: 15
    },
    bodyText: {
        color: '#636e72',
        fontSize: 13,
    },
    headerText: {
        fontSize: 14,
        fontWeight: '100',
        margin: 10,
        alignSelf: 'center',
        color: '#636e72',
    }
});

// Style definition for card components
const card = StyleSheet.create({
    title: {
        color: '#2980b9',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 5
    },
    location: {
        color: 'teal',
        fontWeight: '700',
        marginTop: 5,
        marginBottom: 5
    },
    stockContainer: {
        backgroundColor: '#f5f6fa',
        padding: 0,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 0,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f5f6fa",
        borderRadius: 10,
        borderWidth: 4,
        elevation: 2,
        height: 190,
        width: 155
    },
    articleContainer: {
        backgroundColor: '#f5f6fa',
        padding: 0,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 0,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f5f6fa",
        borderRadius: 10,
        borderWidth: 4,
        elevation: 2,
        height: 95
    },
    goingMarked: {
        backgroundColor: '#f5f6fa',
        padding: 15,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#55efc4',
        borderRadius: 5,
        borderWidth: 4,
        elevation: 3
    },

    bodyText: primary.bodyText,
    agendaText: {
        color: '#636e72',
        fontSize: 13,
        alignSelf: 'flex-end'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 10,
    },
    bannerIcon: {
        flex: 1,
        resizeMode: 'center',
        borderRadius: 50,
        marginRight: 10,
        height: 50
    },
    body: {
        flex: 5,
    }
});


export { primary, card }