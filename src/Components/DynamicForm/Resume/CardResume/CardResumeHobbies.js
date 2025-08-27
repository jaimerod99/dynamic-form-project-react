import { Card } from "react-bootstrap";
import './CardResume.css'

export default function CardResumeHobbies(props){
    const {subtitle, hobbiesStorage, text} = props;
    
    return(
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle><b>{subtitle}</b></Card.Subtitle>
                    <ul>
                        {hobbiesStorage && hobbiesStorage.map((hobbie, index) => (
                            <li key={index}>{hobbie.label}</li> // ✅ Added return
                        ))}
                    </ul>
                </Card.Body>
            </Card>
            
            {text && (
                <Card className="text-center p-2 card-resume mt-3">
                    <Card.Body>
                        <Card.Subtitle><b>Your additional hobby is:</b></Card.Subtitle>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}