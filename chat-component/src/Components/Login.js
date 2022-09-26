import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({GenerateToken}) =>
{
    const [optCode, setCode] = useState();

    return <Form>
     onSubmit={e => {
                e.preventDefault();
                GenerateToken(OptCode);
              }} 
        <Form.Group>
            <Form.Control placeholder="OptCode" onChange={e => setCode(e.target.value)} />
        </Form.Group>
        <Button variant="success" type="submit" disabled={!OptCode}>Login</Button>
       </Form>
}