import {Card, CardContent, Stack, Typography} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime.js";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined.js";

function CardForTrending({title}) {
    return (
        <Card style={{margin: 15}}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h4" fontSize={25}>
                    {title}
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

export default CardForTrending;