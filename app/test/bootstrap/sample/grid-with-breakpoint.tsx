import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles/GridSample.module.scss';

export default function GridBreakPointSample() {
  return (
    <>
      <h4>Grid x Breakpoint</h4>
      <Container>
        <Row>
          <Col className={styles.col} xs={6} sm={8} md={6} lg={4}>
            xs={6} sm={8} md={6} lg={4}
          </Col>
          <Col className={styles.col} xs={6} sm={4} md={6} lg={8}>
            xs={6} sm={4} md={6} lg={8}
          </Col>
        </Row>
        <Row>
          <Col className={styles.col} xs sm={1} md lg={1}>
            xs sm={8} md={6} lg={4}
          </Col>
          <Col className={styles.col} xs sm={2} md lg={2}>
            xs sm={4} md={6} lg={8}
          </Col>
        </Row>
        <Row>
          <Col className={styles.col} xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col className={styles.col} xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
        <Row>
          <Col className={styles.col} xs>
            First, but unordered
          </Col>
          <Col className={styles.col} xs={{ order: 5 }}>
            Second, but last
          </Col>
          <Col className={styles.col} xs={{ order: 1 }}>
            Third, but second
          </Col>
        </Row>
        <Row>
          <Col className={styles.col} xs={{ order: 'last' }}>
            First, but last
          </Col>
          <Col className={styles.col} xs>
            Second, but unordered
          </Col>
          <Col className={styles.col} xs={{ order: 'first' }}>
            Third, but first
          </Col>
        </Row>
        <Row>
          <Col className={styles.col} md={4}>
            md=4
          </Col>
          <Col className={styles.col} md={{ span: 4, offset: 1 }}>{`md={{ span: 4, offset: 1 }}`}</Col>
        </Row>
        <Row>
          <Col className={styles.col} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
          <Col className={styles.col} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
          <Col className={styles.col} md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row>
      </Container>
    </>
  );
}
