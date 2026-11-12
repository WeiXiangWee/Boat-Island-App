import {Image, Text, View, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Island = ({ name, description, picture }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <FontAwesome6 name="sun" size={18} color="#F59E0B" />
            </View>

            <Text style={styles.description}>{description}</Text>

            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#164E63',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    name: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: '#164E63',
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 22,
        color: '#475569',
        marginBottom: 12,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
});

export default Island;