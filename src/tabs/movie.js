import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import MovieContainer from '../component/movie/movieContainer';
import { getMovies } from '../redux/actions/movie';
import AntDesign from 'react-native-vector-icons/AntDesign';

const movies = ({route}) =>  {
    const [category, setcategory] = useState('Popular')
    let movies = []
    const dispatch = useDispatch()

    useSelector(state => {
        movies = state.movie.movies
    })
    
    const getMovie = (category) => dispatch(getMovies(category))
    
    useEffect(() => {
        getMovie(category)   
    },[])

    const onClick = (category) => {
        setcategory(category)
        getMovie(category)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeader}>Movies</Text>
                <AntDesign name="search1" size={24} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableWithoutFeedback
                        onPress={() => onClick("Popular")}>
                        <View style={styles.category}>
                            <Text style={(category === "Popular")?styles.btnSelected :styles.notSelected}>
                                Popular
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => onClick("Now Playing")}>
                        <View style={styles.category}>
                            <Text style={(category === "Now Playing")?styles.btnSelected :styles.notSelected}>
                                Now Playing
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => onClick("Upcoming")}>
                        <View style={styles.category}>
                            <Text style={(category === "Upcoming")?styles.btnSelected:styles.notSelected}>
                                Upcoming
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => onClick("Top Rated")}>
                        <View style={styles.category}>
                            <Text style={(category === "Top Rated")?styles.btnSelected:styles.notSelected}>
                                Top Rated
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop:5}}>
                <MovieContainer movies={movies} name={category} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    },

    mainHeader:{
        fontSize:25,
        color:'black',
        fontWeight:'600',
        marginRight:5
    },
    category:{
        padding:4,
    },
    btnSelected:{
        fontWeight:'bold',
        color:'#935DFF',
    },
    notSelected:{
        fontWeight:'100',
        color:'grey'
    }
})

export default movies
