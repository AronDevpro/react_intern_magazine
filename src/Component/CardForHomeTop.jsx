import React from 'react';
import {Card, CardContent, Stack, Typography} from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function CardForHomeTop({title}) {
    return (
        <Card sx={{ maxWidth: 345 }} style={{margin: 15}}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h4" fontSize={20}
                style={{
                    maxLines:2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    {title}
                </Typography>

                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Stack direction="row" gap={1}>
                            <AccessTimeIcon fontSize="small"/>
                            <Typography variant="body2" color="text.secondary">
                                3 min ago
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <ChatOutlinedIcon fontSize="small"/>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>
    );
}

export default CardForHomeTop;