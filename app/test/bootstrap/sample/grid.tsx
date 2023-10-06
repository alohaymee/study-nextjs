import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles/GridSample.module.scss';

export default function GridSample() {
  return (
    <>
      <h4>Grid</h4>
      <Container fluid={'sm'}>
        <Row>
          <Col className={styles.col}>
            넓이 100%를 다 쓰고 싶다면 Container 에 fluid 속성을 넣으면 된다.
            <br /> fluid 속성은 breakpoint를 가질 수 있다. breakpoint 별로 적용이 가능!
          </Col>
        </Row>
        <Row>
          <Col className={styles.col}>Col의 width 값이</Col>
          <Col className={styles.col}>명시되지 않은 경우</Col>
          <Col className={styles.col}>동일한 크기로 분배된다</Col>
        </Row>
        <Row>
          <Col className={styles.col}>하나의 Col 에 width 가 설정될 경우 나머지 Col은 자동으로 크기가 재분배된다</Col>
          <Col className={styles.col} xs={5} sm={5} lg={5}>
            이 Col 은 xs={5} sm={5} lg={5} 로 설정됨
          </Col>
          <Col className={styles.col}>width 설정 없는 Col</Col>
        </Row>
        <Row>
          <Col className={styles.col}>
            xs, sm, lg.. 는 1부터 12의 값을 가질 수 있다. 숫자의 의미는 Container 전체 넓이에 대해 n/12 만큼의 넓이
          </Col>
        </Row>
        <Row>
          <Col md={'auto'} className={styles.col}>
            Col breakpoint 값을 'auto'로 설정할 경우
          </Col>
          <Col md={'auto'} className={styles.col}>
            딱 컨텐트의 크기만큼만
          </Col>
          <Col md={'auto'} className={styles.col}>
            차지한다
          </Col>
        </Row>
      </Container>
    </>
  );
}
