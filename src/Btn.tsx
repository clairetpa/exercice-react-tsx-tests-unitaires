import Button from '@mui/material/Button';

    const Btn=({click}:{click:()=>void})=>{
        return (
            <div>
                <Button onClick={click} variant="contained"> Incrementer</Button>
            </div>
        )
    }

export default Btn;