import React, { FC } from 'react'

import * as S from './styled'

export const Loading: FC = () => (
    <S.Wrapper>
        <S.Spinner viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" strokeWidth="4" />
        </S.Spinner>
    </S.Wrapper>
)
