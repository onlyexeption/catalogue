import * as requester from './requests'
import $ from 'jquery';

function seeAllPosts() {
    //https://baas.kinvey.com/appdata/kid_HJ756tb7g/Posts
    let a = requester.get("","Posts", "basic")
        a.then(displayPosts)
        a.catch(
            function (error) {
                return "Ima error" + error;
            })

    //noinspection JSUnresolvedVariable
    function displayPosts(posts){
        let section = $('<div>')
        for(let post of posts){
            let postSec = $('<p>').append(post.title + " " + post.desc)
            section.append(postSec);
        }
        //console.log(section)
        return (section);
    }
}
export {seeAllPosts};