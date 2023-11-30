'use client';
import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';
import { PencilLine } from '@phosphor-icons/react/dist/ssr';
import ContentHeader from '@/(pages)/component/layout/ContentHeader';
import styles from './page.module.scss';
import useEventWriteStore from '@/store/eventWrite.store';

const QuillEditor = dynamic(() => import('utils/QuillEditor'), { ssr: false });

const upload = (file: string, set: (imgUrl: string) => void): void => {
  try {
    const formBody = new FormData();
    formBody.append('dirPath', 'zzimcar/event/thumb');
    formBody.append('file', file);

    axios.post('http://localhost:3000/cloud/compression-upload', formBody).then((res) => {
      if (!res.data || !res.data.success) {
        alert('이미지 업로드 실패');
        return;
      }

      const resData = res.data.data;
      set(resData.url);
    });
  } catch (error) {
    console.log(error);
    alert('이미지 업로드 실패');
  }
};

const fileInputGroup = (title: string, imgSizeDesc: string, set: (imgUrl: string) => void) => {
  return (
    <>
      <InputGroup className={`mb-3`}>
        <InputGroup.Text>{title}</InputGroup.Text>
        <Form.Control
          type={'file'}
          accept={'image/*'}
          onChange={(e) => {
            if (!e.target.files) return;
            upload(e.target.files[0], set);
          }}
        />
      </InputGroup>
    </>
  );
};

export default function Page() {
  const {
    hide,
    title,
    postDate,
    postTime,
    postEndDate,
    postEndTime,
    startDate,
    startTime,
    endDate,
    endTime,
    thumbForMo,
    thumbForTb,
    thumbForPc,
    content,
    setHide,
    setTitle,
    setPostDate,
    setPostTime,
    setPostEndDate,
    setPostEndTime,
    setStartDate,
    setStartTime,
    setEndDate,
    setEndTime,
    setThumbForMo,
    setThumbForTb,
    setThumbForPc,
    setContent,
  } = useEventWriteStore((state) => ({
    hide: state.hide,
    title: state.title,
    postDate: state.postDate,
    postTime: state.postTime,
    postEndDate: state.postEndDate,
    postEndTime: state.postEndTime,
    startDate: state.startDate,
    startTime: state.startTime,
    endDate: state.endDate,
    endTime: state.endTime,
    thumbForMo: state.thumbForMo,
    thumbForTb: state.thumbForTb,
    thumbForPc: state.thumbForPc,
    content: state.content,
    setHide: state.setHide,
    setTitle: state.setTitle,
    setPostDate: state.setPostDate,
    setPostTime: state.setPostTime,
    setPostEndDate: state.setPostEndDate,
    setPostEndTime: state.setPostEndTime,
    setStartDate: state.setStartDate,
    setStartTime: state.setStartTime,
    setEndDate: state.setEndDate,
    setEndTime: state.setEndTime,
    setThumbForMo: state.setThumbForMo,
    setThumbForTb: state.setThumbForTb,
    setThumbForPc: state.setThumbForPc,
    setContent: state.setContent,
  }));

  const syncDate = (checked: boolean) => {
    if (!checked) return;
    setStartDate(postDate);
    setStartTime(postTime);
    setEndDate(postEndDate);
    setEndTime(postEndTime);
  };

  const save = () => {
    const reqBody = {
      hide: hide,
      title: title,
      postAt: `${postDate} ${postTime}`,
      postEndAt: `${postEndDate} ${postEndTime}`,
      startAt: `${startDate} ${startTime}`,
      endAt: `${endDate} ${endTime}`,
      thumbForMo: thumbForMo,
      thumbForTb: thumbForTb,
      thumbForPc: thumbForPc,
      content: content,
    };
    console.log(reqBody);
    axios.post('http://localhost:8888/a-db/v1.0/event', reqBody).then((r) => console.log(r));
  };

  return (
    <>
      <Stack gap={3}>
        <ContentHeader title={'이벤트 등록'} description={'새로운 이벤트를 등록합니다.'} Icon={PencilLine} />
        <div>
          <Form>
            <Form.Group className={`mb-3`}>
              <Form.Label>등록자</Form.Label>
              <Form.Control type={'text'} placeholder={'하이웍스와 연동되어야 함..!'} />
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Check
                type={'switch'}
                label={'노출 여부'}
                checked={!hide}
                onChange={(e) => setHide(!hide)}
              ></Form.Check>
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Label className={`required`}>제목</Form.Label>
              <Form.Control
                type={'text'}
                placeholder={'이벤트 제목을 입력해주세요.'}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Label className={`required`}>게시 기간</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type={'date'} value={postDate} onChange={(e) => setPostDate(e.target.value)} />
                <Form.Control type={'time'} value={postTime} onChange={(e) => setPostTime(e.target.value)} />
                <InputGroup.Text>~</InputGroup.Text>
                <Form.Control type={'date'} value={postEndDate} onChange={(e) => setPostEndDate(e.target.value)} />
                <Form.Control type={'time'} value={postEndTime} onChange={(e) => setPostEndTime(e.target.value)} />
              </InputGroup>
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Label className={`required`}>이벤트 기간</Form.Label>
              <Form.Check type={'checkbox'} label={'게시 기간과 동일'} onClick={(e) => syncDate(e.target.checked)} />
              <InputGroup className="mb-3">
                <Form.Control type={'date'} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <Form.Control type={'time'} value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                <InputGroup.Text>~</InputGroup.Text>
                <Form.Control type={'date'} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <Form.Control type={'time'} value={endTime} onChange={(e) => setEndTime(e.target.value)} />
              </InputGroup>
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Label className={`required`}>썸네일</Form.Label>
              {fileInputGroup('1180x300(px) For PC', '1180 x 300', setThumbForPc)}
              {fileInputGroup('704x300(px) For Tablet', '704 x 300', setThumbForTb)}
              {fileInputGroup('300x156(px) For Mobile', '300 x 156', setThumbForMo)}
              <Form.Text>최대 1MB 이하의 파일을 등록하세요. (파일형식 : jpeg, jpg, png, gif)</Form.Text>
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Label className={`required`}>내용</Form.Label>
              <QuillEditor content={content} setContent={setContent} />
            </Form.Group>
            <Button variant={'primary'} type={'button'} onClick={save}>
              저장
            </Button>
          </Form>
        </div>
      </Stack>
    </>
  );
}
