





import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.ultimatecarpage.com/images/car/4818/Nissan-Leaf-Nismo-RC-38151.jpg" />
      <Card.Body>
        <Card.Title>Zero Mission</Card.Title>
        <Card.Text>
          Build some guts to drive above speed 300kmph
        </Card.Text>
        <Button variant="primary" >Start Ride NOw</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;