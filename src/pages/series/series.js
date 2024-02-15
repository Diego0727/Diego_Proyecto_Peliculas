import React, { useState, useEffect } from 'react';
import data from '../../../data/sample.json';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';

export default function Series() {
    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const [selectedSerie, setSelectedSerie] = useState(null);

    const seriesFiltradas = data.entries.filter(entry => entry.programType === "series" && entry.releaseYear >= 2010);

    seriesFiltradas.sort((a, b) => a.title.localeCompare(b.title));

    const primeras20Series = seriesFiltradas.slice(0, 20);

    // const seriesData = data.entries.filter(entry => entry.programType === "series");
    const dataAgrupada = agruparData(primeras20Series, 3);

    const handleSerieClick = (serie) => {
        setSelectedSerie(serie);
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text>Oops, something went wrong...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={dataAgrupada}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        {item.map((entry) => (
                            <TouchableOpacity
                                key={entry.title}
                                style={styles.movieContainer}
                                onPress={() => handleSerieClick(entry)}
                                activeOpacity={0.7}
                            >
                                <Image source={{ uri: entry.images['Poster Art'].url }} style={styles.poster} />
                                <Text style={styles.movieTitle}>{entry.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <Modal
                visible={selectedSerie !== null}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedSerie && (
                            <View>
                                <Text style={styles.modalTitle}>{selectedSerie.title}</Text>
                                <Text style={styles.modalText}>Descripción: {selectedSerie.description}</Text>
                                <Text style={styles.modalText}>Año: {selectedSerie.releaseYear}</Text>
                                <Image source={{ uri: selectedSerie.images['Poster Art'].url }} style={styles.modalPoster} />
                                <TouchableOpacity onPress={() => setSelectedSerie(null)} style={styles.closeButton}>
                                    <Text style={styles.closeButtonText}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function agruparData(array, tamañoGrupo) {
    const agruparArray = [];

    for (let i = 0; i < array.length; i += tamañoGrupo) {
        agruparArray.push(array.slice(i, i + tamañoGrupo));
    }

    return agruparArray;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff7ff',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    movieContainer: {
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
        opacity: 1,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 15,
    },
    poster: {
        width: 120,
        height: 180,
        borderRadius: 15,
    },
    movieTitle: {
        marginTop: 5,
        textAlign: 'center',
        width: 120,
    },
    flatlistContent: {
        paddingBottom: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 10,
    },
    modalPoster: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#6a7fc1',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
    }
});