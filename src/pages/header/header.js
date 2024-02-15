import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default function HeaderScreen() {
    return (
        <View style={[styles.container, styles.separateElement]}>
            <Text style={[styles.text, styles.textColor]}>DSM-PELIS</Text>
            <View style={styles.separateElements}>
                <TouchableOpacity style={styles.ButtonLogin}>
                    <Text style={[styles.textColor, styles.textLogin]}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonFreeTrial}>
                    <Text style={[styles.textColor, styles.textFreeTrial]}>Registro</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0054a7',
        width: '100%',
        height: '100%',
        paddingTop: '8%',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    textColor: {
        color: '#DFEEFF',
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
    },
    ButtonLogin: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
    },
    ButtonFreeTrial: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        backgroundColor: '#3d3d3d',
        padding: 3
    },
    separateElements: {
        flexDirection: 'row',
    },
    textLogin: {
        fontWeight: '500',
        fontSize: 15
    },
    textFreeTrial: {

    },
    separateElement: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    'bunker': {
        '50': '#eff7ff',
        '100': '#dfeeff',
        '200': '#b7ddff',
        '300': '#78c2ff',
        '400': '#30a3ff',
        '500': '#0587f2',
        '600': '#006acf',
        '700': '#0054a7',
        '800': '#02488a',
        '900': '#083c72',
        '950': '#01070e',
    },
});



