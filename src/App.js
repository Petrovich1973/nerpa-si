import './App.css'
import {Container, Paper} from "@mui/material"
import Review from "./components/Review"
import CheckboxesTags from "./components/Checkboxes"
import CheckboxesGroup from "./components/Checkbox"
import SwitchLabels from "./components/Switch"
import StickyHeadTable from "./components/Table"

function App() {
    return (
        <Container component="main" maxWidth="md" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                <Review/>
                <CheckboxesTags/>
                <CheckboxesGroup/>
                <SwitchLabels/>
            </Paper>
            <StickyHeadTable/>
        </Container>
    )
}

export default App
