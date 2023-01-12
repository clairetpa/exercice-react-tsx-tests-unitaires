import Button from '@mui/material/Button';

const Btn=(props)=>{
    return (
        <div>
            <Button onClick={props.clic} variant="contained"> Incrementer</Button>
        </div>
    )
}
export default Btn;