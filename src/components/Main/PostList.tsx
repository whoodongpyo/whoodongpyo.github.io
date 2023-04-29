import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'
import { PostItem } from 'components/Main/PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2023. 04. 29',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores beatae blanditiis doloribus eligendi error eum facere, ipsa laudantium, modi nulla optio pariatur perspiciatis quas qui quia quod rem tenetur.',
  thumbnail:
    '<https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp>',
  link: '<https://www.google.co.kr/>',
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`
const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export { PostList }
