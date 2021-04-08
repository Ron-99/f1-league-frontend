import { useState} from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';

import useInput from '../../components/Input'

import { Fields, Field, ArticleStyle } from './style';

function NewArticlePage(){

    const [text, setText] = useState('');

    const [title, inputTitle] = useInput({type: 'text', id: 'title', className: 'title', name: 'title'});
    const [description, inputDescription] = useInput({type: 'text', id: 'description', className: 'description', name: 'description'});


    return(
        <ArticleStyle>
            <Fields>
                <Field>
                    <label htmlFor="title">Titulo</label>
                    {inputTitle}
                </Field>

                <Field>
                    <label htmlFor="description">Descrição</label>
                    {inputDescription}
                </Field>
            </Fields>

            <Fields>
                <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(_, editor) => {
                    const data = editor.getData()
                    setText(data);
                }}/>
            </Fields>
        </ArticleStyle>
    )
}

export default NewArticlePage;