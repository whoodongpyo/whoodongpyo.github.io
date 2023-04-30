import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'
import { PostItem } from 'components/Main/PostItem'

type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

type PostListType = {
  posts: PostType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
const PostList: FunctionComponent<PostListType> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => {
        return (
          <PostItem
            {...frontmatter}
            link="https://www.google.co.kr/"
            key={id}
          />
        )
      })}
    </PostListWrapper>
  )
}

export { PostType, PostList }
