import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 1,
        position: "absolute"
    },
    header: {
        flex: 1,
        alignItems: "center",
        zIndex: 1
    },
    heading: {
        color: '#00aaff',
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 40,
        paddingBottom: 20,
        zIndex: 1
    },
    section: {
        paddingHorizontal: 40,
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: 1
    },
    sectionHeading: {
        fontWeight: "bold",
        fontSize: 15,
        paddingBottom: 5,
        zIndex: 1
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        padding: 5,
        zIndex: 1
    },
    resultSection: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        zIndex: 1
    },
    result: {
        fontSize: 40,
        fontWeight: "bold",
        zIndex: 1
    },
    dropdown: {
        zIndex: 300
    },
    indexx: {
        zIndex:300
    }
});