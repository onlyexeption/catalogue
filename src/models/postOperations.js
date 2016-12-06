/**
 * Created by Ivaylo on 12/6/2016.
 */
import * as requester from './requests'

    function createPost(title, desc, callback){
        let postData = {
            title: title,
            desc: desc,
            author_id: sessionStorage.getItem('userId')
        };

        requester.post('appdata','Posts', postData, 'kinvey')
            .then(()=>callback(true))
            .catch(()=>callback(false))
    }

    function editPost(postId,title,desc,callback){
        let postData = {
            title: title,
            desc: desc,
            author_id: sessionStorage.getItem('userId')
        };

        requester.update('appdata','Posts/'+postId, postData, 'kinvey')
            .then(()=>callback(true))
            .catch(()=>callback(false))
    }

    function deletePost(){

    }

function viewPosts(callback){
    requester.get('appdata','Posts', 'kinvey')
        .then(callback)
        .catch(()=>callback(false))
}

function viewPost(postId,callback){
    requester.get('appdata','Posts/' + postId, 'kinvey')
        .then(callback)
        .catch(()=>callback(false))
}

export {viewPost, viewPosts, createPost, editPost, deletePost}