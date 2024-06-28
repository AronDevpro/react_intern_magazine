import {Card, CardContent, Stack, Typography} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

function CardForBlogs({title, description}) {
    return (
        <Card sx={{ maxWidth: 345 }} style={{margin: 15}}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div"
                            sx={{
                                backgroundImage: `linear-gradient(90deg, rgba(54,47,171,1) 30%, rgba(121,9,111,1) 54%, rgba(0,212,255,1) 88%)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginBottom={2}>
                    {description ? description : ''}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography variant="body2" fontWeight="bold">
                            By: Zack
                        </Typography>
                    </Stack>
                    <Stack>
                        <Stack direction="row" gap={1}>
                        <AccessTimeIcon fontSize="small"/>
                        <Typography variant="body2" color="text.secondary">
                            3 min ago
                        </Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack>
                            <Stack direction="row" gap={1}>
                                <ChatOutlinedIcon fontSize="small"/>
                                <Typography variant="body2" color="text.secondary">
                                    3 comments
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>
    );
}

export default CardForBlogs;