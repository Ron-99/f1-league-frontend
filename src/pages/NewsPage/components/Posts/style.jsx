import styled from 'styled-components';

export const PostStyle = styled.div`
    width: 80%;
    display:flex;
    padding: 20px;
    
`

export const PostImg = styled.img `
    width: 30%;
`

export const PostBody = styled.div`
    width: 70%;
`

export const Author = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px 0;
`

export const AuthorImg = styled.div`
    width: 30px;
    height: 30px;
    background: ${({ color }) => color};
    margin-right: 5px;
    border-radius: 50%;
`

export const AuthorName = styled.span `
    color: ${({ theme }) => theme.text};
`
export const PostTitle = styled.h1 `
    font-size: 1.2rem;
    padding: 5px;
    color: ${({ theme }) => theme.text};
`
export const PostDescription = styled.p `
    font-size: 0.9rem;
    padding: 5px;
    color: ${({ theme }) => theme.secondText};
`

export const PostTime = styled.span `
    font-size: 0.8rem;
    padding: 5px;
    color: ${({ theme }) => theme.secondText};
`