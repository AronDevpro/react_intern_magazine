import {Card, CardContent, CardMedia, Divider, Typography} from "@mui/material";

function CardWithImageAndText({image, title, description}) {
    return (
        <Card style={{margin: 15}}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Divider style={{marginBottom:10, backgroundColor:"#000"}}/>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardWithImageAndText;