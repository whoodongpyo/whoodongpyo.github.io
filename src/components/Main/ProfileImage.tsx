import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'

// 자신이 원하는 프로필 이미지 링크로 설정하기
const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/55405713?v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export { ProfileImage }
