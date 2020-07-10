import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import ShowScreen from './ShowScreen';
const IndexScreen=({navigation})=>{
    const {state,addBlogPost,deleteBlogPost,getBlogPosts}=useContext(Context);
    
    useEffect(()=>{
        getBlogPosts();
        const listener=navigation.addListener('focus',()=>{
            getBlogPosts();
        });
        return ()=>{
            listener.remove();
        };
    },[])
    

    return (
       
        <View>
           
           <FlatList 
           data={state}
           keyExtractor={(blogPost)=>blogPost.title}
           renderItem={({item})=>{
              return( 
                <TouchableOpacity onPress={()=>navigation.navigate('ShowScreen',{id:item.id})}>  
                  <View style={styles.row}>
                    <Text style={styles.title}>{item.title }</Text>  
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                       <Feather name="trash" size={20}/>
                    </TouchableOpacity>
                  </View>
                 </TouchableOpacity>
              )
           }}
           />
        </View>    
        
    );
};



const styles= StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'grey',
        paddingHorizontal:10,

    },
    title:{
        fontSize:18,

    }
})

export default IndexScreen;