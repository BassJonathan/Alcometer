import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: "absolute"
    },
    header: {
        flex: 1,
        alignItems: "center",
    },
    heading: {
        color: '#00bbff',
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 40,
        paddingBottom: 20,
    },
    section: {
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    sectionHeading: {
        fontWeight: "bold",
        fontSize: 15,
        paddingBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        padding: 5,
    },
    resultSection: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 5,
    },
    result: {
        fontSize: 40,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: '#0088ff',
        borderRadius: 5,
    },
    loginScreenButton: {
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: '#08f',
        borderRadius: 10,
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 10,
        fontSize: 18
    },
    footer: {
        paddingHorizontal: 40,
        paddingTop: 10,
    },
});