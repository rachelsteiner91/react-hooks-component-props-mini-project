import React from 'react'
import Article from './Article';
import blogData from "../data/blog";

function ArticleList({post}) {
  return (
    <main>
       { post.map(el => {
    return <Article key = {el.id} title={el.title} date={el.date} preview={el.preview} /> })}

    </main>
  )
}


export default ArticleList