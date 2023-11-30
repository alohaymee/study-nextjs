import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
import React, { useRef, useState } from 'react';

export default function QuillEditor({ content, setContent }: { content: string; setContent: any }) {
  const editorRef = useRef<any>(null);
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      if (!input || !input.files) return;
      const file = input.files[0];

      try {
        const formBody = new FormData();
        formBody.append('dirPath', 'zzimcar/event/quill');
        formBody.append('file', file);
        const editor = editorRef.current.getEditor();

        axios.post('http://localhost:8080/cloud/compression-upload', formBody).then((res) => {
          if (!res.data || !res.data.success) {
            alert('이미지 업로드 실패');
            return;
          }

          const resData = res.data.data;
          const imgUrl = resData.url;
          const range = editor.getSelection();
          editor.editor?.insertEmbed(range.index, 'image', imgUrl);
          editor.setSelection(range.index + 1);
        });
      } catch (error) {
        console.log(error);
        alert('이미지 업로드 실패');
      }
    });
  };

  const [editorModules] = useState({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  });

  return <ReactQuill ref={editorRef} theme={'snow'} value={content} onChange={setContent} modules={editorModules} />;
}
