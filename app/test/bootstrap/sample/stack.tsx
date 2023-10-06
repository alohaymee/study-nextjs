import { Button, Stack, Form } from 'react-bootstrap';
import styles from './styles/StackSample.module.scss';

export default function StackSample() {
  return (
    <>
      <h4>Stack</h4>
      <Stack gap={{ xs: 5, sm: 0, md: 3, lg: 0 }}>
        <div className={`p-2 ${styles.stack}`}>
          Stack 이용하면 full-width 로 아이템을 쌓을 수 있다. default vertical
        </div>
        <div className={`p-2 ${styles.stack}`}>아이템 사이 간격을 주는 gap 속성이 있다.</div>
        <div className={`p-2 ${styles.stack}`}>gap 은 breakpoint에 따라 조정 가능!</div>
        <div className={`p-2 ${styles.stack}`}>Last item</div>
      </Stack>
      <Stack gap={3} direction={'horizontal'}>
        <div className={`p-2 ${styles.stack}`}>direction 속성으로 horizontal 설정함</div>
        <div className={`p-2 ${styles.stack}`}>horizontal 일 때 각 아이템은 컨텐트만큼의 넓이만 갖는다</div>
        <div className={`p-2 ${styles.stack} ms-auto`}>ms-auto 클래스를 추가하면 왼쪽으로 여유만큼 마진이 생긴다</div>
        <div className={`vr`}></div>
        <div className={`p-2 ${styles.stack}`}>ml이 ms로, mr이 me로 바뀌었나보다.</div>
      </Stack>
      <Stack gap={2} className="col-md-5 col-sm-8 mx-auto">
        <h5 className={'p-2'}>Stack 을 이용해 수평으로 버튼 쌓기 예시</h5>
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
      <h5>horizontal Stack 활용한 inline form 예시</h5>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    </>
  );
}
