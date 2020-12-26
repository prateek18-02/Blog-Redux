import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
    console.log(route.params.id);
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === route.params.id
    );



    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(route.params.id, title, content, () => navigation.pop());

            }} />
    );
}



const styles = StyleSheet.create({

})

export default EditScreen;