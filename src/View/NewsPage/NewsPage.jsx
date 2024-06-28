import {Container, Grid,} from "@mui/material";
import CoverText from "../../Component/CoverText.jsx";
import {data} from '../../utils/Data.js'
import CardWithImageAndText from "../../Component/CardWithImageAndText.jsx";

function NewsPage() {
    return (
        <>
            <CoverText text="News"/>
            <Container style={{marginBottom:40}}>
                <Grid container spacing={2} alignContent="center">
                    {data.map((datas, index) => (
                    <Grid item xs={12} sm={6} md={4}  key={index}>
                    <CardWithImageAndText image={datas.image} description={datas.description} title={datas.title}/>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default NewsPage;