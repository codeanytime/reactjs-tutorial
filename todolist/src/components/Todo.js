import React from 'react'
import Button from "@atlaskit/button"
import styled, { css } from "styled-components";
import CheckIcon from '@atlaskit/icon/glyph/check';
import EditorEditIcon from '@atlaskit/icon/glyph/editor/edit'
import TrashIcon from '@atlaskit/icon/glyph/trash'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover {
        ${(p) => p.isCompleted && css`
        text-decoration: line-through;
    `}
    }

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon {
        display: none;

        &:hover {
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }
`


export default function Todo({ todo, onCheckBtnClick , onCheckRemoveClick}) {
    return (
        <>
            <ButtonStyled
            isCompleted={todo.isCompleted}
            shouldFitContainer
            iconAfter={
                (!todo.isCompleted && (
                <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
                    <CheckIcon primaryColor='#4fff4f'/>
                </span>))
                || (todo.isCompleted  && (<div>
                    <EditorEditIcon primaryColor='#DD0000'/>
                    <span onClick={() => onCheckRemoveClick(todo.id)}><TrashIcon primaryColor='#DD0000' /></span>
                    </div>))
            }>
                {todo.name}
            </ButtonStyled>
        </>
    )
}
