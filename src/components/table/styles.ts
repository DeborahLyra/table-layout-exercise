import styled from "styled-components";

export const TableContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    h1 {
        color: var(--blue-greeny);
        font-size: 3rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
`

export const DivAddTask = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
`

export const TableInput = styled.input` 
    padding: 10px 20px;
    width: 24rem;

    font-size: 1rem;
    color: var(--hot-pink);
    border: 2px solid var(--hot-pink);
    border-radius: 8px;

    &:focus {
        outline: none;
    }
`

export const TableSelect = styled.select`
    padding: 10px 20px;
    width: 10rem;
    margin-left: 1rem;
    color: var(--hot-pink);
    border: 2px solid var(--hot-pink);
    border-radius: 8px;

    &:focus {
        outline: none;
    }
`

export const TableAddButton = styled.button`
    background-color: var(--hot-pink);
    border-radius: 8px;
    padding: 5px 10px;
    margin-left: 1rem;
    border: 0;
    color: var(--pinky);
    text-align: center;
    cursor: pointer;
` 

export const Tables = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem;
    width: 80%;
    height: 60vh;

    @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8rem;
  }
` 

export const SingleTable = styled.table`
    border: 2px solid var(--hot-pink);
    min-height: 8rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TabelThead = styled.thead` 
    background-color: var(--blue-greeny);
    color: var(--pinky);
    letter-spacing: 2px;
    font-size: 1.5rem;
    padding: 0 2rem;
`

export const TableBoddy = styled.tbody` 
    width: 100%;
    height: 100%;
    overflow-y: auto;


    tr {
       width: 100%;
       font-size: 1.2rem;
       margin-bottom: 1rem;
       display: flex;
       justify-content: space-between;
       padding: 10px;
       border-bottom: 3px solid var(--hot-pink);
    }

    tr + tr {
       margin-top: 1rem;
    }

    td {
        width: 100%;
    }

    button {
        margin-left: 10px;
        padding: 5px 10px;
        font-size: 0.9rem;
        color: white;
        background-color: var(--hot-pink);
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: var(--teeny-greeny);
            color: var(--blue-greeny);
        }
    }
`


export const TdDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
`