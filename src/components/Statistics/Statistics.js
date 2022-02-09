import Notification from "./Statistics"

export default function Statistics({good, neutral, bad, total, positivePercentage})  {
    return (
        <div>
            <h2>Statistics</h2>
            {total > 0 ? (<ul>
                <li>Good: { good }</li>
                <li>Neutral: { neutral }</li>
                <li>Bad: { bad }</li>
                <li>Total: { total }</li>
                <li>Positive feedback: { positivePercentage }%</li>
            </ul>) : (<Notification message="There is no feedback" />)
            }
        </div>
    );
    
}