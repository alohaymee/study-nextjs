'use client';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function AlertSample() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h4>Alerts</h4>
      <Alert variant={'primary'}>Primary</Alert>
      <Alert variant={'secondary'}>Secondary</Alert>
      <Alert variant={'info'}>Info</Alert>
      <Alert variant={'warning'}>Warning</Alert>
      <Alert variant={'danger'}>Danger</Alert>
      <Alert variant={'success'} show={show}>
        <p>Marry Christmas</p>
        <div className={`d-flex justify-content-center`}>
          <Button onClick={() => setShow(false)}>Close</Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}
