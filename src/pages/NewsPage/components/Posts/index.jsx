import {PostStyle, PostBody, Author, AuthorImg, AuthorName, PostTitle, PostDescription, PostTime, PostImg } from './style'

function Posts ({author, title, description, img, color}){
    return(
        <PostStyle>
            <PostBody>
                <Author>
                    <AuthorImg color={color}/>
                    <AuthorName>{author}</AuthorName>
                </Author>
                <PostTitle>{title}</PostTitle>
                <PostDescription>{description}</PostDescription>
                <PostTime>Mar 31 · 5 min leitura</PostTime>
            </PostBody>
            <PostImg src={img}/>
        </PostStyle>
    )
}

export default Posts;